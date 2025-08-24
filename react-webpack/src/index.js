import './style.css';
import Logo from '../assets/logo.svg'
import printMe from './print.js';

async function component() {
  const element = document.createElement('div');
  const { default: _ } = await import('lodash');
  const btn = document.createElement('button');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = await printMe();

  element.appendChild(btn);

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'component'], ' ');
  element.classList.add('hello');

  const myIcon = new Image();
  myIcon.src = Logo;
  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(await component());