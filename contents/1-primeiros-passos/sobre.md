## 1. História do Javascript

Quando a internet começou navegadores eram apenas estáticos, ou seja, eram simples arquivos *HTML* e *CSS*. A revolução começou em 94, quando o navegador Netscape foi inventado, em que com a necessidade de fazer requisições notaram que navegadores talvez precisassem de uma linguagem.

Para isso chamaram Brendan Eich, que planejou o protótipo do Javascript em apenas 10 dias em 1995. A ideia era que a linguagem se chamasse "Mocha" mas por ter uma sintaxe parecida com Java, a linguagem mais popular da época, notaram que chamar de Javascript poderia chamar mais atenção.

A linguagem foi evoluindo com o passar dos anos, de sua primeira versão de "dez dias" chamada ECMAScript 1 até o que temos hoje.

JS era voltado para no máximo a interface do site e até 2009 essa linguagem não era usada para construir sites complexos ou back-end como podemos em linguagens como PHP, Ruby ou Java até sugir o Node.js.

## 1.1 Server-side JS

Node.js começou apenas como uma biblioteca que permitia rodar código Javascript do lado do servidor, ou seja, fora do navegador.
Para isso o Javascript passou a rodar dentro de uma maquina virtual criada pela Google chamada V8 engine que é escrita em C++ e compila funções JS em código de máquina. Que é o ambiente de runtime Javascript que o Google Chrome usa, conhecido por ser muito rápido. A Google investe muito nessa engine e sua performance é sempre aprimorada.

Com isso além da melhora em performance e eficiência das aplicações podemos fazer coisas que antes não podíamos com o browser como pode exemplo, ter acesso a arquivos de um computador, sockets TCP que permitem requisições entre outros.

O Node.js trabalha com um modelo Event-based que é basicamente detectar eventos e lidar com eles, nos capítulos posteriores vamos chegar em como podemos lidar com eventos e assincronismo com Promises.

A primeira apresentação sobre o que era Node.js foi na JSConf de 2009 pelo seu criador Ryan Dahl. Um momento incrível para a história do Javascript!

[<img src="https://img.youtube.com/vi/ztspvPYybIY/hqdefault.jpg" width="50%">](https://youtu.be/ztspvPYybIY)

Node.js é cross-platform, ou seja, um desenvolvedor Node pode criar aplicações desktop para Windows, Linux e Mac. Além disso não se limita a desktop, como também pode ser usado para mobile e desenvolvimento web. Se tornando então uma linguagem de uso geral, com aplicações também em cloud e soluções IoT.

Isso é importante porque somente com o conhecimento Javascript já podemos ter um leque de aplicações que podemos desenvolver.

Além disso Node.js permite o uso de módulos, ou seja, que eu possa baixar pedaços de código e biblioteca de outras pessoas no meu projeto, dessa forma não preciso escrever que preciso fazer do 0.

No geral usamos para fazer aplicações de linha de comando, aplicações web, aplicações de chat real-time e APIs REST. E o mais legal é que Node.js está em uma licença MIT, ou seja é um framework open-source.

Em nosso próximo capitulo vamos aprender a fazer uma API REST Node com todo o ferramental avançado e production ready!
