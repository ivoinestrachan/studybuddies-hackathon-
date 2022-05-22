CREATE DATABASE jwtauth;


CREATE TABLE users(
   user_id uuid  PRIMARY KEY DEFAULT
   uuid_generate_v4(),
   first_name VARCHAR (255) NOT NULL,
   user_name VARCHAR(255) NOT NULL,
   user_password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);


-- test user --
INSERT INTO users(first_name, user_name, user_password) VALUES ('jacob', 'jacob242', 'jacob1234');