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

## Informações do próprio perfil
<!-- ... -->
<!-- * status: `"to_do" || "doing" || "done"` -->



## Criar Receitas
* title
* description 

## Seguir usuário
* id(do usuário que deseja seguir)

## Feed

___

## CRIAÇÃO DE TABELAS - MySql

```sql
CREATE TABLE cookenu_users (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL,
    password VARCHAR(64) NOT NULL
);
```
```sql
CREATE TABLE cookenu_recipes (
    id VARCHAR(64) PRIMARY KEY,
    title VARCHAR(64) NOT NULL,
    description VARCHAR(1024) NOT NULL,
    cratedAt VARCHAR(64) NOT NULL
);
```

```sql
CREATE TABLE cookenu_recipes (
    task_id VARCHAR(64),
    assignee_id VARCHAR(64),
    PRIMARY KEY (task_id, assignee_id),
    FOREIGN KEY (task_id) REFERENCES cookenu_tasks(id),
    FOREIGN KEY (assignee_id) REFERENCES cookenu_users(id)
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

* Pegar perfil de outro usuário
    * Método: GET
    * Path: /user/:id
    * Entradas:
        * Path Param
            * id
        * Headers:
            * Authorization
    * Saídas:
        * Body
            * id
            * name
            * email

* Criar Reaceita 
    * Método: POST
    * Path: /recipe
    * Entradas:
        * Headers:
            * Authorization
        * Body
            * title
            * description

* Pegar receita 
    * Método: GET
    * Path: /recipe/:id
    * Entradas:
        * Path Param
            * id(id da receita)
        * Headers:
            * Authorization
    * Saídas:
        * Body
            * id
            * title
            * description
            * cratedAt