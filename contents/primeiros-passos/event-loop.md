## Event Loop

O event loop é o coração do node.js.
Falamos que o node é single thread (que é o event loop).
Quando chega uma requisição para o servidor é disparado um evento (o nodejs é baseado em eventos), quando essa requisição chega ela entra em uma fila de processo, se ela for a primeira da fila ela vai direto para o event loop e ele faz uma pergunta (NÃO TÃO SIMPLES ASSIM, MAS PARA ENTENDIMENTO BASTA)

*Isso é rápido para eu processar?*

Caso ele fale que sim, ele processa os dados e retorna pro usuário o que foi pedido na requisição.

Caso ele fale que não, ai ele passa para uma pool de threads em background.
**Ai cai a casa de quem fala que node é single thread**

**Thread Pool**
- Filesystem
- process
- network 
- other

![gv-eventloop](https://i.imgur.com/JGHGkdy.png)

## Características

- O motor do javascript V8 é single thread
- libuv (C++) Multi thread, essa é a pool thread que fica em background no node
- 1 ping executa 88 Milhões instruções na CPU
- O que fazer na espera disso? Ele delega isso para outra "coisa" e vai continuar executando outras coisas que ele consegue executar mais rapidamente.

## Curiosidade

Sempre que vemos assuntos iniciais de node.js em tutoriais ou em artigos explicando código assíncrono vemos a utilização de leitura e gravação em disco com a lib FS (nativa do node), na computação gravar e ler coisas do disco juntamente a trocar pacotes na rede é uma das coisas mais "lerdas" que um computador pode fazer, portanto sempre que você fizer alguma codificação nesse contexto irá saber que a thread principal está delegando para outra a responsabilidade de resolver isso.

### See ya. =) 
