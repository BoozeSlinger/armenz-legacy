import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mfhvdruyalxqssigaijs.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1maHZkcnV5YWx4cXNzaWdhaWpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcyNzc3NzQsImV4cCI6MjA4Mjg1Mzc3NH0.W-ISj2LTEGHaXzW3iMXX8hT9Wec96HH8op2bYzum2p8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
