DROP TABLE people;

DROP TABLE companies;

CREATE TABLE companies (
    id SERIAL PRIMARY KEY,
    name TEXT,
    location TEXT
);

CREATE TABLE people (
    id SERIAL,
    first_name TEXT,
    location TEXT,
    company_id INTEGER REFERENCES companies(id)
);
