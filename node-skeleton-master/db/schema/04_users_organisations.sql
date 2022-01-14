DROP TABLE IF EXISTS users_organisations CASCADE;

--users_organization table is used to join the relationship between users and organizations table using a unique identifier to link the two matching ids
CREATE TABLE users_organisations (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  organisations_id INTEGER REFERENCES organisations(id) ON DELETE CASCADE
);
