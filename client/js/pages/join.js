import { disableElement, enableElement } from '../../lib/dom/controlElement.js';
import { addClass, removeClass } from '../../lib/dom/css.js';
import { getNode } from '../../lib/dom/getNode.js';
import { insertAfter } from '../../lib/dom/insert.js';
import { tiger } from '../../lib/utils/tiger.js';
import { clearContents } from '../../lib/dom/clearContents.js';

//---------------------------------------------------------------
//-입력 조건 확인---------------------------------------------------
//---------------------------------------------------------------

const id = getNode('.inputId');
const email = getNode('.inputEmail');
const pw = getNode('.inputPw');
const pwCheck = getNode('.inputPwCheck');
const submitButton = getNode('.submitButton');
const form = getNode('.joinForm');

function idReg() {
  const re = new RegExp('^[a-zA-Z][a-zA-Z0-9]{2,15}');
  if (re.test(id.value)) {
    // console.log('id');
    return true;
  }
}

function emailReg() {
  const re = new RegExp(
    '^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$'
  );
  if (re.test(email.value)) {
    // console.log('email');
    return true;
  }
}

function passwordReg() {
  const re = new RegExp('[0-9a-zA-Z](?=.*[$`~!@$!%*#^?&\\(\\)-_=+]).{7,12}');
  if (re.test(pw.value)) {
    // console.log('pw');
    return true;
  }
}

function passwordCheck() {
  if (pw.value === pwCheck.value) {
    // console.log('pwCheck');
    return true;
  }
}

function renderInformIdCheck() {
  const inform = getNode('.idCheckInform');
  if (inform === null) {
    insertAfter(
      id,
      `<span class="idCheckInform block -text--lion-paragraph-small text-[#FD8D14]"> 이미 사용중인 아이디입니다.</span>`
    );
    removeClass(id, 'mb-[11px]');
  }
}

function removeRenderInformIdCheck() {
  try {
    const form = getNode('.joinForm');
    const inform = getNode('.idCheckInform');
    form.removeChild(inform);
    addClass(id, 'mb-[11px]');
  } catch {
    // console.log('removeRnederInformIdCheck 함수 오류.아직 지울 노드 없음.');
  }
}

function submitActive() {
  if (idReg() && emailReg() && passwordReg() && passwordCheck()) {
    removeClass(submitButton, '-bg--lion-primary');
    removeClass(submitButton, '-text--lion-white');
    addClass(submitButton, '-bg--lion-white');
    addClass(submitButton, '-text--lion-black');
    enableElement(submitButton);
  } else {
    removeClass(submitButton, '-bg--lion-white');
    removeClass(submitButton, '-text--lion-black');
    addClass(submitButton, '-bg--lion-primary');
    addClass(submitButton, '-text--lion-white');
    disableElement(submitButton);
  }
}

//---------------------------------------------------------------
//-json data-----------------------------------------------------
//---------------------------------------------------------------

let joinToken;
let idCheckResult;

function setToken() {
  joinToken = Math.random().toString(16).substring(2, 15);
}

async function saveUserInfo(e) {
  e.preventDefault();
  setToken();
  const response = await tiger.get('http://localhost:3000/users');
  const userList = response.data;
  let count = 1;
  userList.forEach(() => {
    count++;
  });

  checkJoinId().then(() => {
    if (idCheckResult) {
      tiger.post('http://localhost:3000/users', {
        id: count + '',
        token: joinToken,
        name: id.value,
        email: email.value,
        pw: pw.value,
      });
      alert('회원가입이 완료되었습니다!');
      clearJoinContents('success');
    } else {
      clearJoinContents('fail');
    }
  });
}

function clearJoinContents(state) {
  const inputId = getNode('.inputId');
  const inputEmail = getNode('.inputEmail');
  const inputPw = getNode('.inputPw');
  const inputPwCheck = getNode('.inputPwCheck');
  if (state === 'fail') {
    inputEmail.value = '';
    inputPw.value = '';
    inputPwCheck.value = '';
  } else {
    inputId.value = '';
    inputEmail.value = '';
    inputPw.value = '';
    inputPwCheck.value = '';
  }
}

async function checkJoinId() {
  const response = await tiger.get('http://localhost:3000/users');
  const userList = response.data;
  let count = 0;
  userList.forEach((item) => {
    if (item.name === id.value) {
      count++;
    }
  });
  if (count != 0) {
    idCheckResult = false;
    renderInformIdCheck();
    console.log('중복입니다.');
  } else {
    idCheckResult = true;
  }
}

id.addEventListener('input', submitActive);
id.addEventListener('input', removeRenderInformIdCheck);
email.addEventListener('input', submitActive);
pw.addEventListener('input', submitActive);
pwCheck.addEventListener('input', submitActive);
form.addEventListener('submit', saveUserInfo);

//---------------------------------------------------------------
//-local data 로 처리하는 법----------------------------------------
//---------------------------------------------------------------
// let joinUserList = [];
// let joinUniqueIdCheck = true;
// let joinIdCheckList = [];
// let joinIdCheckResult;

// function checkUniqueId(idList) {
//   idList.forEach((item) => {
//     if (item === false) {
//       // console.log(item);
//       joinIdCheckResult = false;
//     }
//   });
// }

// async function localSaveUserInfo(e) {
//   e.preventDefault();
//   joinIdCheckList = [];
//   joinIdCheckResult = true;

//   setToken();
//   let existingUserList = await loadStorage('userInformation');

//   try {
//     existingUserList.forEach((item) => {
//       if (id.value === item.id) {
//         renderInformIdCheck();
//         joinUniqueIdCheck = false;
//         joinIdCheckList.push(joinUniqueIdCheck);
//       } else {
//         joinUniqueIdCheck = true;
//         joinIdCheckList.push(joinUniqueIdCheck);
//       }
//     });
//   } catch {
//     console.log('아이디 중복 체크를 위한 기존 유저 정보가 없습니다.');
//   }

//   checkUniqueId(joinIdCheckList);

//   if (joinIdCheckResult || joinIdCheckResult === undefined) {
//     saveStorage('userInformation', [
//       {
//         joinToken: joinToken,
//         id: id.value,
//         email: email.value,
//         pw: pw.value,
//       },
//     ]);
//     let newUserInfo = await loadStorage('userInformation');

//     if (existingUserList === null) {
//       joinUserList.push(newUserInfo[0]);
//       saveStorage('userInformation', joinUserList);
//     } else {
//       existingUserList.push(newUserInfo[0]);
//       joinUserList = existingUserList;
//       saveStorage('userInformation', joinUserList);
//     }
//     window.location.href = '../../pages/login.html';
//   }
// }
