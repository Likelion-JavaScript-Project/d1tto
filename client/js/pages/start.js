import { getNode } from '../../lib/dom/getNode.js';

const startButton = getNode('.startButton');

function loginLink(e) {
  e.preventDefault();

  window.location.href = '../pages/login.html';
}

startButton.addEventListener('click', loginLink);
