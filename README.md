# backend-gobarber
💈 Backend da aplicação GoBarber 💈 BOOTCAMP GOSTACK 11.0 🚀


## 🚀 Como rodar a aplicação

1. Faça um clone desse repositório;
2. Entre na pasta rodando `cd backend-barber`;
3. Rode `yarn` para instalar as dependências;
4. Crie um banco de dados `postgres` com o nome de `gobarber`;
5. Renomeie o arquivo `ormconfig.json.example` para `ormconfig.json`;
6. Coloque a porta utilizada pelo banco de dados e as suas credenciais dentro do `ormconfig.json`;
7. Renomeie o arquivo `.env.example` para `.env`;
8. Configure seu App Secret no arquivo `.env`;
9. Rode `yarn typeorm migration:run` para executar as migrations;
10. Rode `yarn dev:server` para iniciar o servidor.
11. Configure e rode seu mongoDB e Redis
