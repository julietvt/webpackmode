//import styles from './assets/sass/style.scss';
import './assets/sass/style.scss';

const hello = document.createElement('h1');

hello.innerText = "Hello, Webpack!";
hello.classList.add('textHello');

document.body.appendChild(hello);