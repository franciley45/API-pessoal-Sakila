# API-pessoal-Sakila

# Lista das rotas da API

1. Lista de todos os filmes

```sql
SELECT *
FROM film;
```
2. Lista de filme por id

```sql
SELECT *
FROM film WHERE film_id= ?,[id]
```

3. Lista do titulo de todos os filmes

```sql
SELECT title
FROM film;
```

4. Lista dos clientes ativos e respectivos endereços

```sql
SELECT first_name, last_name, address
FROM customer c, address a
WHERE active = 1 AND c.address_id = a.address_id;
```
6. Lista de cliente por id

```sql
SELECT *
FROM customer WHERE customer_id= ?,[id]
```
7. Lista dos clientes inativos

```sql
SELECT *
FROM customer
WHERE active = 0;
```

8. Lista dos nomes dos clientes residentes no Brasil.

```sql
SELECT first_name, last_name, a.address, co.country
FROM customer c, address a, city ct, country co
WHERE c.address_id = a.address_id
	AND a.city_id = ct.city_id
	AND ct.country_id = co.country_id
    AND co.country = "Brazil";
```
9. Relação de filmes e atores que atuaram no mesmo.

```sql
SELECT f.title, a.first_name, a.last_name
FROM film f, film_actor fa, actor a
WHERE f.film_id = fa.film_id AND a.actor_id = fa.actor_id;
```
10. Relação de filmes com participação de um ator específico passe o nome do ator na rota.
```sql
SELECT f.title, a.first_name, a.last_name
FROM film f, film_actor fa, actor a
WHERE f.film_id = fa.film_id AND a.actor_id = fa.actor_id
AND a.first_name = ?,['scarlett']
```