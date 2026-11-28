CREATE TABLE IF NOT EXISTS crm_notification_queue (
 lead_id TEXT PRIMARY KEY REFERENCES crm_leads(id) ON DELETE CASCADE,
 payload TEXT NOT NULL,
 idempotency_key TEXT NOT NULL UNIQUE,
 created_at TEXT NOT NULL,
 next_attempt_at TEXT NOT NULL,
 attempts INTEGER NOT NULL DEFAULT 0 CHECK(attempts BETWEEN 0 AND 4),
 lease_token TEXT NOT NULL DEFAULT '',
 lease_until TEXT NOT NULL DEFAULT '',
 last_status TEXT NOT NULL DEFAULT ''
);
CREATE INDEX IF NOT EXISTS crm_queue_due ON crm_notification_queue(next_attempt_at,lease_until);
CREATE TABLE IF NOT EXISTS crm_quotes (
 lead_id TEXT PRIMARY KEY REFERENCES crm_leads(id) ON DELETE CASCADE,
 title TEXT NOT NULL,
 scope TEXT NOT NULL,
 amount_minor INTEGER NOT NULL CHECK(amount_minor BETWEEN 0 AND 100000000000),
 valid_until TEXT NOT NULL DEFAULT '',
 status TEXT NOT NULL CHECK(status IN ('draft','issued','accepted','declined')),
 revision INTEGER NOT NULL DEFAULT 0,
 created_at TEXT NOT NULL,
 updated_at TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS crm_ops_runs (
 job TEXT PRIMARY KEY,
 last_run TEXT NOT NULL,
 attempted INTEGER NOT NULL,
 accepted INTEGER NOT NULL,
 remaining INTEGER NOT NULL,
 state TEXT NOT NULL
);
CREATE TRIGGER IF NOT EXISTS crm_quote_created AFTER INSERT ON crm_quotes BEGIN
 INSERT INTO crm_history(lead_id,occurred_at,action) VALUES(NEW.lead_id,NEW.created_at,'quote_created');
END;
CREATE TRIGGER IF NOT EXISTS crm_quote_updated AFTER UPDATE OF revision ON crm_quotes WHEN NEW.revision<>OLD.revision BEGIN
 INSERT INTO crm_history(lead_id,occurred_at,action) VALUES(NEW.lead_id,NEW.updated_at,'quote_'||NEW.status);
END;