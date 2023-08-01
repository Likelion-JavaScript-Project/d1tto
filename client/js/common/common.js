import { addClass, getNode, removeClass, getNodes } from '../../lib/index.js';

function createUserData({
  id = '',
  token = '',
  name = '',
  profileImage = '',
  following = '',
  follower = '',
}) {}

const headerNavigation = getNode('.headerNav__list');

// if (URL.includes('review')) {
//   const tab = headerNavigation.children[2];
//   changeNavigationColor();
// } else if (URL.includes('visited')) {
//   const tab = headerNavigation.children[1];
//   changeNavigationColor();
// }

function getURL() {
  const URL = window.location.href;

  if (URL.includes('feed')) {
    return 0;
  }
  if (URL.includes('visited')) {
    return 1;
  }
  if (URL.includes('review')) {
    return 2;
  }
  if (URL.includes('reservation')) {
    return 3;
  }
}

(function defaultNavigationColor() {
  let tab = headerNavigation.children[getURL()];

  removeClass(tab, 'hover:border-b-[2px]');
  removeClass(tab, 'hover:-border--lion-lightblue-300');
  removeClass(tab, 'hover:-text--lion-lightblue-300');

  addClass(tab, 'border-b-[2px]');
  addClass(tab, '-border--lion-lightblue-300');
  addClass(tab, '-text--lion-lightblue-300');
})();

export function changeNavigation(e) {
  e.preventDefault();
  const target = e.target.closest('li');
  if (!target) {
    return;
  }
  const navigationList = getNodes('.headerNav__list li');
  navigationList.forEach((item) => {
    removeClass(item, 'hover:-border--lion-lightblue-300');
    removeClass(item, 'hover:-text--lion-lightblue-300');
    removeClass(item, 'border-b-[2px]');
    removeClass(item, '-border--lion-lightblue-300');
    removeClass(item, '-text--lion-lightblue-300');
  });

  addClass(target, 'border-b-[2px]');
  addClass(target, '-border--lion-lightblue-300');
  addClass(target, '-text--lion-lightblue-300');
}

headerNavigation.addEventListener('click', changeNavigation);
