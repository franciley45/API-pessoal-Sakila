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