import {
  addClass,
  getNode,
  removeClass,
  getNodes,
  tiger,
  getURL,
} from '../../lib/index.js';
import { renderUserData } from './renderCommon.js';

const headerNavigation = getNode('.headerNav__list');
const userTemplate = getNode('.userTemplate');

(function defaultNavigationColor() {
  let tab = headerNavigation.children[getURL()];

  addClass(tab, 'border-b-[2px]');
  addClass(tab, '-border--lion-lightblue-300');
  addClass(tab, '-text--lion-lightblue-300');
})();

function changeNavigationColor(e) {
  e.preventDefault();
  const target = e.target.closest('li');
  if (!target) {
    return;
  }

  const navigationList = getNodes('.headerNav__list li');
  navigationList.forEach((item) => {
    removeClass(item, 'border-b-[2px]');
    removeClass(item, '-border--lion-lightblue-300');
    removeClass(item, '-text--lion-lightblue-300');
  });

  addClass(target, 'border-b-[2px]');
  addClass(target, '-border--lion-lightblue-300');
  addClass(target, '-text--lion-lightblue-300');
}

async function renderingData() {
  const users = await tiger.get('http://localhost:3000/users');
  const usersData = users.data;

  const response = await tiger.get('http://localhost:3000/reviews');
  const reviewsData = response.data;

  const localToken = localStorage.getItem('token').slice(1, -1);

  let keyToken;
  let reviewCount;

  reviewsData.forEach((item) => {
    if (item.token === localToken) {
      reviewCount = item.restaurants.length;
      keyToken = item.token;
    }
  });

  usersData.forEach((item, index) => {
    if (item.token === keyToken) {
      item.reviews = reviewCount;
      item.image = reviewCount;
      renderUserData(userTemplate, item);
    }
  });
}
renderingData();

headerNavigation.addEventListener('click', changeNavigationColor);
