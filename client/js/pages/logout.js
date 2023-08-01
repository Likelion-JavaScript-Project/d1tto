import { getNode } from '../../lib/dom/getNode.js';
import { deleteStorage } from '../../lib/utils/storage.js';

const logoutButton = getNode('.userLogout');

async function handleLogout(e) {
  e.preventDefault();
  deleteStorage('token');
  window.location.href = '../pages/login.html';
}

logoutButton.addEventListener('click', handleLogout);
