DROP TABLE IF EXISTS haiku;

CREATE TABLE haiku (
    id SERIAL PRIMARY KEY,
    first_line VARCHAR(200),
    second_line VARCHAR(200),
    third_line VARCHAR(200),
    subject VARCHAR(1000)
);
