# Arquitetura de Software 1

## ESTRUTURA DE DADOS 

## Signup
* id 
* name 
* email
* password(no mínimo 6 caracteres) 

## Login
* e-mail 
* password 
RETURN: token

## Delete User
* id


## CRIAÇÃO DE TABELAS - MySql

```sql
CREATE TABLE semana19_users (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL,
    password VARCHAR(64) NOT NULL,
    role VARCHAR(6) NOT NULL 
);
```

## ENDPOINTS

* Signup
    * Método: POST
    * Path: /signup
    * Entradas:
        * Body 
            * name (obrigatório)
            * email (obrigatório)
            * password (obrigatório)
    * Saídas:
        * Body
            * access token

* Login
    * Método: POST
    * Path: /login
    * Entradas:
        * Body 
            * email (obrigatório)
            * password (obrigatório)
    * Saídas:
        * Body
            * access token

* GetUsers
    * Método: Get
    * Path: /all
    * Entradas:
        * Headers
            * Authorization
    * Saídas:
        * Body
            * Users

* DeleteUser
    * Método: PUT
    * Path: /:id
    * Entradas:
        * Headers
            * Authorization
