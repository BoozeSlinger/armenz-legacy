import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { syncToGoogleSheets } from '@/lib/google-sheets';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Map form fields to database fields
    // Frontend sends: name, email, phone, message, sponsorship_tier
    // Database expects: company_name, email, phone, message, sponsorship_tier
    const company_name = data.name || data.company_name || '';
    const email = data.email || '';
    const phone = data.phone || '';
    const message = data.message || '';
    const sponsorship_tier = data.sponsorship_tier || '';
    const shirt_size = data.shirt_size || '';

    // Validate required fields
    if (!company_name || !email || !phone) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields: name/company_name, email, phone' },
        { status: 400 }
      );
    }

    if (!supabaseUrl || !supabaseServiceRoleKey) {
       console.error('Supabase credentials missing. Ensure NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set.');
       return NextResponse.json({ success: false, error: 'Server misconfiguration: Database credentials missing.' }, { status: 500 });
    }

    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey);

    // Insert into Supabase
    const { data: insertedData, error } = await supabaseAdmin
      .from('inquiries')
      .insert({
        company_name,
        email,
        phone,
        message: message || '',
        sponsorship_tier: sponsorship_tier || '',
        shirt_size: shirt_size || '',
      })
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 400 }
      );
    }

    // Sync to Google Sheets (non-blocking, wrapped in try/catch)
    try {
      await syncToGoogleSheets({
        company_name,
        email,
        phone,
        message: message || '',
        sponsorship_tier: sponsorship_tier || '',
        shirt_size: shirt_size || '',
      });
    } catch (sheetsError) {
      console.error('Google Sheets sync error:', sheetsError);
      // Don't fail the main request if Google Sheets sync fails
    }

    return NextResponse.json({ success: true, data: insertedData });
  } catch (err) {
    console.error('API error:', err);
    const errorMessage = err instanceof Error ? err.message : 'Invalid request body';
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 400 }
    );
  }
}
