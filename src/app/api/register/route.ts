import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

const NOTIFICATION_EMAILS = ['events@thederbyroom.com', '909openmarket@gmail.com'];

async function syncGolfRegistrationToSheets(data: Record<string, string>) {
  const url = process.env.APPS_SCRIPT_GOLF_URL || '';
  if (!url) {
    console.warn('Golf Sheets sync skipped: APPS_SCRIPT_GOLF_URL not configured');
    return;
  }
  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data }),
    redirect: 'follow',
  });
  console.log('Synced golf registration to Google Sheets');
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = (body.name || '').trim();
    const email = (body.email || '').trim();
    const phone = (body.phone || '').trim();
    const entry_type = body.entry_type === 'foursome' ? 'foursome' : 'single';
    const handicap = (body.handicap || '').trim();
    const shirt_size = (body.shirt_size || '').trim();
    const additional_players = (body.additional_players || '').trim();
    const price = entry_type === 'foursome' ? 600 : 150;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and phone are required.' },
        { status: 400 }
      );
    }

    if (!supabaseUrl || !supabaseServiceRoleKey) {
      console.error('Supabase credentials missing.');
      return NextResponse.json({ success: false, error: 'Server misconfiguration.' }, { status: 500 });
    }

    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey);

    const { data: inserted, error: dbError } = await supabaseAdmin
      .from('registrations')
      .insert({ name, email, phone, entry_type, handicap, shirt_size, additional_players, price })
      .select();

    if (dbError) {
      console.error('Supabase error:', dbError);
      return NextResponse.json({ success: false, error: dbError.message }, { status: 400 });
    }

    // Google Sheets sync (non-blocking)
    syncGolfRegistrationToSheets({
      name,
      email,
      phone,
      entry_type,
      handicap,
      shirt_size,
      additional_players,
      price: `$${price}`,
      submitted_at: new Date().toISOString(),
    }).catch((err) => console.error('Sheets sync error:', err));

    // Email notification (non-blocking)
    const resendKey = process.env.RESEND_API_KEY;
    const entryLabel = entry_type === 'foursome' ? 'Foursome ($600)' : 'Deluxe Single ($150)';
    if (resendKey) new Resend(resendKey).emails.send({
      from: 'Armenz Legacy <onboarding@resend.dev>',
      to: NOTIFICATION_EMAILS,
      subject: `New Golf Registration — ${entryLabel}`,
      html: `
        <h2>New Registration — Armenz Legacy Golf Tournament</h2>
        <table style="border-collapse:collapse;width:100%;max-width:500px">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Entry Type</td><td style="padding:8px;border:1px solid #ddd">${entryLabel}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Name</td><td style="padding:8px;border:1px solid #ddd">${name}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #ddd">${email}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Phone</td><td style="padding:8px;border:1px solid #ddd">${phone}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Handicap</td><td style="padding:8px;border:1px solid #ddd">${handicap || '—'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Shirt Size</td><td style="padding:8px;border:1px solid #ddd">${shirt_size || '—'}</td></tr>
          ${additional_players ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Additional Players</td><td style="padding:8px;border:1px solid #ddd;white-space:pre-wrap">${additional_players}</td></tr>` : ''}
        </table>
        <p style="color:#888;font-size:12px;margin-top:16px">Submitted ${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })} PT</p>
      `,
    })?.catch((err: unknown) => console.error('Email send error:', err));

    return NextResponse.json({ success: true, data: inserted });
  } catch (err) {
    console.error('Register API error:', err);
    return NextResponse.json(
      { success: false, error: err instanceof Error ? err.message : 'Invalid request' },
      { status: 400 }
    );
  }
}
