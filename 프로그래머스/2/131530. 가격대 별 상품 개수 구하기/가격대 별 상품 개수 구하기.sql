SELECT  FLOOR(PRICE/10000)*10000 AS PRICE_GROUP, COUNT(*) AS PRODUCTS
 FROM  product
 GROUP BY  PRICE_GROUP
 ORDER BY  PRICE_GROUP ASC