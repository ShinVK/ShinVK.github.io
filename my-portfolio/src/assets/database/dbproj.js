/* eslint-disable max-len */
import pixelArt from '../imgs/pixelArt.png';
import recipesApp from '../imgs/recipes-app.png';
import oldPorti from '../imgs/old-porti.png';
import colorGuess from '../imgs/color-guess.png';
import todolist from '../imgs/todolist.png';
import trybeTunes from '../imgs/trybetunes.png';

const eslintIcon = 'devicon-eslint-original colored';
const htmlIcon = 'devicon-html5-plain-wordmark colored';
const cssIcon = 'devicon-css3-plain-wordmark colored';
const jsIcon = 'devicon-javascript-plain colored';
const materialUiIcon = 'devicon-materialui-plain colored';
// const mochaIcon = 'devicon-mocha-plain colored';
// const jestIcon = 'devicon-jest-plain colored';
// const mongoIcon = 'devicon-mongodb-plain colored';
const sassIcon = 'devicon-sass-original colored';
// const sequelizeIcon = 'devicon-sequelize-plain colored';
const reactIcon = 'devicon-react-original colored';
// const reduxIcon = 'devicon-redux-original colored';
// const vsIcon = 'devicon-vscode-plain colored';

const projectsArr = [
  {
    modulo: 'front',
    nome: 'Pixel Art',
    imagem: pixelArt,
    data: '10 de setembro de 2021',
    gitHub: 'https://github.com/ShinVK/pixel-art',
    linkSite: 'https://shinvk.github.io/pixel-art/',
    ferramentas: [htmlIcon, cssIcon, jsIcon, eslintIcon],
    descricao: 'Primeiro projeto em javascript, HTML e CSS. Foi aprimorado o trabalho com'
    + ' funções, querySelectors e lógica de programação',
    maisDescricao: 'PROJETO FRONT-END - Com o intuito de desenvolver uma tela onde as cores são geradas aleatoriamente, sendo assim possível pintar os "pixels" do quadro.',
    updates: ['10.09.21 - version 1 - javascript, html e css'],
    disponivel: ['web', 'mobile'],
  },
  {
    modulo: 'front',
    nome: 'Todo-list',
    imagem: todolist,
    data: '14 de setembro de 2021',
    gitHub: 'https://github.com/ShinVK/todo-list',
    linkSite: 'https://shinvk.github.io/todo-list/',
    ferramentas: [htmlIcon, cssIcon, jsIcon, eslintIcon],
    descricao: 'O projeto consiste em uma lista de tarefas, sendo possível adicionar, deletar, completar, salvar e limpar as tarefas completas.',
    maisDescricao: 'Com esse projeto foi possível aprimorar o uso de funções javascript e HTML. Também foi possível conhecer a ferramenta nova o localStorage, permitindo assim, salvar as tarefas sem perdê-las ao recarregar a página.',
    updates: ['13.09.21 - Inicio do Projeto',
      '14.09.21 - Projeto Funcional',
      '14.09.21 - Estilizações em CSS',
    ],
    disponivel: ['web'],

  },
  {
    modulo: 'front',
    nome: 'Color guess',
    imagem: colorGuess,
    data: '18 de Setembro de 2021',
    gitHub: 'https://github.com/ShinVK/color-guess/',
    linkSite: 'https://shinvk.github.io/color-guess/',
    ferramentas: [cssIcon, htmlIcon, jsIcon],
    descricao: 'O objetivo do jogo é adivinhar a cor de acordo com o rgb disponibilizado. Se você acertar ganha 3 pontos e se errar perde 1 ponto',
    maisDescricao: 'Foi um projeto bônus da trybe, realizado com javaScript, CSS e HTML. O objetivo do projeto era aprimorar o uso de algumas funções JS, como o Math.Random, querySelector, laço for e condicionais if e else',
    updates: ['15.09.21  - Início do projeto',
      '18.09.21 - version 1 - Projeto funcional',
      '18.09.21 - Estilização',
    ],
    disponivel: ['web'],
  },
  {
    modulo: 'front',
    nome: 'Portifólio Antigo',
    imagem: oldPorti,
    data: '10 de Outubro de 2021',
    gitHub: 'https://github.com/ShinVK/old-portifolio/',
    linkSite: 'https://shinvk.github.io/old-portifolio/',
    ferramentas: [cssIcon, htmlIcon, sassIcon],
    descricao: 'Primeiro portifólio feito, com auxílio do SASS e HTML. Foi utilizado inicialmente como portifólio para o gitHub e posteriormente dropado.',
    maisDescricao: 'Com este portifólio busquei aprimorar meus conhecimentos de SASS e HTML. Busquei utilizar os conceitos da cidade noturna do japão. A dificuldade de transformar em mobile  ',
    updates: ['01.10.21  - Início do projeto',
      '10.10.21 - version 1 - Portifólio com SASS',
      '15.01.21 - DROPED',
    ],
    disponivel: ['web'],
  },
  {
    modulo: 'front',
    nome: 'TRYBETUNES',
    imagem: trybeTunes,
    data: '17 de Novembro de 2021',
    gitHub: 'https://github.com/ShinVK/trybetunes/',
    linkSite: 'https://shinvk.github.io/trybetunes/',
    ferramentas: [cssIcon, htmlIcon, reactIcon, materialUiIcon],
    descricao: 'Projeto TrybeTunes - Simular um app de músicas, inicialmente utilizando React JS, depois estilizado com Material UI',
    maisDescricao: 'Ao fazer a estilização alguns meses depois, encontrei algumas dificuldades para entender a implementação, sentindo a necessidade de refatorar futuramente. Para a próxima feature, seria organizar melhor a ideia do projeto, assim como a organização do seu sistema',
    updates: ['11.11.21  - Início do projeto',
      '17.11.21 - version 1 - Funcionalidades',
      '11.04.22 - Estilização MUI',
    ],
    disponivel: ['web', 'mobile'],
  },
  {
    modulo: 'front',
    nome: 'Recipes App',
    imagem: recipesApp,
    data: '16 de Fevereiro de 2022',
    gitHub: 'https://github.com/ShinVK/recipes-app',
    linkSite: 'https://shinvk.github.io/recipes-app/',
    ferramentas: [jsIcon, reactIcon, materialUiIcon, eslintIcon],
    descricao: 'Esse projeto foi desenvolvido utilizando o react com contextAPI, foi feito em grupo com Mychael Jales e Lucas Sodré. Para logar veja abaixo:',
    maisDescricao: 'O app ainda não possui cadastro e validação. Para logar, o login deve ser um email no formato email@email.com e a senha, uma senha qualquer de 7 digitos.O objetivo desse projeto era construir uma aplicação para receitas. Foi bem trabalhoso e a implementação da estilização mobile exigiu o aprendizado e utilização do material UI',
    updates: ['27.01.21  - Início do projeto',
      '04.02.21 - version 1 - Entrega do Projeto React sem estilização',
      '06.02.21 - Version 2 - Estilização do projeto feito em Material UI',
    ],
    disponivel: ['web', 'mobile'],

  },
];

export default projectsArr;
