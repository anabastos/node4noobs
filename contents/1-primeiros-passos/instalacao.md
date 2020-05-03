## 1. Instalação

Para o setup inicial somente é necessário ter instalado os binários do Node.Js e um editor de texto.

### 1.2 Editor de texto

Os editores mais simples e mais leves geralmente usados no desenvolvimento Javascript são o Atom ou VisualStudio. Esse tutorial utilizaremos o VSCode, mas qualquer outro editor pode ter as mesmas funcionalidades.

<p align="center">
  <a><img src="../../assets/1-primeiros-passos/vscode-extensions.png" alt="Logo"></a>
</p>

Para isso na parte de `extensions marketplace` vamos instalar as seguintes extensões:
- Eslint
- Document This
- Babel JavaScript
- Path Intellisense

O `Path Intellisense` nos ajuda com autocomplete de modulos. Faremos uso e explicaremos mais sobre as outras extensões no decorrer do curso.

### 1.3 Baixar o NVM
Baixe a ultima versão do Node.js pelo próprio site, mas vamos usar uma ferramenta mais avançada para lidar com o versionamento do Node chamado NVM(_Node Version Manager_) independente de sistema operacional. Ele permite que você instale a atualize sua versão por meio de simples comandos no terminal.

Para baixar basta rodar o seguinte comando via cURL ou wget:
`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash`
`wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash`

E depois rodar este comando para exportar o conteúdo que foi instalado globalmente.
`export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")" [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm`

#### 1.3.1 Instalar a ultima versão do Node.js

Para baixar, compilar e instalar a ultima versão do node, rode este comando:
`nvm install node # "node" é um alias para a ultima versão`

Para usar a ultima versão instalada rode:
`nvm use node`

O NVM é uma ferramenta muito utilizada pois você pode instalar ou usar versões diferentes de node rodando comandos como o `nvm install <alguma-versão-especifica>` e `nvm use node <alguma-versão-especifica>`.