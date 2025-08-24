import './style.css';
import Logo from '../assets/logo.svg'
import printMe from './print.js';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = "hello world";
  element.classList.add('hello');

  const myIcon = new Image();
  myIcon.src = Logo;
  element.appendChild(myIcon);
  return element;
}

document.body.appendChild(component());