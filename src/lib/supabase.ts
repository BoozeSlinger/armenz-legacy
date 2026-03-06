import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

let supabase: SupabaseClient;

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
} else {
  // Create a dummy client that won't crash at build time
  // Runtime calls will fail gracefully in the API route's try/catch
  console.warn('Supabase credentials not configured. Database operations will fail.');
  supabase = new Proxy({} as SupabaseClient, {
    get: () => () => ({ data: null, error: new Error('Supabase not configured') }),
  });
}

export { supabase };
