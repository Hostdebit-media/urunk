-- V5.0.5 additive migration. Existing leads are retained.
ALTER TABLE crm_leads ADD COLUMN last_follow_up_at TEXT NOT NULL DEFAULT '';
CREATE TRIGGER IF NOT EXISTS crm_followup_recorded_v505 AFTER UPDATE OF last_follow_up_at ON crm_leads
WHEN NEW.last_follow_up_at<>OLD.last_follow_up_at AND NEW.last_follow_up_at<>''
BEGIN
 INSERT INTO crm_history(lead_id,occurred_at,action,previous_stage,next_stage)
 VALUES(NEW.id,NEW.last_follow_up_at,'followup_recorded',OLD.stage,NEW.stage);
END;
CREATE TRIGGER IF NOT EXISTS crm_followup_date_v505 AFTER UPDATE OF follow_up ON crm_leads
WHEN NEW.follow_up<>OLD.follow_up
BEGIN
 INSERT INTO crm_history(lead_id,occurred_at,action,previous_stage,next_stage)
 VALUES(NEW.id,NEW.updated_at,'followup_rescheduled',OLD.stage,NEW.stage);
END;
