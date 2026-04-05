
CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;

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
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_contact_submission ON contact_submissions;

CREATE TRIGGER on_contact_submission
  AFTER INSERT ON contact_submissions
  FOR EACH ROW EXECUTE FUNCTION notify_new_contact();
