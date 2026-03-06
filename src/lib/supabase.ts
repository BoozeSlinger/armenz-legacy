import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zrncgoajwlisttvzvwdr.supabase.co';
const supabaseAnonKey = 'sb_publishable_B5hYvISutYiZWGUfc...'; // copy full value

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
