-- Passwords_storage table seeds here (Example)
INSERT INTO passwords (id, user_id, password_text, url, category, organisation_id, created_at, updated_at) VALUES

-- demo data for the passwords storage database
(1, 1, 'SecretPass','www.facebook.com', 'social', 1, now(), now()),
(2, 2, 'SuperPa$$','www.instagram.com', 'social', 2, now(), now()),
(3, 3, '$uperB', 'www.td-bank.com', 'banking', 2, now(), now()),
(4, 3,'Net$uperB', 'www.netflix.com', 'entertainment', 2, now(), now());
