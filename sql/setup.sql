-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
Drop table if exists teams;

CREATE table teams (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    founded INT NOT NULL,
    founder VARCHAR NOT NULL
    
);

INSERT INTO teams (name, founded, founder) VALUES ('Bulls', 1966, 'Dick Klein');