USE projetoInicial3T
GO
INSERT INTO tiposUsuario (nome)
VALUES					 ('Administrador')
						,('Comum')
GO

INSERT INTO usuario (nome, email, senha, idTiposUsuario)
VALUES				('Administrador', 'adm@adm.com', 'ADM123', 1)
				   ,('Lucas', 'lucas@hotmail.com', 'LUCAS123', 2)
				   ,('João', 'joao@hotmail.com', 'JOAO123', 2)
GO

INSERT INTO salas (andar, nome, metragem, idUsuario)
VALUES			  (1, 'Sala1', 25, 2)
				 ,(2, 'Sala2', 40, 3)
GO

INSERT INTO equipamentos (marca, tipo, numeroSerie, descricao, numeroPatrimonio, disponivel)
VALUES			
						('Samsung','Informática', '15621', 'Notebook','342216',1)
GO

INSERT INTO salasEquipamentos (idSala, idEquipamento)
VALUES						  (1, 3),
							  (1,4),
							  (2,2)
GO

select * from equipamentos