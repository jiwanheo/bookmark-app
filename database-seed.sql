CREATE TABLE
    bookmarks (id SERIAL PRIMARY KEY, bookmark VARCHAR(200));

INSERT INTO
    bookmarks (bookmark)
VALUES
    ('https://jiwanheo.rbind.io'),
    ('https://github.com/jiwanheo');

CREATE ROLE mydb_role
WITH
    LOGIN PASSWORD 'some_password';

GRANT
SELECT
,
UPDATE,
INSERT ON bookmarks TO mydb_role;

GRANT USAGE,
SELECT
    ON ALL SEQUENCES IN SCHEMA public TO mydb_role;