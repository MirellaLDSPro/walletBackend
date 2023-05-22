# WalletBackend

Este é o repositório do backend para o aplicativo WalletTest, que é um exemplo de implementação de uma carteira digital usando tecnologias web.

## Funcionalidades

-   Gerenciamento de usuários: registro, autenticação e recuperação de senha.
-   CRUD (Create, Read, Update, Delete) de cartões de pagamento.
-   Integração com serviços de pagamento externos.
-   API RESTful para comunicação com o frontend.

## Pré-requisitos

-   Node.js instalado na versão 12.x ou superior.
-   Banco de dados MySQL configurado.

## Configuração

1.  Clone este repositório em sua máquina local.
2.  Instale as dependências do projeto usando o comando `npm install`.
3.  Configure as variáveis de ambiente necessárias, como a conexão com o banco de dados e as chaves de API de pagamento.
4.  Execute o comando `npm run start` para iniciar o servidor.

## Endpoints da API

A API expõe os seguintes endpoints principais:

-   `POST /api/users/register`: cria um novo usuário.
-   `POST /api/users/login`: realiza o login do usuário.
-   `POST /api/users/forgot-password`: solicita a redefinição de senha.
-   `PUT /api/users/reset-password`: redefine a senha do usuário.
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
