# 5. Configurações iniciais

Essa é a parte mais "chatinha" mas é o que vai garantir um resultado mais _production ready_ para nosso projeto!
A maior parte dos projetos do mercado fazem uso extensivo dessas ferramentas para garantir uma boa qualidade de código. Vamos então fazer um setup de configuração básica.

## 5.1 Eslint
TODO O QUE E ESLINT

Agora vamos adicionar o eslint como dependência e rodar o seu _init_.

``` bash
npm install eslint --save-dev
npx eslint –-init
```

Agora o eslint vai te fazer perguntas sobre a instalação. O ideal é responder as seguintes respostas:

? How would you like to use ESLint? **To check syntax, find problems, and enforce code style**  
? What type of modules does your project use? **JavaScript modules (import/export)**  
? Which framework does your project use? **None of these**  
? Does your project use TypeScript? **No**  
? Where does your code run? **Node**  
? How would you like to define a style for your project? **Use a popular style guide**  
? Which style guide do you want to follow? **Airbnb: https://github.com/airbnb/javascript**  
? What format do you want your config file to be in? **JavaScript**  
? Would you like to install them now with npm? **yes**  
After that eslint setup will be done.

Você pode ler um pouco mais sobre o styleguide que escolhemos aqui: [Airbnb Styleguide](https://github.com/airbnb/javascript)

Note que agora temos um arquivo de configuração chamado `.eslintrc.js` na raiz do nosso projeto. Ela que define as regras de linting do nosso projeto.

## 5.2 Babel
Babel é um compilador em que escrevemos o javascript mais moderno e temos como output um javascript que roda em qualquer plataforma.

Vamos instalar suas dependências com o seguinte comando.

```bash
npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/node
```

Com ele temos as principais habilidades do babel com o node. Mas antes precisamos criar mais um arquivo de configuração chamado `.babelrc` na raiz do nosso projeto que fala como devemos transpilar nosso projeto.

```javascript
{
  "presets": [
    "@babel/preset-env"
  ]
}
```

Voltando ao nosso `package.json` vamos modificar nosso script de `start` para iniciar fazendo uso do babel.

```json
  "scripts": {
    "start": "nodemon --exec babel-node index.js ",
  },
```
