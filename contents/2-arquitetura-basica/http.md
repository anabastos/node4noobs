## 1. HTTP

HTTP é uma sigla que quer dizer **H**yper**T**ext **T**ransfer **P**rotocol, que em português quer dizer, Protocolo de 
transferência de dados no formato de texto. Como o nome já diz, é uma maneira que temos de transferir dados no formato de texto. 

Para se fazer essas transferências, o protocolo segue o modelo **Client-Server** ***(Cliente-Servidor)***, sendo que o **Cliente** é sempre
quem solicita alguma informação e o **Servidor** é sempre quem retorna a informação solicitada.

Vamos imaginar um exemplo:

_Vamos imaginar que você queira saber quantas pessoas lhe seguem no twitter. Para isso, você abre o seu navegador e acessa
sua página do perfil do twitter, certo? Nessa ideia, ao acessar o site do twitter, o seu navegador é o cliente, pois ele está solicitando
a informação (o seu perfil) e o twitter é o servidor, que retornou a informação (que retornou o seu perfil)._

Quando acessamos algum site, as urls que utilizamos seguem um padrão:

```
protocolo://domínio:porta
```

- **Protocolo** é a formato de comunicação, nesse caso, **http**, porém existem outros protocolos de comunicações, como por exemplo: https, ftp, ssh, entre outros;
- **Domínio** é o nome que você conhece como _"google.com"_ ou _"twitter.com"_. Esses nomes são traduzidos por um serviço para endereços de IPs, que são referenciados
aos servidores que estão rodando essas aplicações.
- **Porta lógica** de comunicação com o computador por trás do domínio. Essa propriedade é opcional, pois cada protocolo por padrão já tem uma porta definida, como por exemplo:
ao acessar via http, sem definir uma porta, automaticamente você acessa a porta 80.

Ao acessar [http://localhost:3000/](http://localhost:3000/), você está se conectando via protocolo http no domínio `localhost` (que é a sua maquina), pela porta lógica `3000`.

## API

Trazendo um pouco para o nosso objetivo, ao construir nossa aplicação em Node, estaremos transferindo nossos dados pelo protocolo
HTTP, porém só isso não é o suficiente. Muitas vezes as nossas aplicações vão ter operações muito complexas ou específicas que não é de responsabilidade
do **Cliente** conhece-las, o que importa para ele é apenas a informação.

Imagine o seguinte, você tem em seu banco de dados informações cadastradas de um usuário e o **Cliente** precisa dessas informações, ao invés
dele consultar essas informações diretamente no banco, ele irá chamar sua aplicação que irá consultar e retornar. Ao fazer isso, você está começando a criar
uma **API**.

A sigla API significa **A**pplication **P**rogramming **I**nterface, que em português quer dizer, interface de programação de aplicações, é nada
mais que um conjunto de métodos e padrões pré-estabelecidos numa aplicação de forma que consiga entregar funcionalidades para o cliente. No nosso exemplo da consulta
o usuário, já terá sido definido como o **Cliente** irá solicitar as informações (qual URL, qual método), então ele precisa apenas fazer isso e a sua aplicação
fica encarregada de processar a solicitação. Resumidamente, podemos dizer que uma API é uma fachada amigável para acesso a funcionalidades.

## Métodos HTTP

## Errors codes

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
