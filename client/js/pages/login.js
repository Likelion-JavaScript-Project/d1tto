import { disableElement, enableElement } from '../../lib/dom/controlElement.js';
import { addClass, removeClass } from '../../lib/dom/css.js';
import { getNode } from '../../lib/dom/getNode.js';
import { saveStorage } from '../../lib/utils/storage.js';
import { tiger } from '../../lib/utils/tiger.js';

const id = getNode('.inputId');
const pw = getNode('.inputPw');
const loginButton = getNode('.loginButton');
const joinButton = getNode('.joinButton');
let loginCheckResult = '';
let token;

function inputCheck() {
  let idValue = id.value;
  let pwValue = pw.value;

  if (
    idValue.replace(/\s*/g, '') !== '' &&
    pwValue.replace(/\s*/g, '') !== ''
  ) {
    removeClass(loginButton, '-bg--lion-primary');
    removeClass(loginButton, '-text--lion-white');
    addClass(loginButton, '-bg--lion-white');
    addClass(loginButton, '-text--lion-black');
    enableElement(loginButton);
  } else {
    removeClass(loginButton, '-bg--lion-white');
    removeClass(loginButton, '-text--lion-black');
    addClass(loginButton, '-bg--lion-primary');
    addClass(loginButton, '-text--lion-white');
    disableElement(loginButton);
  }
}

async function idPwCheck() {
  let count = 0;
  try {
    const response = await tiger.get('http://localhost:3000/users');
    const userList = response.data;
    userList.forEach((item) => {
      if (id.value === item.name && pw.value === item.pw) {
        console.log('일치');
        count++;
      } else {
        console.log('불일치');
      }

      if (count !== 0) {
        loginCheckResult = 'true';
      } else {
        loginCheckResult = 'false';
      }
    });
  } catch {
    console.log('idPwCheck 함수에서 발생한 오류입니다.');
  }
}

async function tokenPass() {
  const response = await tiger.get('http://localhost:3000/users');
  const userList = response.data;
  userList.forEach((item) => {
    if (id.value === item.name) {
      token = item.token;
      saveStorage('token', token);
    }
  });
}

function handleJoin(e) {
  e.preventDefault();
  window.location.href = '../pages/join.html';
}

function handleLogin(e) {
  e.preventDefault();
  idPwCheck().then(() => {
    if (loginCheckResult === 'true') {
      alert('성공');
      tokenPass();
    } else {
      alert('아이디 또는 비밀번호가 일치하지 않습니다.');
    }
  });
}

id.addEventListener('input', inputCheck);
pw.addEventListener('input', inputCheck);
loginButton.addEventListener('click', handleLogin);
joinButton.addEventListener('click', handleJoin);
