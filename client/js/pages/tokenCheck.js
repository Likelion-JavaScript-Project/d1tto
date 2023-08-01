import { loadStorage } from '../../lib/utils/storage.js';

async function checkToken(e) {
  e.preventDefault();

  const token = await loadStorage('token');
  console.log(token);
  if (token === null) {
    window.location.href = '../pages/login.html';
  }
}

window.addEventListener('DOMContentLoaded', checkToken);
