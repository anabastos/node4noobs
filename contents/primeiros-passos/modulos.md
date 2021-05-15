# 4. Módulos NPM

No capítulo anterior a título de exemplo importamos o pacote npm chamado `express`. Mas o que são pacotes?
Pacotes são pedaços de código que estão cadastrados na npm, que quando queremos usar em nosso projeto podemos importa-los. Esse pedaço de código chamamos de módulos, e eles ficam guardado dentro da pasta `node_modules`.

A ideia é que cada um desse módulos tenha seu próprio contexto e não interfiram um nos outros, tornando o desenvolvimento mais limpo.

Podemos importar esses pedaços de código pela função `require` do próprio Node.js ou pelo `import`, que é uma sintaxe mais moderna e mais amplamente usada.

```javascript
const modulo = require("nome-do-modulo")
// OU
import modulo from "nome-do-modulo"
```

Existem três tipos de módulos.

- **Local Modules:** Qualquer arquivo Javascript dentro do meu próprio projeto. Você importa no caso o caminho do para o arquivo dentro do projeto.
- **Third Party Modules:** Pacotes feitos por terceiros. Você precisa adiciona-los dentro do `package.json` para que esse modulo seja baixado. Um exemplo é o `express` que exemplificamos no capitulo anterior. Para importar usa-se o nome do pacote.
- **Core Modules:** Módulos do próprio node, como por exemplo `http`,`fs` ou `util`. Você não precisa adicionar eles no `package.json` pois eles já vem por padrão dentro do Node.js.

## 4.1 Importando pacotes de terceiros

Vamos a um exemplo, abra o terminal e importe o pacote chamado `node-color-log`, que serve para que possamos dar `console.log` com cores, com o comando `npm i node-color-log`.

Pode parecer um pacote desnecessário mas geralmente diferenciamos quais logs da nossa aplicação são erros ou avisos por meio de cores.

Logs são de extrema importância em uma aplicação madura pois temos controle sobre qualquer erro e é nosso papel como desenvolvedor back-end fazer com que eles exponham tudo o que está acontecendo no nosso servidor e sejam mais legível possível para que possamos debuggar possíveis erros.

Agora em nosso index.js utilize o `import` passando o nome do pacote, `node-color-log`, para que possamos colocar o conteúdo desse módulo dentro de uma variável.

```javascript
import logger from 'node-color-log'
```

Agora ao invés do `console.log` nativo podemos usar um log mais completo.

```javascript
// index.js

import logger from 'node-color-log'

logger.info("He4rtDevs!!");
```

Agora se rodarmos `npm run start` vemos um log muito mais completo que inclui horário, o tipo do log e a mensagem!

`2018-08-14T18:23:09.838Z [INFO] This is info mode`

Estamos usamos o log apenas um exemplo sobre como podemos importar pacotes npm!
Mas nos próximos capítulos vamos usa-lo de forma mais extensa principalmente para expor possíveis erros.

## 4.2 Importando módulos locais

Módulos locais são diferentes pastas ou arquivos criadas no nosso próprio projeto.
Para isso vamos criar um modulo local que é apenas um arquivo chamado `data.js` dentro da raiz do nosso projeto.

Nele vamos apenas adicionar um objeto javascript com dados de um usuário **inventado** para nosso sistema a titulo de exemplo.

```javascript
// data.js

const example = {
  name: "Maria das Graças",
  email: "mariagraca@gmail.com",
  senha: "1234",
}
const users = [example]

export default { users }
```

Para expor o meu objeto `users` para o resto do meu projeto node preciso usar o `export default` em frente ao users. Em que falamos que o objeto contendo os usuários serão o conteúdo exportado do arquivo.
Usamos o `export default` para expor qualquer tipo de função, objeto ou variável de um modulo.

Agora voltando ao meu arquivo `index.js` eu posso importar o arquivo que criamos simplesmente chamando esse novo import especificando o caminho dele dentro do projeto `./data`. O `.` denota a pasta raiz do projeto.

```javascript
// index.js

import logger from 'node-color-log'

import data from './data';

logger.info("He4rtDevs!!");
logger.info(data.users);
```

Então estamos baixando o conteúdo de outro arquivo em uma variável `data`, e usamos ela para pegar e logar o objeto `users`.

Agora se vermos o terminal conseguimos passar os dados de outro arquivo para nosso index.js com sucesso!

## 4.3 Diferentes de imports e exports

Dentro desse mesmo arquivo `data.js` exporte uma outra variável aleatória com qualquer conteúdo.

``` javascript
// data.js

const example = {
  name: "Maria das Graças",
  email: "mariagraca@gmail.com",
  senha: "1234",
}
const users = [example]

const x = 'batata'

export default x

export default { users }
```

Temos um erro! Mas porquê? O `export default` fala que esse conteúdo é o padrão ou 'default' a ser exportado por esse arquivo. E o node não sabe decidir qual é o padrão mesmo.

Para isso podemos apenas usar o `export` nessa variável.

```javascript
export x;

export default { users };
```

Se queremos importar o valor x, podemos usar esse sintaxe em que colocar entre chaves, isso faz com que a gente desconstrua o modulo `data` e pegue apenas o `x`

```javascript
import { x } from './data';
```

Poderíamos também usar essa sintaxe, que fala que estamos importando tudo que pode ser exportado de `exemplo` e chamando de data

```javascript
import * as data from './data';

data.x // "batata"
```

Não existe melhor forma, depende de cada projeto e da forma como vamos planejar nossos arquivos. Por isso vamos voltar nosso `index.js` como a forma anterior e remover a variável x de nosso `data.js`

```javascript
// index.js

import logger from 'node-color-log'

import data from './data';

logger.info("He4rtDevs!!");
logger.info(data.users);
```

```javascript
// data.js

const example = {
  name: "Maria das Graças",
  email: "mariagraca@gmail.com",
  senha: "1234",
}
const users = [example]

export default { users }
```

## 4.4 Instalando dependências globais

Instalar globalmente uma dependência significa instalar um modulo não no seu projeto, mas sim no seu computador!

Para instalar globalmente colocamos -g no comando de install do npm, como por exemplo `npm install -g yarn`

Assim o comando yarn está disponível nosso computador globalmente. Então por exemplo, se rodarmos `yarn help` já vemos que o yarn foi de fato instalado na nossa maquina!

`yarn` é uma opção para gerenciar projetos `npm` mas não vamos abordar nesse curso.
