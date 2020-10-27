# 1. HTTP

Explicar aqui  
[ ] Como funciona a interação cliente e servidor  
[ ] O que é uma API  
[ ] O que é uma porta  
[ ] O que é HTTP  
[ ] HTTP Methods  
[ ] Error codes

## Métodos HTTP
Geralmente em APIs REST queremos 

## Errors codes
Quando fazemos requisições HTTP 

### GET
O método GET explicita que queremos "pegar" algum tipo de informação do servidor. Esse método não tem intenção de modificar qualquer dado existente no servidor. Por exemplo, uma requisição **GET** no `endpoint` de `"users"` deve retornar os dados dos usuários.

**Exemplos de requisições e suas respostas**
Requisição | Resposta
--- | ---
**HTTP GET www.server.com/users ** | `[{id: 1, nome: "Ana"}, {id: 2, nome: "João"}]`
**HTTP GET www.server.com/users/1 ** | `{nome: "Ana"}`
**HTTP GET www.server.com/users/1/details ** | `{}`

### POST
Usamos o método **POST** quando queremos adicionar dados no nosso servidor.
code 201 ? 

**Exemplos de requisições e suas respostas**
Requisição | Resposta
--- | ---
**HTTP POST www.server.com/users ** | `{}`
