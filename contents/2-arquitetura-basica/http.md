
## API

Trazendo um pouco para o nosso objetivo, ao construir nossa aplicação em Node, estaremos transferindo nossos dados pelo protocolo HTTP, porém só isso não é o suficiente. Muitas vezes as nossas aplicações vão ter operações muito complexas ou específicas que não é de responsabilidade
do **Cliente** conhece-las, o que importa para ele é apenas a informação.

Imagine o seguinte, você tem em seu banco de dados informações cadastradas de um usuário e o **Cliente** precisa dessas informações, ao invés
dele consultar essas informações diretamente no banco, ele irá chamar sua aplicação que irá consultar e retornar. Ao fazer isso, você está começando a criar
uma **API**.

A sigla API significa **A**pplication **P**rogramming **I**nterface, que em português quer dizer, interface de programação de aplicações, é nada
mais que um conjunto de métodos e padrões pré-estabelecidos numa aplicação de forma que consiga entregar funcionalidades para o cliente. No nosso exemplo da consulta
o usuário, já terá sido definido como o **Cliente** irá solicitar as informações (qual URL, qual método), então ele precisa apenas fazer isso e a sua aplicação
fica encarregada de processar a solicitação. Resumidamente, podemos dizer que uma API é uma fachada amigável para acesso a funcionalidades.

## HTTP

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

Mas porquê `http://localhost:3000/`? Vamos quebrar em partes:
`http`: Chamadas REST sempre são em HTTP, mas podemos ter HTTPS também.
`localhost`:
`3000`: Porta(algum link sobre portas?) do host, se nenhuma porta é dada assume-se a porta 80.
`/`: É o "Path". Se eu quero ir pra uma rota especifica vou coloca-lo nesse lugar. Ex: `/about` ou `/login`.

Sendo assim toda a web é feita de requisições HTTP e saber sobre esse protocolo é essêncial para nosso servidor.

## Requisições

As requisições HTTP contêm as informações necessárias para que o serviço identifique o que o cliente quer!
Pra isso temos também um padrão de como fazê-las.

Temos de primeiro ter um identificador do nosso servidor, que geralmente é uma **URI**, conhecida como *Uniform Resource Identifier*.
Geralmente usamos **URLs** como `www.server.com/users` que são responsáveis por provê os recursos em JSON(Ver NPM.) pelos metodos HTTP. Em Rotas veremos essas URIs em ação.

As **URLs** são hierarquicas. Em que estruturamos o que queremos de forma organizada no path.
Então supondo que minha API contêm dados de usuários podemos estruturar assim:
`www.server.com/users/:`: Quando quero ver os usuários.
`www.server.com/users/:id` Quando quero ver um usuário específico.
`www.server.com/users/:id/friends` Quando quero ver os amigos do usuários específico.
`www.server.com/users/:id/friends/:id` Quando quero ver um amigos específico do usuário específico.

A parte mais importante é o **HEADER**, ele passa várias informações sobre tipos de conexão, proxies, como é para o servidor usar cache da requisição, o conteúdo da requisição etc.

Os mais importantes que temos de nos preocupar geralmente são:

**Metodo HTTP**
Verbo que explicita o que queremos fazer com o recurso.

**Authorization**
Carrega as credenciais de quem está fazendo a requisição. Nem todo mundo pode ter acesso a certos recursos, muitas vezes precisaria estar logado ou com permissões especificas. Com esse campo podemos identificar e tratar estes casos.

**Parametros**
Parametros são as partes váriaveis dos recursos. Nesse caso se quisermos configurar coisas a mais colocamos dentro da **URI** após o path o que chamamos de "Query String", Esse campo é completamente opcional e o separamos na URL por uma ?. Os usos mais comuns são para paginação ou filtros.
Então podemos colocar algo como `http://localhost:3000/users?withDetails` se quisermos pedir mais detalhes sobre o usuário, ou então `http://localhost:3000/users?name=ana` se quisermos filtrar nomes com "Ana" e até mesmo `http://localhost:3000/users?limit=10` se quisermos mostrar apenas os 10 primeiros usuários.

No google por exemplo ao buscarmos algo especifico a URL fica assim: `https://www.google.com/search?q=node`

No Corpo da requisição ou **BODY** é o conteúdo que podemos passarmos mais informações que podem ser necessárias. Isso pode ser arquivos em formatos diferentes(HTML, imagem, texto) ou dados em formato JSON para o servidor interpretar.

## Status Code
TODO

