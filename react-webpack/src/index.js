import './style.css';
import Logo from '../image/logo.svg'
function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = "hello world";
  element.classList.add('hello');

  const myIcon = new Image();
  myIcon.src = Logo;
  element.appendChild(myIcon);
  return element;
}

document.body.appendChild(component());