-- Drop and recreate passwords_storage table
DROP TABLE IF EXISTS passwords CASCADE;

--passwords database to hold authenticated/logged in users passwords, when they were created/updated and which organisation they belong to
CREATE TABLE passwords (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  password_text VARCHAR(255) NOT NULL,
  url VARCHAR(255) NOT NULL,
  category VARCHAR(255) NOT NULL,
  organisation_id INTEGER REFERENCES organisations(id) ON DELETE CASCADE
  -- created_at TIMESTAMP,
  -- updated_at TIMESTAMP
);