## REST

Sempre falando sobre "APIs REST". Mas afinal o que é REST?

REST significa **REpresentational State Transfer**, e é um padrão definito nos anos 2000 sobre como a web deveria se comportar, afinal, se todos o servers usasem o HTTP do jeito que quisessem seria uma loucura.

A ideia principal dele é que temos um **recurso**, seja ele dados ou respostas, e o REST é a interface que usamos o HTTP para acessa-los ou modifica-los.

Nele os métodos HTTP mais populares são:
- **GET**: Pede acesso de leitura ao recurso
- **PUT**: Cria um novo recurso
- **DELETE**: Remove um recurso
- **POST**: Modifica um recurso ou cria um novo.

Mas temos [muitos outros](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods)
E com eles o nosso serviço consegue trocar dados entre outros sistemas e aplicações.

### GET
O método GET explicita que queremos "pegar" algum tipo de informação do servidor. Esse método não tem intenção de modificar qualquer dado existente no servidor. Por exemplo, uma requisição **GET** no `endpoint` de `"users"` deve retornar os dados dos usuários.

**Exemplos de requisições e suas respostas**
Header | Body | Resposta
--- | --- | ---
**HTTP GET www.server.com/users ** | vázio | HTTP 200 `[{id: 1, nome: "Ana"}, {id: 2, nome: "João"}]`
**HTTP GET www.server.com/users/1 ** | vázio | HTTP 200 `{nome: "Ana"}`
**HTTP GET www.server.com/users/1/details **| vázio | HTTP 200 `{signo: Gemeos, altura: 160}`
**HTTP GET www.server.com/users/0 **| vázio | HTTP 404

A nossa requisição tem um body vazio pois estamos apenas pedindo os dados.
A resposta de nossas requisições retorna 200 quando foi possível pegar esses dados e 404 quando não existem os dados

## PUT
Usamos o método **PUT** quando queremos adicionar dados no nosso servidor.

**Exemplos de requisições e suas respostas**
Header | Body | Resposta
--- | --- | ---
**HTTP PUT www.server.com/users ** | {email: "eu@node.com.br", senha: "1234"} | HTTP 200 `{status: 'OK'}`
**HTTP PUT www.server.com/users ** | {email: "euasdfas@node.com.br", senha: "1233"} | HTTP 403

Na primeira requisição estamos passando dentro do corpo os dados do usuários que queremos criar em JSON e temos um retorno positivo sobre o que ocorreu.
Na segunda temos um 403, que significa um erro de autorização, provavelmente eu não tinha permissão para criar esse usuário!

### POST
Usamos o método **POST** quando queremos atualizar algo. Supondo que estou querendo modificar a senha do usuário

**Exemplos de requisições e suas respostas**
Header | Body | Resposta
--- | --- | ---
**HTTP POST www.server.com/users/1/password ** | {old: "1234", new: "senha@1234"} | HTTP 200 `{status: 'OK'}`
**HTTP POST www.server.com/users/1/password ** | {old: "1233", new: "senha@1234"} | HTTP 403
**HTTP POST www.server.com/users/0/password ** | {old: "1234", new: "senha@1234"} | HTTP 404

Na primeira requisição estamos passando dentro do corpo os dados novos do usuários que queremos criar em JSON e temos um retorno positivo sobre o que ocorreu.
Na segunda temos um 403 pois eu errei a senha antiga
Na terceira estou tentando modificar a senha de um usuário não existe. Por isso 404.

## Adendo

Lembrando que "REST" é um conceito que abrange qualquer tipo de linguagem ou ferramenta.

Dessa forma por exemplo, se eu fizer uma aplicação de servidor em Node.js ele pode se comunicar apenas pela internet usando HTTP em um servidor Python ou PHP.
É um padrão universal que não deveria mudar de empresa pra empresa. Qualquer um pode consumir a minha API e eu posso consumir a API dos outros sem saber de mais nada além desse padrão.

Antigamente ao invés de REST usavamos um padrão chamado **SOAP** em que usavamos apenas o **POST** explicitando a ação que queria que o servidor fizesse em *XML* dentro do **BODY**, isso dá mais liberdade lidar com erros ou fazer ações específicas mas também pode dificultar a curva de aprendizagem.

APIs modernas em **GraphQL** similarmente também só enviam dados dentro do **BODY**, mas a propria ferramenta tem uma documentação explicita de todos os dados que podem ser requisitados e seus campos, facilitando essa curva de aprendizagem.
