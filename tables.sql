CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    pwd_hash TEXT NOT NULL,
    email VARCHAR(55) NOT NULL
);

CREATE TABLE IF NOT EXISTS products (
    product_id SERIAL PRIMARY KEY,
    SKU VARCHAR(30) NOT NULL,
    brand TEXT NOT NULL,
    model TEXT NOT NULL,
    supplier INT NOT NULL,
    description TEXT,
    color TEXT,
    variantion TEXT
);