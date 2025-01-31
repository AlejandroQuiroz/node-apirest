CREATE TABLE users(
    id serial PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (name, email) VALUES ('Alejandro Quiroz', 'alex@api.com');
INSERT INTO users (name, email) VALUES ('Derek Quiroz', 'derek@api.com');

SELECT * FROM users;