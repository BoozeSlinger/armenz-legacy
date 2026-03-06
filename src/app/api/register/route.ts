import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { syncGolfRegistrationToSheets } from '@/lib/google-sheets';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const name = data.name || '';
    const email = data.email || '';
    const phone = data.phone || '';
    const entry_type = data.entry_type || 'single';
    const handicap = data.handicap || '';
    const shirt_size = data.shirt_size || '';
    const additional_players = data.additional_players || '';

    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields: name, email, phone' },
        { status: 400 }
      );
    }

    if (supabaseUrl && supabaseServiceRoleKey) {
      const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey);
      const { error } = await supabaseAdmin
        .from('golf_registrations')
        .insert({ name, email, phone, entry_type, handicap, shirt_size, additional_players });

      if (error) {
        console.error('Supabase error:', error);
        // Don't fail — still sync to sheets
      }
    }

    try {
      await syncGolfRegistrationToSheets({ name, email, phone, entry_type, handicap, shirt_size, additional_players });
    } catch (sheetsError) {
      console.error('Google Sheets sync error:', sheetsError);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Registration API error:', err);
    const errorMessage = err instanceof Error ? err.message : 'Invalid request body';
    return NextResponse.json({ success: false, error: errorMessage }, { status: 400 });
  }
}
