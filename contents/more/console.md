
## Console

Com o node.js temos o modulo `console` também, ele é um pouco diferente do que temos no navegador.

Você certamente já usou o `console.log` para debuggar um código em javascript printando o conteúdo em string passado na função.
Mesmo se você passar um objeto ou array ele vai converter para string de alguma forma!
Além disso você pode passar mais de uma váriavel no `console.log` que ele vai printar ambos

```javascript
console.log(10, 'oie')
// 10 oie
```

O console.log é otimo para printar coisas no console, ele é o que chamamos na computação de *stdout*.

Caso tenha acontecido algum erro no caso mandamos a mensagem em outro lugar chamado *stderr*. Podemos fazer isso usando o `console.error()` no lugar.

## Contar tempo

Usando os metodos `time()` e `timeEnd()` podemos criar timers para saber o tempo exato que demorou para algo executar.

```javascript
const doSomething = () => console.log('test')
const measureDoingSomething = () => {
  console.time('doSomething()')
  //do something, and measure the time it takes
  doSomething()
  console.timeEnd('doSomething()')
}
measureDoingSomething()
```
[Exemplo da documentação nodejs](https://nodejs.dev/learn/output-to-the-command-line-using-nodejs)

## Outras coisas

`console.count()`: Supondo que eu quero contar quantas vezes uma função é chamava ou uma váriavel é checada esse metodo pode ser util.

`console.trace()`: Onde eu chamar esse comando eu consigo ver todo o *stack trace*. Ou seja, todo o caminho de arquivos node que foram chamados até chegar a esse comando. Ele especifica até em que linha foi.
