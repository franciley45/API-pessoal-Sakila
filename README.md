# API-pessoal-Sakila

# Olá! Esta API foi criada para desenvolvedores Front-end júnior que desejam aprimorar ou expandir seus conhecimentos em consumo de API´s. O banco de dados usado como referência foi o Sakila, que simula uma locadora de filmes. O esquema do banco de dados está apresentado logo abaixo.
 <img alt="Rafa-Js" src="./src/schema/SampleSakila.png">
 
# Lista das rotas da API

1. Lista de todos os filmes
```
https://api-pessoal-sakila.vercel.app/films
```
```sql
SELECT *
FROM film;
```
2. Lista de filme por id, passe o id na rota
```
https://api-pessoal-sakila.vercel.app/film/1
```
```sql
SELECT *
FROM film WHERE film_id= ?,[id]
```

3. Lista do titulo de todos os filmes
```
https://api-pessoal-sakila.vercel.app/films/title
```
```sql
SELECT title
FROM film;
```

4. Lista dos clientes ativos e respectivos endereços
```
https://api-pessoal-sakila.vercel.app/customers
```
```sql
SELECT first_name, last_name, address
FROM customer c, address a
WHERE active = 1 AND c.address_id = a.address_id;
```
5. Lista de cliente por id, passe o id na rota
```
https://api-pessoal-sakila.vercel.app/customer/1
```
```sql
SELECT *
FROM customer WHERE customer_id= ?,[id]
```
6. Lista dos clientes inativos
```
https://api-pessoal-sakila.vercel.app/customers/inactive
```
```sql
SELECT *
FROM customer
WHERE active = 0;
```

7. Lista dos nomes dos clientes residentes no Brasil.
```
https://api-pessoal-sakila.vercel.app/customers/brasil
```
```sql
SELECT first_name, last_name, a.address, co.country
FROM customer c, address a, city ct, country co
WHERE c.address_id = a.address_id
	AND a.city_id = ct.city_id
	AND ct.country_id = co.country_id
    AND co.country = "Brazil";
```
8. Relação de filmes e atores que atuaram no mesmo.
```
https://api-pessoal-sakila.vercel.app/films/actors
```
```sql
SELECT f.title, a.first_name, a.last_name
FROM film f, film_actor fa, actor a
WHERE f.film_id = fa.film_id AND a.actor_id = fa.actor_id;
```

9. Relação de filmes com participação de um ator específico passe o nome do ator na rota.
```
https://api-pessoal-sakila.vercel.app/films/actors/PENELOPE
```
```sql
SELECT f.title, a.first_name, a.last_name
FROM film f, film_actor fa, actor a
WHERE f.film_id = fa.film_id AND a.actor_id = fa.actor_id
AND a.first_name = ?,['scarlett']
```

10. Lista de filmes por categoria.
```
https://api-pessoal-sakila.vercel.app/films/category
```
```sql
SELECT f.title, c.name 
FROM film f,category c, film_category fc
WHERE f.film_id = fc.film_id
  AND fc.category_id = c.category_id;
```
