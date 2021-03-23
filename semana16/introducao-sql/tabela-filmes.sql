CREATE TABLE Filmes (
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR (255) NOT NULL,
    sinopse TEXT NOT NULL,
    data_de_lancamento DATE NOT NULL,
	avaliacao INT NOT NULL
);

INSERT INTO Filmes (id, nome, sinopse, data_de_lancamento, avaliacao)
VALUES
("001", "Se Eu Fosse Você", "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos", "2006/01/06", 7),
("002", "Doce de mãe", "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela", "2012/12/27", 10),
("003", "Dona Flor e Seus Dois Maridos", "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.", "2017/11/02", 8),
("004", "Minha Mãe É uma Peça 3", "Marcelina está grávida e Juliano vai casar. Dona Hermínia está mais ansiosa do que nunca. Para completar as confusões, Carlos Alberto, seu ex-marido, que esteve sempre por perto, agora resolve se mudar para o apartamento ao lado", "2019/12/26", 9);

SELECT id, nome, avaliacao FROM Filmes
WHERE id = "002";

SELECT * FROM Filmes WHERE nome = "Dona Flor e Seus Dois Maridos";

SELECT id, nome, sinopse FROM Filmes WHERE avaliacao >= 7;

SELECT * FROM Filmes WHERE nome LIKE "%vida%";

SELECT * FROM Filmes
WHERE nome LIKE "%mãe%" OR sinopse LIKE "%mãe%";

SELECT * FROM Filmes
WHERE data_de_lancamento < CURDATE() AND 
      (nome LIKE "%mãe%" OR
      sinopse LIKE "%mãe%");