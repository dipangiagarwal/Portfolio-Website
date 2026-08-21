/*
# Create contact_messages table (single-tenant, no auth)

1. New Tables
- `contact_messages`
  - `id` (uuid, primary key, auto-generated)
  - `name` (text, not null) — sender's name
  - `email` (text, not null) — sender's email
  - `message` (text, not null) — the contact message body
  - `created_at` (timestamptz, default now()) — when the message was submitted

2. Security
- Enable RLS on `contact_messages`.
- Allow anon + authenticated INSERT so the public contact form (anon key) can submit messages without signing in.
- No SELECT/UPDATE/DELETE policies for anon — only the portfolio owner (via service role / dashboard) can read or manage messages.
- This is a single-tenant portfolio contact form: any visitor can submit, but only the owner can read submissions.

3. Important Notes
- The frontend uses the anon key, so the INSERT policy must include `anon` or submissions will silently fail RLS.
- No user_id column or auth.uid() checks — this table is intentionally public-write, owner-read.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anyone (anon + authenticated) to insert contact messages
DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages"
ON contact_messages FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- No SELECT/UPDATE/DELETE policies for anon — owner reads via dashboard/service role only
