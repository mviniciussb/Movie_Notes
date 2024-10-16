# Movie Notes API

**Movie Notes API** é uma API criada para armazenar e gerenciar notas sobre filmes. O projeto foi desenvolvido utilizando **Node.js** no back-end, com **Knex** como query builder e **SQLite3** como banco de dados. A API permite realizar operações de CRUD (Create, Read, Update, Delete) para gerenciar notas de filmes, sem a necessidade de um front-end por enquanto.

## Funcionalidades

- **CRUD de Notas**: Permite criar, listar, atualizar e deletar notas de filmes.
- **Banco de Dados SQLite3**: Utiliza o banco de dados SQLite3 para armazenar informações sobre as notas de filmes.
- **Hash de Senhas**: A API implementa segurança para os usuários cadastrados utilizando a biblioteca **bcryptjs** para hash de senhas.
- **Migrations com Knex**: Usa o Knex para criar e gerenciar as tabelas no banco de dados por meio de migrations.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.
- **Express**: Framework web para construção de APIs.
- **Knex**: Query builder utilizado para interagir com o banco de dados SQLite3.
- **SQLite3**: Banco de dados utilizado no projeto.
- **Bcryptjs**: Biblioteca para hash de senhas.
- **Nodemon**: Ferramenta para reiniciar automaticamente o servidor durante o desenvolvimento.

## Requisitos

- **Node.js** instalado (versão 14+)
- **npm** instalado

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/movie-notes-api.git

2. Acesse a pasta do projeto:
   ```bash
   cd movie-notes-api

3. Instale as dependências:
   ```bash
   npm install
   
4. Execute as migrations para configurar o banco de dados:
   ```bash
   npm run migrate


## Uso

1. Para iniciar o servidor em modo de desenvolvimento (com nodemon):
   ```bash
   npm run dev

2. Para iniciar o servidor em modo de produção:
   ```bash
   npm start

 A API estará rodando em http://localhost:5555



 ## Estrutura do Projeto

 src/
├── controllers/   # Controladores das rotas da API
├── database/      # Configurações do banco de dados e migrations
├── models/        # Modelos de dados (Knex)
├── routes/        # Definições das rotas da API
└── server.js      # Arquivo principal que inicia o servidor


Contribuições
Se você deseja contribuir com o projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request.

Licença
Este projeto está licenciado sob a Licença MIT.
