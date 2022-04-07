/* eslint-disable max-len */
import pixelArt from '../imgs/pixelArt.png';
import recipesApp from '../imgs/recipes-app.png';
import oldPorti from '../imgs/old-porti.png';

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
    nome: 'Pixel Art',
    imagem: pixelArt,
    data: '21 de setembro de 2021',
    gitHub: 'https://github.com/ShinVK/pixel-art',
    linkSite: 'https://shinvk.github.io/pixel-art/',
    ferramentas: [htmlIcon, cssIcon, jsIcon, eslintIcon],
    descricao: 'Primeiro projeto em javascript, HTML e CSS. Foi aprimorado o trabalho com'
    + ' funções, querySelectors e lógica de programação',
    maisDescricao: 'PROJETO FRONT-END - Com o intuito de desenvolver uma tela onde as cores são geradas aleatoriamente, sendo assim possível pintar os "pixels" do quadro.',
    updates: ['2021/09/21 - version 1 - javascript, html e css'],
  },
  {
    nome: 'Portifólio Antigo',
    imagem: oldPorti,
    data: '10 de Outubro de 2021',
    gitHub: 'https://github.com/ShinVK/old-portifolio/',
    linkSite: 'https://shinvk.github.io/old-portifolio/',
    ferramentas: [cssIcon, htmlIcon, sassIcon],
    descricao: 'Primeiro portifólio feito, com auxílio do SASS e HTML. Foi utilizado inicialmente como portifólio para o gitHub e posteriormente dropado.',
    maisDescricao: 'Com este portifólio busquei aprimorar meus conhecimentos de SASS e HTML. Busquei utilizar os conceitos da cidade noturna do japão. A dificuldade de transformar em mobile  ',
    updates: ['2021/10/01  - Início do projeto',
      '2021/10/10 - version 1 - Portifólio com SASS',
      '2022/01/15 - DROPED',
    ],
  },
  {
    nome: 'Recipes App',
    imagem: recipesApp,
    data: '16 de Fevereiro de 2022',
    gitHub: 'https://github.com/ShinVK/recipes-app',
    linkSite: 'https://shinvk.github.io/recipes-app/',
    ferramentas: [jsIcon, reactIcon, materialUiIcon, eslintIcon],
    descricao: 'Esse projeto foi desenvolvido utilizando o react com contextAPI, foi feito em grupo com auxílio do Mychael Jales e Lucas Sodré.',
    maisDescricao: 'O objetivo desse projeto era construir uma aplicação para receitas. Foi bem trabalhoso e a implementação da estilização mobile exigiu o aprendizado e utilização do material UI',
    updates: ['2022/01/27  - Início do projeto',
      '2022/02/04 - version 1 - Entrega do Projeto React sem estilização',
      '2022/02/06 - Version 2 - Estilização do projeto feito em Material UI',
    ],
  },
  {
    nome: 'Portifólio Antigo',
    imagem: oldPorti,
    data: '10 de Outubro de 2021',
    gitHub: 'https://github.com/ShinVK/old-portifolio/',
    linkSite: 'https://shinvk.github.io/old-portifolio/',
    ferramentas: [cssIcon, htmlIcon, sassIcon],
    descricao: 'Primeiro portifólio feito, com auxílio do SASS e HTML. Foi utilizado inicialmente como portifólio para o gitHub e posteriormente dropado.',
    maisDescricao: 'Com este portifólio busquei aprimorar meus conhecimentos de SASS e HTML. Busquei utilizar os conceitos da cidade noturna do japão. A dificuldade de transformar em mobile  ',
    updates: ['2021/10/01  - Início do projeto',
      '2021/10/10 - version 1 - Portifólio com SASS',
      '2022/01/15 - DROPED',
    ],
  },
];

export default projectsArr;
