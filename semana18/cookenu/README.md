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

<!-- * status: `"to_do" || "doing" || "done"` -->

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
    description VARCHAR(1024) DEFAULT "No description provided",
    deadline DATE,
    status ENUM("TO_DO", "DOING", "DONE") DEFAULT "TO_DO",
    author_id VARCHAR(64),
    FOREIGN KEY (author_id) REFERENCES cookenu_users(id)
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