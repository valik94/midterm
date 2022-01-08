-- Organizations table seeds here (Example)
INSERT INTO organizations (id, org_name, username, password, website, user_id, type) VALUES
-- Social, TYPE=1
(1, 'Facebook', 'AliceInWonderland', 'SecretPass','www.facebook.com', 1, 1),
(2, 'Twitter', 'KiraPasswordKeepa', 'SuperPa$$','www.twitter.com',2, 1),
(3, 'Instagram', 'BobTheKeepar','$uperB', 'www.Instagram.com',3, 1);
--Banking, TYPE=2
(4, 'TD Bank', 'AliceInWonderland', 'SecretTD','www.td-bank.com', 1, 2)
(5, 'RBC Bank', 'KiraPasswordKeepa', 'SuperRBC','www.rbc-bank.com', 2, 2)
(6, 'CIBC Bank', 'BobTheKeepar', 'CIBC$uper','www.td-bank.com', 3, 2)
--Work/Email, TYPE=3
(7, 'Work @gmail.com', 'AliceInWonderland', 'SecretEmail','www.google.com', 1, 3)
(8, 'Work @yahoo.com', 'KiraPasswordKeepa', 'YMail$','www.yahoo.com', 2, 3)
(9, 'Work @outlook.com', 'BobTheKeepar', 'SuperEmail','www.outlook.com', 1, 3)
