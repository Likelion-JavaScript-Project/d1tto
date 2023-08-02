import {
  loadStorage,
  getNode,
  toggleClass,
  getNodes,
  tiger,
  attr,
} from '../../lib/index.js';

const container = getNode('.recommendedContainer');
const button = getNode('.saveButton');

let interestList = [];

function handleInterest(e) {
  e.preventDefault();
  const target = e.target.closest('li');

  if (!target) return;

  const subTitle = target.querySelector('p');
  const title = target.querySelector('span');
  const button = target.querySelector('button');

  toggleClass(target, '-bg--lion-primary');
  toggleClass(subTitle, 'text-[#D1D2D6]');
  toggleClass(title, '-text--lion-white');
  toggleClass(button, `bg-[url('../assets/icons/Icon/check_interests.svg')]`);

  const titleText = title.innerHTML;

  if (interestList.includes(titleText)) {
    // 이미 배열에 있는 경우, 배열에서 해당 항목 삭제
    interestList = interestList.filter((item) => item !== titleText);
  } else {
    // 배열에 없는 경우, 배열에 추가
    interestList.push(titleText);
  }
}

async function postInterestList() {
  if (interestList.length === 0) {
    alert('관심지역이 1개 이상 선택되어야 합니다.');
    return;
  }
  const token = await loadStorage('token');
  const response = await tiger.get('http://localhost:3000/interests');
  const responseData = response.data;

  //0. responseData은 배열이라 데이터 접근을 위해 배열제거를 forEach 함
  responseData.forEach((item) => {
    //1. data에 중복된 token이 있는지 확인
    if (token === item.token) {
      //2. 중복된게 있다면 tiger.delete
      tiger.delete(`http://localhost:3000/interests/${item.id}`);
    }
  });
  //3. 현재 token이 선택한 값을 tiger.post
  tiger.post('http://localhost:3000/interests', {
    token: token,
    location: interestList,
  });
  location.href = '../pages/visited.html';
}

container.addEventListener('click', handleInterest);
button.addEventListener('click', postInterestList);
