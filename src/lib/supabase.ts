import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zrncgoajwlisttvzvwdr.supabase.co';
const supabaseAnonKey = 'sb_publishable_nmeO8YjdO-BHdfY_c0W_Yg_cnDi1Mkd';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
