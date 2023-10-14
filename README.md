# API-pessoal-Sakila

# Lista das rotas da API

1. Lista de todos os filmes

```sql
SELECT *
FROM film;
```

2. Lista do titulo de todos os filmes

```sql
SELECT title
FROM film;
```

3. Lista dos clientes ativos e respectivos endereços

```sql
SELECT first_name, last_name, address
FROM customer c, address a
WHERE active = 1 AND c.address_id = a.address_id;
```

4. Lista dos clientes inativos

```sql
SELECT *
FROM customer
WHERE active = 0;
```

5. Lista dos nomes dos clientes residentes no Brasil.

```sql
SELECT first_name, last_name, a.address, co.country
FROM customer c, address a, city ct, country co
WHERE c.address_id = a.address_id
	AND a.city_id = ct.city_id
	AND ct.country_id = co.country_id
    AND co.country = "Brazil";
```
