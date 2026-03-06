// src/app/api/inquiry/route.ts
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import syncToGoogleSheets from '@/lib/google-sheets';

export async function POST(request: Request) {
  try {
    const { company_name, email, phone, message } = await request.json();

    // Insert into Supabase
    const { data, error } = await supabase
      .from('inquiries')
      .insert([
        { company_name, email, phone, message },
      ]);

    if (error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }

    // Sync to Google Sheets
    await syncToGoogleSheets({ company_name, email, phone, message });

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false, error: 'Invalid request body' }, { status: 400 });
  }
}