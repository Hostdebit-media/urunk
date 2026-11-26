-- V5.0.6: manual commercial ledger, MAD minor units. No payment processor.
CREATE TABLE IF NOT EXISTS crm_clients_v506 (
 id TEXT PRIMARY KEY, name TEXT NOT NULL CHECK(length(name) BETWEEN 2 AND 160),
 lead_id TEXT UNIQUE REFERENCES crm_leads(id) ON DELETE SET NULL,
 created_at TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS crm_contracts_v506 (
 id TEXT PRIMARY KEY, client_id TEXT NOT NULL REFERENCES crm_clients_v506(id) ON DELETE RESTRICT,
 offer TEXT NOT NULL CHECK(offer IN ('seo-growth','ads-performance','growth-partner','maintenance','custom')),
 signed_ref TEXT NOT NULL DEFAULT '', status TEXT NOT NULL CHECK(status IN ('draft','active','paused','ended')),
 monthly_minor INTEGER NOT NULL CHECK(monthly_minor BETWEEN 1 AND 100000000000),
 start_date TEXT NOT NULL, renewal_date TEXT NOT NULL DEFAULT '', end_date TEXT NOT NULL DEFAULT '',
 revision INTEGER NOT NULL DEFAULT 0, created_at TEXT NOT NULL, updated_at TEXT NOT NULL,
 CHECK(status='draft' OR length(trim(signed_ref))>0),
 CHECK(renewal_date='' OR renewal_date>=start_date), CHECK(end_date='' OR end_date>=start_date),
 CHECK((status='ended' AND end_date<>'') OR (status<>'ended' AND end_date=''))
);
CREATE TABLE IF NOT EXISTS crm_invoices_v506 (
 id TEXT PRIMARY KEY, client_id TEXT NOT NULL REFERENCES crm_clients_v506(id) ON DELETE RESTRICT,
 contract_id TEXT REFERENCES crm_contracts_v506(id) ON DELETE RESTRICT,
 invoice_ref TEXT NOT NULL UNIQUE, amount_minor INTEGER NOT NULL CHECK(amount_minor BETWEEN 1 AND 100000000000),
 issue_date TEXT NOT NULL, due_date TEXT NOT NULL CHECK(due_date>=issue_date), created_at TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS crm_payments_v506 (
 id TEXT PRIMARY KEY, invoice_id TEXT NOT NULL REFERENCES crm_invoices_v506(id) ON DELETE RESTRICT,
 payment_ref TEXT NOT NULL, amount_minor INTEGER NOT NULL CHECK(amount_minor BETWEEN 1 AND 100000000000),
 received_date TEXT NOT NULL, created_at TEXT NOT NULL, UNIQUE(invoice_id,payment_ref)
);
CREATE TRIGGER IF NOT EXISTS crm_invoice_contract_v506 BEFORE INSERT ON crm_invoices_v506
WHEN NEW.contract_id IS NOT NULL AND NOT EXISTS(SELECT 1 FROM crm_contracts_v506 WHERE id=NEW.contract_id AND client_id=NEW.client_id)
BEGIN SELECT RAISE(ABORT,'contract_client_mismatch'); END;
CREATE TRIGGER IF NOT EXISTS crm_payment_limit_v506 BEFORE INSERT ON crm_payments_v506
WHEN NEW.amount_minor+COALESCE((SELECT SUM(amount_minor) FROM crm_payments_v506 WHERE invoice_id=NEW.invoice_id),0)>(SELECT amount_minor FROM crm_invoices_v506 WHERE id=NEW.invoice_id)
 OR NEW.received_date<(SELECT issue_date FROM crm_invoices_v506 WHERE id=NEW.invoice_id)
BEGIN SELECT RAISE(ABORT,'payment_amount_or_date_invalid'); END;
CREATE INDEX IF NOT EXISTS crm_contract_client_v506 ON crm_contracts_v506(client_id);
CREATE INDEX IF NOT EXISTS crm_invoice_client_v506 ON crm_invoices_v506(client_id);
CREATE INDEX IF NOT EXISTS crm_payment_invoice_v506 ON crm_payments_v506(invoice_id);
