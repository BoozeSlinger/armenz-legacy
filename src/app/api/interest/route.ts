import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import { syncToGoogleSheets } from '@/lib/google-sheets';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

const NOTIFICATION_EMAILS = ['events@thederbyroom.com', '909openmarket@gmail.com', 'armenzlegacy@gmail.com', 'ryan@lastcall.marketing'];

const INTEREST_LABELS: Record<string, string> = {
  player: 'Player',
  sponsor: 'Sponsor',
  both: 'Player + Sponsor',
};

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Honeypot — bots fill every field; humans never see this one
    if (body.website) {
      return NextResponse.json({ success: true });
    }

    const name = (body.name || '').trim();
    const email = (body.email || '').trim();
    const interest = INTEREST_LABELS[body.interest] ? body.interest : 'player';

    if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: 'A name and a valid email are required.' },
        { status: 400 }
      );
    }

    if (!supabaseUrl || !supabaseServiceRoleKey) {
      console.error('Supabase credentials missing.');
      return NextResponse.json({ success: false, error: 'Server misconfiguration.' }, { status: 500 });
    }

    const tier = `2027 Early Access — ${INTEREST_LABELS[interest]}`;
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey);

    const { data: inserted, error: dbError } = await supabaseAdmin
      .from('inquiries')
      .insert({
        company_name: name,
        email,
        phone: '',
        message: '2027 early-access list signup',
        sponsorship_tier: tier,
        shirt_size: '',
      })
      .select();

    if (dbError) {
      console.error('Supabase error:', dbError);
      return NextResponse.json({ success: false, error: dbError.message }, { status: 400 });
    }

    // Sheets sync — awaited: serverless freezes after the response returns
    try {
      await syncToGoogleSheets({
        company_name: name,
        email,
        phone: '',
        message: '2027 early-access list signup',
        sponsorship_tier: tier,
      });
    } catch (err) {
      console.error('Sheets sync error:', err);
    }

    // Email notification — awaited for the same reason
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      try {
        await new Resend(resendKey).emails.send({
          from: 'Ryan @ Armenz Legacy <ryan@lastcall.marketing>',
          to: NOTIFICATION_EMAILS,
          subject: `New 2027 Early Access Signup — ${INTEREST_LABELS[interest]}`,
          html: `
            <h2>New 2027 Early Access Signup</h2>
            <table style="border-collapse:collapse;width:100%;max-width:500px">
              <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Name</td><td style="padding:8px;border:1px solid #ddd">${name}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #ddd">${email}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Interested As</td><td style="padding:8px;border:1px solid #ddd">${INTEREST_LABELS[interest]}</td></tr>
            </table>
            <p style="color:#888;font-size:12px;margin-top:16px">Submitted ${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })} PT</p>
          `,
        });
      } catch (err) {
        console.error('Email send error:', err);
      }
    }

    return NextResponse.json({ success: true, data: inserted });
  } catch (err) {
    console.error('Interest API error:', err);
    return NextResponse.json(
      { success: false, error: err instanceof Error ? err.message : 'Invalid request' },
      { status: 400 }
    );
  }
}
