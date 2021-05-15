# 1. História do Javascript

Quando a internet começou navegadores eram apenas estáticos, ou seja, eram simples arquivos *HTML* e *CSS* estaticos.
Atualmente na internet tudo é interligado e um simples site pode estar consumindo dados de vários lugares ao mesmo tempo.

A revolução começou em 94, quando o navegador Netscape foi inventado, em que com a necessidade de fazer requisições notaram que navegadores talvez precisassem de uma linguagem.

Para isso chamaram Brendan Eich, que planejou o protótipo do Javascript em apenas 10 dias em 1995. A ideia era que a linguagem se chamasse "Mocha" mas por ter uma sintaxe parecida com Java, a linguagem mais popular da época, notaram que chamar de Javascript poderia chamar mais atenção.

A linguagem foi evoluindo com o passar dos anos, de sua primeira versão de "dez dias" chamada ECMAScript 1 até o que temos hoje.

JS era voltado para no máximo a interface do site e até 2009 essa linguagem não era usada para construir sites complexos ou back-end como podemos em linguagens como PHP, Ruby ou Java até sugir o Node.js.

## 1.1 Node

Node.js começou apenas como uma biblioteca que permitia rodar código Javascript do lado do servidor, ou seja, fora do navegador.
Para isso o Javascript passou a rodar dentro de uma maquina virtual criada pela Google chamada V8 engine que é escrita em C++ e compila funções JS em código de máquina. Que é o ambiente de runtime Javascript que o Google Chrome usa, conhecido por ser muito rápido. A Google investe muito nessa engine e sua performance é sempre aprimorada.

Com isso além da melhora em performance e eficiência das aplicações podemos fazer coisas que antes não podíamos com o browser como pode exemplo, ter acesso a arquivos de um computador, sockets TCP que permitem requisições entre outros.

O Node.js trabalha com um modelo Event-based que é basicamente detectar eventos e lidar com eles, nos capítulos posteriores vamos chegar em como podemos lidar com eventos e assincronismo com Promises.

A primeira apresentação sobre o que era Node.js foi na JSConf de 2009 pelo seu criador Ryan Dahl. Um momento incrível para a história do Javascript!

Nessa epoca JS estava começando a se tornar uma linguagem séria e com a aderencia do Node.JS no mercado as engines  começaram a se aprimorar e ficar cada vez rápidas. Isso graças aos times dos principais navegadores que queriam que o JS funcionasse da melhor forma possível.

[<img src="https://img.youtube.com/vi/ztspvPYybIY/hqdefault.jpg" width="50%">](https://youtu.be/ztspvPYybIY)

Node.js é cross-platform, ou seja, um desenvolvedor Node pode criar aplicações desktop para Windows, Linux e Mac. Além disso não se limita a desktop, como também pode ser usado para mobile e desenvolvimento web. Se tornando então uma linguagem de uso geral, com aplicações também em cloud e soluções IoT.

Isso é importante porque somente com o conhecimento Javascript já podemos ter um leque de aplicações que podemos desenvolver.

Além disso Node.js permite o uso de módulos, ou seja, que eu possa baixar pedaços de código e biblioteca de outras pessoas no meu projeto, dessa forma não preciso escrever que preciso fazer do 0.

No geral usamos para fazer aplicações de linha de comando, aplicações web, aplicações de chat real-time e APIs REST. E o mais legal é que Node.js está em uma licença MIT, ou seja é um framework open-source.

## 1.1.1 Requisitos

Para conseguir usar o Node.JS tranquilamento é necessário ter alguns fundamento de Javascript.
Dentre eles é interessante saber sobre o funcionamento de seus tipos, váriaveis, funções(incluindo arrow functions), escopos, loops, arrays, javascript moderno(ES6 pra cima).

Eles são conceitos chaves também para entendermos coisas especificas de Node.js como assincronismo.

## 1.2 Diferenças

Algumas pessoas que vem do Javascript do Front-end sofre uma grande confusão entre o que é o Javascript de uma aplicação Node.JS e o do Navegador.

Se em algum momento você teve de interagir com DOM ou outras web APIs, isso NÃO EXISTE no Node.js.
O `document` ou `window` são objetos providenciados pelo navegador, não existindo no contexto de servidor.
No contexto de servidor que temos [modulos](modulos.md/) ou acesso ao *File System*.

Outra diferença é que o Node.JS usa o modulo chamado CommonJS, 
for the time being you use require() in Node.js and import in the browser.

## 1.3 Adendos

Em 2009 o Node.JS foi criado, o framework que vamos usar foi criado no ano seguinte e ainda segue firme no mercado!
Logo em seguida empresas começaram a aderir ao Node.

Em 2014 o JS já havia atualizações bem fortes da linguagem, esse novo standard se chamou ES6(EcmaScript 6), com isso houve um fork(uma cópia do projeto do Node) chamada *IO.JS* que tinha o intuito de introduzir essas coisas novas do JS mais rápido.
Mas os mantenedores logo notaram que seria necessário então pensar nas atualizações do Node.js de forma mais organizada, pra isso criaram a Node.JS foundation. Eventualmente tudo de novo do IO.JS foi mergeando de vola ao Node.js!

Mas logo em seguida houve um incidente que ninguem esperava sobre a forma como pensavam na NPM([O gerenciador de pacotes do Node](npm.md/)) chamado *leftpad incident*. Recomendo dar uma lida sobre [aqui](https://blog.npmjs.org/post/141577284765/kik-left-pad-and-npm)