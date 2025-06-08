-- Create table statement
CREATE TABLE
  IF NOT EXISTS phones (
    id INTEGER PRIMARY KEY NOT NULL,
    model TEXT NOT NULL,
    brand TEXT NOT NULL,
    ram INTEGER NOT NULL,
    storage INTEGER NOT NULL,
    price REAL NOT NULL,
    imageUrl TEXT NOT NULL,
    websiteUrl TEXT NOT NULL
  );

INSERT INTO
  phones (
    id,
    model,
    brand,
    ram,
    storage,
    price,
    imageUrl,
    websiteUrl
  )
VALUES
  (
    1,
    'Galaxy S25 Ultra',
    'Samsung',
    12,
    512,
    1299.99,
    'https://i.pinimg.com/736x/51/39/2d/51392d506b16ef05c3ebd671b4a9ac57.jpg',
    'https://www.samsung.com/galaxy-s25-ultra/'
  );

INSERT INTO
  phones (
    id,
    model,
    brand,
    ram,
    storage,
    price,
    imageUrl,
    websiteUrl
  )
VALUES
  (
    2,
    'iPhone 16 Pro Max',
    'Apple',
    8,
    512,
    1199,
    'https://i.pinimg.com/736x/42/30/2a/42302ae90cd99b5233ea65bb375f7d69.jpg',
    'https://www.apple.com/iphone-16-pro/'
  );

INSERT INTO
  phones (
    id,
    model,
    brand,
    ram,
    storage,
    price,
    imageUrl,
    websiteUrl
  )
VALUES
  (
    3,
    'Xiaomi 15',
    'Xiaomi',
    12,
    256,
    749.99,
    'https://i.pinimg.com/736x/e0/bf/be/e0bfbe214ad2b0a70a0c0af30b7b486c.jpg',
    'https://www.mi.com/id/product/xiaomi-15-pro/'
  );

INSERT INTO
  phones (
    id,
    model,
    brand,
    ram,
    storage,
    price,
    imageUrl,
    websiteUrl
  )
VALUES
  (
    4,
    'P60 Pro',
    'Huawei',
    8,
    256,
    899.99,
    'https://i.pinimg.com/736x/72/9b/e4/729be4e02ece0dc2e7ba3dde73f70733.jpg',
    'https://consumer.huawei.com/en/phones/p60-pro/'
  );

INSERT INTO
  phones (
    id,
    model,
    brand,
    ram,
    storage,
    price,
    imageUrl,
    websiteUrl
  )
VALUES
  (
    5,
    'Find X8 Pro',
    'Oppo',
    12,
    512,
    899.99,
    'https://i.pinimg.com/736x/91/f5/64/91f564b79b1e973bb46806473f617019.jpg',
    'https://www.oppo.com/en/smartphones/series-find-x/find-x8-pro/'
  );

INSERT INTO
  phones (
    id,
    model,
    brand,
    ram,
    storage,
    price,
    imageUrl,
    websiteUrl
  )
VALUES
  (
    6,
    'X100 Pro',
    'Vivo',
    12,
    512,
    949.99,
    'https://i.pinimg.com/736x/b9/b6/e4/b9b6e42ac26573552844e20fdf5537b7.jpg',
    'https://www.vivo.com/id/products/param/x100pro'
  );

INSERT INTO
  phones (
    id,
    model,
    brand,
    ram,
    storage,
    price,
    imageUrl,
    websiteUrl
  )
VALUES
  (
    7,
    'Galaxy Z Fold 6',
    'Samsung',
    12,
    512,
    1899.99,
    'https://i.pinimg.com/736x/1b/c8/4f/1bc84fd6666345cfc3ed56caa1fcc9e9.jpg',
    'https://www.samsung.com/id/smartphones/galaxy-z-fold6/'
  );

INSERT INTO
  phones (
    id,
    model,
    brand,
    ram,
    storage,
    price,
    imageUrl,
    websiteUrl
  )
VALUES
  (
    8,
    'iPhone 16',
    'Apple',
    6,
    256,
    749,
    'https://i.pinimg.com/736x/b3/e6/ae/b3e6aeaa47709e1e4d23a7b2776b9b12.jpg',
    'https://www.apple.com/iphone-16/'
  );

INSERT INTO
  phones (
    id,
    model,
    brand,
    ram,
    storage,
    price,
    imageUrl,
    websiteUrl
  )
VALUES
  (
    9,
    'Redmi Note 14',
    'Xiaomi',
    6,
    128,
    249.99,
    'https://i.pinimg.com/736x/92/6c/7b/926c7b506f2ba10044d415a126501da5.jpg',
    'https://www.mi.co.id/id/product/redmi-note-14/'
  );

INSERT INTO
  phones (
    id,
    model,
    brand,
    ram,
    storage,
    price,
    imageUrl,
    websiteUrl
  )
VALUES
  (
    10,
    'Mate 50 Pro',
    'Huawei',
    8,
    256,
    999.99,
    'https://i.pinimg.com/736x/85/ac/a3/85aca34c225270eb74ffa38699b152ce.jpg',
    'https://consumer.huawei.com/en/phones/mate50-pro/'
  );