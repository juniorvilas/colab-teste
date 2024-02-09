<h1  id="top" align="center">Random User </h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/juniorvilas/colab-teste?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/juniorvilas/colab-teste?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/juniorvilas/colab-teste?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/juniorvilas/colab-teste?color=56BEB8">

  <img alt="Github issues" src="https://img.shields.io/github/issues/juniorvilas/colab-teste?color=56BEB8" />

  <img alt="Github forks" src="https://img.shields.io/github/forks/juniorvilas/colab-teste?color=56BEB8" />

  <img alt="Github stars" src="https://img.shields.io/github/stars/juniorvilas/colab-teste?color=56BEB8" />
</p>

<hr>

<p align="center">
  <a href="#-sobre">Sobre</a> &#xa0; | &#xa0;
  <a href="#skateboard-requisitos">Requisitos</a> &#xa0; | &#xa0;
  <a href="#clipboard-decisoes-de-arquitetura-e-paradigmas">Decisões de Arquitetura e Paradigmas</a> &#xa0; | &#xa0;
  <a href="#rocket-tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requisitos-para-rodar-a-aplicação">Requisitos</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-iniciando">Iniciando</a> &#xa0; | &#xa0;  
  <a href="https://github.com/juniorvilas" target="_blank">Autor</a>
</p>

<br>

## 😸 Sobre

O objetivo deste teste é avaliar suas habilidades de desenvolvimento
Fullstack, especialmente em TypeScript e React. Criando
uma aplicação web que consuma a <a href="https://github.com/juniorvilas" target="_blank">API Random User Generator</a>  para exibir
uma lista de usuários e os detalhes de cada usuário. Criar um
repositório no Git contendo o código-fonte da sua aplicação e um
README.md explicando suas escolhas de arquitetura, paradigmas e
quaisquer outras decisões importantes.

## :skateboard: Requisitos

:heavy_check_mark: A aplicação deve ser escrita em TypeScript.  
:heavy_check_mark: O frontend deve ser desenvolvido usando React.  
:heavy_check_mark: O back-end deve estar separado, porém no mesmo repo, pode ser
utilizado qualquer framework node.js  
:heavy_check_mark: O backend deve consumir a API Random User Generator para obter
os dados dos usuários e não o front diretamente.  
:heavy_check_mark: Deve haver uma página de listagem de usuários que exiba pelo
menos o nome de cada usuário.  
:heavy_check_mark: Ao clicar em um usuário da lista, deve ser exibida uma página de
detalhes que mostra informações mais detalhadas sobre o usuário
selecionado.  
:heavy_check_mark: A interface do usuário deve ser atraente e amigável, utilize qualquer
framework de UI ou DS que você conheça.  
:heavy_check_mark: Os commits no repositório Git devem ser organizados e
significativos.  
:heavy_check_mark: O README.md deve explicar as decisões de arquitetura, paradigmas
e outras escolhas importantes feitas durante o desenvolvimento da
aplicação.  

## :clipboard: Decisões de Arquitetura e Paradigmas

### Arquitetura

O projeto foi estruturado seguindo uma arquitetura de frontend e backend separados, com o frontend desenvolvido em React e o backend em NestJS. Essa separação permite uma maior organização do código, facilitando a manutenção e escalabilidade da aplicação. Além disso, optei por utilizar o Vite como nosso bundler no frontend, garantindo um ambiente de desenvolvimento rápido e eficiente.

### Paradigmas

#### Frontend

No frontend, adotei o paradigma de desenvolvimento orientado a componentes oferecido pelo React. Isso nos permitiu criar uma interface de usuário modular e reutilizável, facilitando a construção e manutenção das diferentes partes da aplicação.Também usei o Tailwind CSS para estilização, seguindo o paradigma utility-first, o que proporcionou uma abordagem mais ágil e consistente na criação dos estilos.

#### Backend

No backend, segui os princípios da arquitetura REST para projetar API, visando uma comunicação clara e padronizada entre o cliente e o servidor. Utilizei o NestJS como framework para o backend devido à sua estrutura modular e sua integração fácil com o TypeScript. Além disso, adotei o uso de bibliotecas como Axios para realizar requisições HTTP de forma eficiente.

## :bulb: Outras Escolhas Importantes

### UI Framework

Optei por utilizar o Material-UI (MUI) como framework de UI no frontend devido à sua vasta coleção de componentes prontos para uso e sua integração perfeita com o React. Isso permitiu construir uma interface de usuário consistente e visualmente atraente em um curto espaço de tempo.

### Gerenciamento de Estado

Para o gerenciamento de estado no frontend para salvar o detalhes do usuário, escolhi o Zustand devido à sua simplicidade e eficiência. Com o Zustand, pude centralizar o estado da aplicação de forma fácil e transparente, garantindo um fluxo de dados coeso e previsível em toda a aplicação.

### Roteamento

Para lidar com o roteamento no frontend, utilizei o React Router DOM, uma biblioteca popular que permitiu definir rotas de forma declarativa e fácil de entender. Com o React Router DOM, pude criar uma navegação fluida entre as diferentes páginas da aplicação.

## :rocket: Tecnologias

Abaixo poderá ter acesso às principais tecnologias usadas neste projeto

- [vite](https://vitejs.dev/)
- [typescript](https://www.typescriptlang.org/)
- [tailwindcss](https://tailwindcss.com/)
- [mui](https://mui.com/)
- [axios](https://axios-http.com/ptbr/docs/intro)
- [react-hot-toast](https://react-hot-toast.com/)
- [react-icons](https://react-hot-toast.com/)
- [react-query](https://tanstack.com/query/v3/)
- [react-router-dom](https://github.com/remix-run/react-router#readme%5C)
- [zustand](https://zustand-demo.pmnd.rs/)
- [faker-js](https://fakerjs.dev/)
- [nestjs](https://docs.nestjs.com/)

## :white_check_mark: Requisitos para rodar a aplicação

Antes de iniciar :checkered_flag:, você precisa ter [Git](https://git-scm.com) e [Node](https://nodejs.org/en/) instalado em seu sistema operacional

## :checkered_flag: Iniciando Frontend

```bash
# Clone este projeto
$ git clone git@github.com:juniorvilas/colab-teste.git

# Acesse
$ cd/colab-teste/front

# Instale as dependências
$ npm i

# Execute o projeto
$ npm run dev
```

## :checkered_flag: Iniciando Backend 

```bash

# Acesse
$ cd/colab-teste/backend

# Instale as dependências
$ npm i

# Execute o projeto
$ npm run start
```


Feito com :heart: por <a href="https://github.com/juniorvilas" target="_blank">Carlindo Junior</a>

&#xa0;

<a href="#top">Voltar ao topo</a>
