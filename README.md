# WalletBackend

Este é o repositório do backend para o aplicativo WalletTest, que é um exemplo de implementação de uma carteira digital usando tecnologias web.

## Funcionalidades

-   CRUD (Create, Read, Update, Delete) de cartões de pagamento.
-   API RESTful para comunicação com o frontend.

## Pré-requisitos

-   Node.js instalado na versão 12.x ou superior.
-   [json-server](https://github.com/typicode/json-server) instalado

## Configuração

1.  Clone este repositório em sua máquina local.
2.  Instale as dependências do projeto usando o comando `npm install`.
4.  Execute o comando `node server.js` para iniciar o servidor.

## Endpoints da API

A API expõe os seguintes endpoints principais:

-   `GET /api/cards`: lista todos os cartões de pagamento.
-   `GET /api/cards/:id`: busca um cartão específico.
-   `POST /api/cards`: cria um novo cartão.
-   `PUT /api/cards/:id`: atualiza um cartão existente.
-   `DELETE /api/cards/:id`: exclui um cartão.

Consulte a documentação completa da API para obter mais detalhes sobre os endpoints e os dados esperados.

## Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões de melhoria, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](https://chat.openai.com/c/LICENSE).
