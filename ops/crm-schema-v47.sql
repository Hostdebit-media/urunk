CREATE TABLE IF NOT EXISTS crm_leads (
 id TEXT PRIMARY KEY,
 request_key TEXT UNIQUE,
 fingerprint TEXT NOT NULL UNIQUE,
 created_at TEXT NOT NULL,
 updated_at TEXT NOT NULL,
 name TEXT NOT NULL,
 email TEXT NOT NULL DEFAULT '',
 phone TEXT NOT NULL DEFAULT '',
 business TEXT NOT NULL DEFAULT '',
 service TEXT NOT NULL,
 message TEXT NOT NULL DEFAULT '',
 lang TEXT NOT NULL CHECK(lang IN ('fr','en')),
 source TEXT NOT NULL,
 page_path TEXT NOT NULL DEFAULT '',
 privacy_accepted_at TEXT NOT NULL,
 analytics_consent INTEGER NOT NULL CHECK(analytics_consent IN (0,1)),
 landing_page TEXT NOT NULL DEFAULT '',
 referrer_host TEXT NOT NULL DEFAULT '',
 utm_source TEXT NOT NULL DEFAULT '',
 utm_medium TEXT NOT NULL DEFAULT '',
 utm_campaign TEXT NOT NULL DEFAULT '',
 stage TEXT NOT NULL DEFAULT 'new' CHECK(stage IN ('new','contacted','qualified','proposal','won','lost')),
 notification_status TEXT NOT NULL DEFAULT 'pending' CHECK(notification_status IN ('pending','accepted','failed','unknown','sent','delivered','bounced','complained','delivery_delayed','suppressed')),
 provider_id TEXT,
 notification_updated_at TEXT,
 value_minor INTEGER NOT NULL DEFAULT 0 CHECK(value_minor >= 0 AND value_minor <= 100000000000),
 follow_up TEXT NOT NULL DEFAULT '',
 note TEXT NOT NULL DEFAULT '',
 revision INTEGER NOT NULL DEFAULT 0
);
CREATE INDEX IF NOT EXISTS crm_leads_stage_created ON crm_leads(stage,created_at DESC);
CREATE INDEX IF NOT EXISTS crm_leads_created ON crm_leads(created_at DESC);
CREATE INDEX IF NOT EXISTS crm_leads_provider ON crm_leads(provider_id);
CREATE TABLE IF NOT EXISTS crm_history (
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 lead_id TEXT NOT NULL REFERENCES crm_leads(id) ON DELETE CASCADE,
 occurred_at TEXT NOT NULL,
 action TEXT NOT NULL,
 previous_stage TEXT,
 next_stage TEXT
);
CREATE INDEX IF NOT EXISTS crm_history_lead ON crm_history(lead_id,occurred_at);
CREATE TRIGGER IF NOT EXISTS crm_lead_created AFTER INSERT ON crm_leads BEGIN
 INSERT INTO crm_history(lead_id,occurred_at,action,next_stage) VALUES(NEW.id,NEW.created_at,'captured',NEW.stage);
END;
CREATE TRIGGER IF NOT EXISTS crm_lead_updated AFTER UPDATE OF revision ON crm_leads WHEN NEW.revision<>OLD.revision BEGIN
 INSERT INTO crm_history(lead_id,occurred_at,action,previous_stage,next_stage) VALUES(NEW.id,NEW.updated_at,'commercial_update',OLD.stage,NEW.stage);
END;
CREATE TRIGGER IF NOT EXISTS crm_notification_updated AFTER UPDATE OF notification_status ON crm_leads WHEN NEW.notification_status<>OLD.notification_status BEGIN
 INSERT INTO crm_history(lead_id,occurred_at,action) VALUES(NEW.id,COALESCE(NEW.notification_updated_at,NEW.updated_at),'notification_'||NEW.notification_status);
END;