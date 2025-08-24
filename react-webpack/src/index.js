import './style.css';
import Logo from '../assets/logo.svg'
import printMe from './print.js';
import { cube } from './math.js';

async function component() {
  const element = document.createElement('div');
  const { default: _ } = await import('lodash');
  const btn = document.createElement('button');
 const preElement = document.createElement('pre');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = await printMe();
  preElement.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');
  element.appendChild(btn);
  element.appendChild(preElement);

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'component'], ' ');
  element.classList.add('hello');

  const myIcon = new Image();
  myIcon.src = Logo;
  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(await component());