import {
  addClass,
  getNode,
  removeClass,
  getNodes,
  tiger,
  getURL,
} from '../../lib/index.js';
import { renderUserData } from './renderCommon.js';

const userTemplate = getNode('.userTemplate');
const coupon = getNode('.coupon');
const headerNavigation = getNode('.headerNav__list');
const footerNav__list = getNode('.footerNav__list');

function defaultNavigationColor() {
  if (getURL()) {
    let tab = headerNavigation.children[getURL()];

    addClass(tab, 'border-b-[2px]');
    addClass(tab, '-text--lion-lightblue-300');
  } else {
    return;
  }
}
defaultNavigationColor();

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

function handelToPage(e) {
  const target = e.target.closest('li');
  if (!target) {
    return;
  }
  const headerNavigationItem = getNodes('.commonHeader__list');
  const footerNavigationItem = getNodes('.footer__item');
  if (target === headerNavigationItem[0]) {
    location.href = '../pages/interests.html';
  } else if (target === headerNavigationItem[1]) {
    location.href = '../pages/visited.html';
  } else if (target === headerNavigationItem[2]) {
    location.href = '../pages/theme.html';
  } else if (target === footerNavigationItem[0]) {
    location.href = '../pages/map.html';
  } else if (target === footerNavigationItem[4]) {
    location.href = '../pages/visited.html';
  }
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
  if (getURL()) {
    usersData.forEach((item) => {
      if (item.token === keyToken) {
        item.reviews = reviewCount;
        item.image = reviewCount;
        renderUserData(userTemplate, item);
      }
    });
  }
}
renderingData();

if (getURL()) {
  coupon.addEventListener('click', (e) => {
    e.preventDefault();
  });
  headerNavigation.addEventListener('click', changeNavigationColor);
  headerNavigation.addEventListener('click', handelToPage);
}

footerNav__list.addEventListener('click', handelToPage);

setTimeout(() => {
  document.querySelector('.footerNav__list').addEventListener('click', (e) => {
    e.stopPropagation();
    e.preventDefault();
  });

  if (getURL()) {
    document.querySelector('.coupon_count').addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
    });
    document.querySelector('.userName').addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
    });
    document.querySelector('.userLink').addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
    });
    document.querySelector('.userInfo').addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
    });
    document.querySelector('.userInfoReview').addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
    });
    document.querySelector('.preventEvent').addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
    });
  }
}, 1000);
