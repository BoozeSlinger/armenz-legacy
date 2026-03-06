import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { syncToGoogleSheets } from '@/lib/google-sheets';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Map form fields to database fields
    // Frontend sends: name, email, phone, message, sponsorship_tier, price
    // Database expects: company_name, email, phone, message, sponsorship_tier, price
    const company_name = data.name || data.company_name || '';
    const email = data.email || '';
    const phone = data.phone || '';
    const message = data.message || '';
    const sponsorship_tier = data.sponsorship_tier || '';
    const price = data.price || '';

    // Validate required fields
    if (!company_name || !email || !phone) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields: name/company_name, email, phone' },
        { status: 400 }
      );
    }

    // Insert into Supabase
    const { data: insertedData, error } = await supabase
      .from('inquiries')
      .insert({
        company_name,
        email,
        phone,
        message: message || '',
        sponsorship_tier: sponsorship_tier || '',
        price: price || '',
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
        price: price || '',
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
