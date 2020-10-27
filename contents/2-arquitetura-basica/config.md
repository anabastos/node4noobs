# 4. Config

Como devo fazer minhas configurações no NodeJS?  
R: Usa-se o Dotenv (.env).

## 4.1 Criando um arquivo .env

Instale a biblioteca dotenv com o comando `npm i dotenv`;

Inicialmente você deve criar um arquivo .env na raiz do seu projeto e definir valores para chaves. Mas como é isso?

```
# .env

KEY=value
DB_NAME=node4noobs
DB_PASSWORD=
DB_HOST=localhost
```

- As chaves por padrão são em caixa alta, mas não é uma exigência;
- As chaves não podem ser espaçadas (uma sugestão é usar underline, ex: `DB_NAME`);
- Os valores podem ser espaçados e se for um valor vazio será retornado uma string vazia;

## 4.2 Usando as configurações do arquivo .env

### 4.2.1 Criação de um arquivo de configuração

Precisamos criar um arquivo que retorna um objeto com todos valores da configuração.
Esse arquivo faz o import da configuração do .env e exporta um objeto com as chaves definidas;

```javascript
// config.js
import "dotenv/config.js";

export default {
  key: process.env.KEY, // "value"
  dbName: process.env.DB_NAME, // "node4noobs"
  dbPassword: process.env.DB_PASSWORD, // ""
  host: process.env.DB_HOST, // "localhost"
};
```

### 4.2.2 Usando o arquivo de configuração que usa o arquivo .env

Agora é só usar o arquivo de configuração como você usaria qualquer arquivo de constantes.

```javascript
// index.js
import config from "./config";

console.log(config);
```

O que é retornado é um objeto, como esperado:

```javascript
{
  key: 'value',
  dbName: 'node4noobs',
  dbPassword: '',
  host: 'localhost'
}
```

## 4.3 O que geralmente colocamos nos .env

Geralmente, os .env são repletos de variáveis de configuração, essa variáveis servem para representar seu ambiente.
Por exemplo: no ambiente de desenvolvimento e de produção, os e-mails usados, endereço do host, nome do banco de dados e senhas são diferentes.

## 4.4 Observações sobre o ambiente de produção

O arquivo `.env` nunca deve estar no código fonte do repositório. Um arquivo `.env.example` com valores vazios para as chaves pode ser criado e commitado para ajudar os próximos desenvolvedores do projeto.
Para projetos de produção é recomendado usar as configurações de ambiente dentro do serviço de hospedagem como Netlify, Vercel, etc. Isso é feito para garantir integridade dos serviços e chaves guardados.
