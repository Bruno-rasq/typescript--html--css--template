# HTML __ CSS__&__ TYPESCRIPT 

**TODO**: introdução.

**TODO**: por que Typescript?




## Pré-requisitos.

Necessário ter a versão  LTS do Node.js instalado na sua máquina. O Node.js é uma plataforma que permite a execução de código JavaScript no lado do servidor, essencial para o desenvolvimento e execução do nosso aplicativo.

Link para o site oficial do node: https://nodejs.org/en

Após instalado, rode no terminal os comandos:

```shell
node -v
```
&

```shell
npm -v
```
Se a resposta for as versões das respectivas ferramentas então é sinal de que deu tudo certo! 


## Iniciando o template 

**TODO**: criação do projeto

Inicie um novo projeto rodando o comando 

```shell
npm init -y
```

Este comando é utilizado para inicializar um novo projeto Node.js com o arquivo package.json interativo. O arquivo package.json possue todas as informações necessário para seu projeto, como nome, scripts usados, dependências de desenvolvimento e dependências de projeto.

```json
{
  "name": "meu-projeto",
  "version": "1.0.0",
  "description": "Este é um exemplo de projeto Node.js",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Seu Nome",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "mocha": "^8.2.1"
  }
}
```
## Instalando o typescript 

**TODO**: adicionar explicação...

```shell
npm install typescript --save-dev 
```
Instalando o typescript como ferramenta de desenvolvimento. 

Após isso rode o comando:

```shell
npx tsc --init
```
Este comando gera o arquivo de configurações do typescript "tsconfig.json". Este arquivo possue uma série de configurações necessárias para o typescript como para qual versão do javascript compilar, configurações experimentais e etc...

Por hora só será necessário mudar duas configurações, outdir e module.

**module**: especifica qual o modelo de código que será gerado.

**outdir**: específica em qual pasta estes códigos gerados ficarão.

```txt
outdir: "./" Mude para outdir: "./dist"
module: "commonjs" Mude para module: "es6"
```


## Criando o index.html e linkando o index.ts

**TODO**: desenvolver o problema de usar typescript...
## Introduzindo o Webpack

**TODO**: introdução ao webpack

```shell
npm install webpack-cli
```
```shell
npm install ts-loader --save-dev 
``` 

No site do webpack, já está disponível as configurações necessárias para poder usar o typescript:

**webpack.config.js**
```javascript
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

Comando para rodar o Webpack:
```shell
npx webpack
```

**Observação**: é necessário mudar o path da sua tag de script no arquivo html para o path do arquivo bundle js gerado pelo webpack.
## Até aqui.

**TODO**: caso não utilize alguma extensão que sirva arquivos html.

Estrutura do template:
```txt
root/
├── node_modules/
├── dist/ 
└── src/ 
|    ├── classes/ 
|    └── index.ts
├── index.html
├── webpack.config.json
├── tsconfig json
├── package.json
├── package-lock.json
```
## Introduzindo express e concurrently

**TODO**: hablar mais...

```shell
npm install express @types/express @types/node
```

```shell
npm install tsx --save-dev 
```

```shell 
npm install concurrently --save-dev 
```

## Adicionando os scripts ao package.json

**TODO**: HABLAAR HAHAHA!

```json
  "scripts": {
    "start:server": "tsx server.ts",
    "start:webpack": "webpack --mode development -w",
    "start:all": "concurrently \"npm run start:server\" \"npm run start:webpack\""
  },
```