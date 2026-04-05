
CREATE OR REPLACE FUNCTION notify_new_contact()
RETURNS trigger AS $$
BEGIN
  PERFORM net.http_post(
    url := 'https://formspree.io/f/maqldojp',
    headers := '{"Content-Type": "application/json"}'::jsonb,
    body := json_build_object(
      'name', NEW.name,
      'email', NEW.email,
      'message', NEW.message,
      '_subject', 'New Contact: ' || NEW.name
    )::text
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER
SET search_path = public, extensions;
