-- V5.0.7: management accounting only; amounts in MAD minor units.
CREATE TABLE IF NOT EXISTS crm_costs_v507 (
 id TEXT PRIMARY KEY, ref TEXT NOT NULL UNIQUE, category TEXT NOT NULL CHECK(category IN ('acquisition','delivery','overhead')),
 channel TEXT NOT NULL DEFAULT '' CHECK(channel IN ('','organic','paid_search','paid_social','referral','direct','other','unknown')),
 client_id TEXT REFERENCES crm_clients_v506(id) ON DELETE RESTRICT,
 incurred_date TEXT NOT NULL, net_minor INTEGER NOT NULL CHECK(net_minor BETWEEN 1 AND 100000000000),
 paid_date TEXT NOT NULL DEFAULT '', paid_minor INTEGER NOT NULL DEFAULT 0 CHECK(paid_minor BETWEEN 0 AND 100000000000),
 created_at TEXT NOT NULL,
 CHECK((category='acquisition' AND channel<>'') OR (category<>'acquisition' AND channel='')),
 CHECK(category='delivery' OR client_id IS NULL),
 CHECK((paid_date='' AND paid_minor=0) OR (paid_date<>'' AND paid_minor>0))
);
CREATE TABLE IF NOT EXISTS crm_invoice_net_v507 (
 invoice_id TEXT PRIMARY KEY REFERENCES crm_invoices_v506(id) ON DELETE RESTRICT,
 net_minor INTEGER NOT NULL CHECK(net_minor BETWEEN 0 AND 100000000000), updated_at TEXT NOT NULL
);
CREATE TRIGGER IF NOT EXISTS crm_invoice_net_limit_v507 BEFORE INSERT ON crm_invoice_net_v507
WHEN NEW.net_minor>(SELECT amount_minor FROM crm_invoices_v506 WHERE id=NEW.invoice_id)
BEGIN SELECT RAISE(ABORT,'net_exceeds_invoice'); END;
CREATE TRIGGER IF NOT EXISTS crm_invoice_net_update_v507 BEFORE UPDATE ON crm_invoice_net_v507
WHEN NEW.net_minor>(SELECT amount_minor FROM crm_invoices_v506 WHERE id=NEW.invoice_id)
BEGIN SELECT RAISE(ABORT,'net_exceeds_invoice'); END;
CREATE TABLE IF NOT EXISTS crm_acquisitions_v507 (
 client_id TEXT PRIMARY KEY REFERENCES crm_clients_v506(id) ON DELETE RESTRICT,
 acquired_date TEXT NOT NULL,
 channel TEXT NOT NULL CHECK(channel IN ('organic','paid_search','paid_social','referral','direct','other','unknown')),
 updated_at TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS crm_month_review_v507 (
 month TEXT PRIMARY KEY, cost_complete INTEGER NOT NULL CHECK(cost_complete IN (0,1)),
 acquisition_complete INTEGER NOT NULL CHECK(acquisition_complete IN (0,1)),
 cash_complete INTEGER NOT NULL CHECK(cash_complete IN (0,1)), reviewed_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS crm_cost_date_v507 ON crm_costs_v507(incurred_date,category);
CREATE INDEX IF NOT EXISTS crm_acq_date_v507 ON crm_acquisitions_v507(acquired_date,channel);

-- Any subsequent source entry invalidates an earlier completeness review.
CREATE TRIGGER IF NOT EXISTS crm_cost_review_v507 AFTER INSERT ON crm_costs_v507
BEGIN UPDATE crm_month_review_v507 SET cost_complete=0,cash_complete=0 WHERE month IN (substr(NEW.incurred_date,1,7),substr(NEW.paid_date,1,7)); END;
CREATE TRIGGER IF NOT EXISTS crm_acq_review_insert_v507 AFTER INSERT ON crm_acquisitions_v507
BEGIN UPDATE crm_month_review_v507 SET acquisition_complete=0 WHERE month=substr(NEW.acquired_date,1,7); END;
CREATE TRIGGER IF NOT EXISTS crm_acq_review_update_v507 AFTER UPDATE ON crm_acquisitions_v507
BEGIN UPDATE crm_month_review_v507 SET acquisition_complete=0 WHERE month IN (substr(OLD.acquired_date,1,7),substr(NEW.acquired_date,1,7)); END;
CREATE TRIGGER IF NOT EXISTS crm_cash_review_v507 AFTER INSERT ON crm_payments_v506
BEGIN UPDATE crm_month_review_v507 SET cash_complete=0 WHERE month=substr(NEW.received_date,1,7); END;
