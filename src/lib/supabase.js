import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let client;

if (supabaseUrl && supabaseAnonKey && !supabaseUrl.startsWith('[ADD') && !supabaseAnonKey.startsWith('[ADD')) {
  client = createClient(supabaseUrl, supabaseAnonKey);
} else {
  console.warn(
    'Supabase environment variables (VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY) are missing or set to placeholder. ' +
    'Contact form message submissions will fail gracefully, but the rest of the site is fully active.'
  );
  // Export a mock client to prevent application startup crash
  client = {
    from: () => ({
      insert: async () => {
        console.error('Supabase client not configured. Message submission aborted.');
        return { error: new Error('Supabase environment variables are not configured.') };
      },
    }),
  };
}

export const supabase = client;
