import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { syncToGoogleSheets } from '@/lib/google-sheets';

export async function POST(request: Request) {
  try {
    const { company_name, email, phone, message } = await request.json();

    // Validate required fields
    if (!company_name || !email || !phone) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields: company_name, email, phone' },
        { status: 400 }
      );
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('inquiries')
      .insert({ company_name, email, phone, message: message || '' })
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
      await syncToGoogleSheets({ company_name, email, phone, message: message || '' });
    } catch (sheetsError) {
      console.error('Google Sheets sync error:', sheetsError);
      // Don't fail the main request if Google Sheets sync fails
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error('API error:', err);
    const errorMessage = err instanceof Error ? err.message : 'Invalid request body';
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 400 }
    );
  }
}