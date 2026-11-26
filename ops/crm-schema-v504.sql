-- V5.0.4 additive migration; apply once after inspecting PRAGMA table_info.
ALTER TABLE crm_leads ADD COLUMN qualification_website TEXT NOT NULL DEFAULT '';
ALTER TABLE crm_leads ADD COLUMN qualification_sector TEXT NOT NULL DEFAULT '';
ALTER TABLE crm_leads ADD COLUMN qualification_goal TEXT NOT NULL DEFAULT '';
ALTER TABLE crm_leads ADD COLUMN qualification_budget TEXT NOT NULL DEFAULT '';
ALTER TABLE crm_leads ADD COLUMN qualification_timeframe TEXT NOT NULL DEFAULT '';
