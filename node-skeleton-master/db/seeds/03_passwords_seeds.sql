-- Passwords_storage table seeds here (Example)
INSERT INTO passwords_storage (id, creator_id, username, password, website_name, website_category, organization_id, created_at, updated_at) VALUES

-- demo data for the passwords storage database
(1, 1, 'Facebook_username', 'SecretPass','www.facebook.com', 'social', 1, now(), now()),
(2, 2, 'Instagram_username', 'SuperPa$$','www.instagram.com', 'social', 2, now(), now()),
(3, 3, 'TD_bank_user','$uperB', 'www.td-bank.com', 'banking', 2, now(), now()),
(4, 3, 'Netflix_user','Net$uperB', 'www.netflix.com', 'entertainment', 2, now(), now());
