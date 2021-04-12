
# COOKENU

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


## Informações do próprio perfil


## Criar Receitas
* title
* description 

## Seguir usuário
* id(do usuário que deseja seguir)

## Feed

___

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

* Pegar próprio perfil
    * Método: GET
    * Path: /user/profile
     * Entradas:
        * Headers 
            * Authorization
    * Saídas:
        * Body
            * id
            * name
            * email

* Criar tarefa
    * Método: PUT
    * Path: /task
    * Body: 
        * title (obrigatório)
        * description (obrigatório)
        * deadline (obrigatório, formato DD/MM/YYYY)

* Pegar tarefa pelo id
    * Método: GET
    * Path: /task/:id
    * Body de Resposta: (retornar um erro se não se encontrar) 
        * id
        * title
        * description
        * deadline (formato DD/MM/YYYY)
        * status 
        * authorNickname