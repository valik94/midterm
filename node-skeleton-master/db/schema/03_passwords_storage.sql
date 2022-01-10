-- Drop and recreate passwords_storage table
DROP TABLE IF EXISTS passwords_storage CASCADE;

CREATE TABLE passwords_storage (
  id SERIAL PRIMARY KEY NOT NULL,
  creator_id VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  website_name VARCHAR(255) NOT NULL,
  website_category VARCHAR(255) NOT NULL,
  organization_id INTEGER REFERENCES organizations(id) ON DELETE CASCADE
);
