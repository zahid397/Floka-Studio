
-- Create newsletter_subscribers table
CREATE TABLE public.newsletter_subscribers (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL
);

-- Enable RLS
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Allow anyone to subscribe (insert)
CREATE POLICY "Anyone can subscribe to newsletter"
ON public.newsletter_subscribers
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Add budget and service columns to contact_submissions
ALTER TABLE public.contact_submissions ADD COLUMN IF NOT EXISTS budget text;
ALTER TABLE public.contact_submissions ADD COLUMN IF NOT EXISTS service text;

-- Allow anonymous users to insert contact submissions
CREATE POLICY "Anonymous users can submit contact form"
ON public.contact_submissions
FOR INSERT
TO anon
WITH CHECK (true);
