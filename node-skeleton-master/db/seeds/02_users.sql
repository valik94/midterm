-- Users table seeds here for test data as initial users of the platform
INSERT INTO users (email, master_password, organisation_id, created_at) VALUES
('alice@wonderland.com', 'SecretPass', 1, now()),
('Kira@gmail.com', 'SuperPa$$', 2, now()),
('BobK@gmail.com', '$uperB', 2, now());
