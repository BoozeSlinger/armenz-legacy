import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Force dynamic — a GET handler with no request usage is statically cached at
// build time, which would serve a stale build-time response and never actually
// hit Supabase. force-dynamic guarantees the query runs on every cron invocation.
export const dynamic = 'force-dynamic';

// Cron job endpoint — keeps Supabase from pausing on the free plan.
// Runs daily via vercel.json cron schedule.
export async function GET() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json({ ok: false, error: 'missing env' }, { status: 500 });
  }

  const supabase = createClient(supabaseUrl, supabaseKey);
  const { error } = await supabase.from('registrations').select('id').limit(1);

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true, ts: new Date().toISOString() });
}
