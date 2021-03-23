### Exercício 1
a) VARCHAR- se usa para declarar strings.
DATE - para declarar data.
TABLE - para declarar um tabela.
b) SHOW DATABASES: mostrou o meu database e "information_schema". O comando serve para mostrar diferentes bases de dados.
SHOW TABLES: mostrou o nome das tabelas que eu criei.
c) Mostrou todas as informações da tabela Actor.

### Exercício 2
b) Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'. Esse erro aconteceu pois a chave de um elemento deve ser unica por tanto não deve se repetir.
c) 
1. Depois do nome da tabela não foram passados data de nascimento.
2. gênero. 

d) 
1. Não foi decclarado o valor nome apos o nome da tabela.
2. Ao declarar a tabela o campo nome foi declarado com "NOT NULL" portanto não é possivel criar um elemento se esse campo for nulo.

c)
1. Ao declarar um item do tipo date é necessario usar "aspas" para delimitar o valor.
2. O valor não pode conter ponto.

### Exercício 3
c) Não retornou nenhum pois todos os valores de gender da tabela são válidos sendo "male" ou "female".
d) O erro desse comando é que o campo na tabela está como name e não "nome":
SELECT id, name from Actor WHERE id = "002";

### Exercício 4
a) A query pega todoss os valores de um determinado ator. Se o nome do ator começar com A ou J e o salario for maior que 300 mil.

### Exercício 5
a) A tabela de filmes recebe filmes contendo sinopse avaliação e data de lançamento. Tambem recebe título e ID.



