-- Passwords_storage table seeds here (Example)
INSERT INTO passwords_storage (id, creator_id, username, password, website_name, website_category, organization_id) VALUES

-- Recovery email referenced from users.sql
(1, 1, 'Facebook_username', 'SecretPass','www.facebook.com', 'social', 1 ),
(2, 2, 'Instagram_username', 'SuperPa$$','www.instagram.com', 'social', 2),
(3, 3, 'TD_bank_user','$uperB', 'www.td-bank.com', 'banking', 2),
(4, 3, 'Netflix_user','Net$uperB', 'www.netflix.com', 'entertainment', 2);
