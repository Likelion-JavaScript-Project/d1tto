import {
  addClass,
  changeClass,
  changeClickImageName,
  changeImageName,
  css,
  getNode,
  removeClass,
} from '../../lib/index.js';

const showListWrapper = getNode('.showListWrapper');
const body = getNode('body');
const makeThemeButton = getNode('.makeThemeButton');
const makeThemeButtonText = getNode('.makeThemeButton__text');
const arrangeWrapper = getNode('.arrangeWrapper');
const arrangeContainer = getNode('.arrangeContainer');

function handleShowMethod(e) {
  const target = e.target.closest('button');

  if (!target) {
    return;
  }

  const buttonList = showListWrapper.querySelectorAll('button');

  buttonList.forEach((item) => {
    removeClass(item, '-text--lion-black');
    addClass(item, '-text--lion-gray-300');
    changeImageName(item.querySelector('use'), 'clicked', 'default');
  });

  const icon = target.querySelector('use');

  if (target.classList.contains('-text--lion-gray-300')) {
    changeClass(target, '-text--lion-gray-300', '-text--lion-black');
    changeImageName(icon, 'default', 'clicked');
  }
}

const arrangeViews = getNode('.arrangeViews');
const arrangeNew = getNode('.arrangeNew');
const icon = getNode('.arrowIcon');

function handleOpenMenu(e) {
  const target = e.target.closest('.arrangeContainer');
  if (!target) {
    return;
  }

  changeImageName(icon, 'down', 'up');
  if (css(arrangeViews, 'visibility') === 'hidden') {
    removeClass(arrangeViews, 'invisible');
    removeClass(arrangeViews, 'h-0');
    addClass(arrangeViews, 'h-[26px]');
    e.stopPropagation();
  } else if (css(arrangeNew, 'visibility') === 'hidden') {
    removeClass(arrangeNew, 'invisible');
    removeClass(arrangeNew, 'h-0');
    addClass(arrangeNew, 'h-[26px]');
    e.stopPropagation();
  }
}

function handleCloseMenu(e) {
  const target = e.target;
  const isItem = target.closest('.changeArrangeButton li');
  const menuItem = [...arrangeWrapper.children];

  changeImageName(icon, 'up', 'down');
  if (!isItem) {
    menuItem.forEach((item) => {
      if (!item.classList.contains('order-first')) {
        addClass(item, 'invisible');
        removeClass(item, 'h-[26px]');
        addClass(item, 'h-0');
      }
    });
    return;
  }

  if (isItem) {
    menuItem.forEach((item) => {
      removeClass(item, 'order-first');
      if (!item.contains(event.target)) {
        addClass(item, 'invisible');
        removeClass(item, 'h-[26px]');
        addClass(item, 'h-0');
      } else {
        addClass(item, 'order-first');
      }
    });
  }
}

function handleMakeTheme(e) {
  const icon = document.querySelector('.makeThemeButton use');
  e.preventDefault();

  changeClass(makeThemeButton, '-bg--lion-white', '-bg--lion-primary');
  changeClass(makeThemeButtonText, '-text--lion-gray-300', '-text--lion-white');
  changeClickImageName(icon, 'default', 'clicked');

  setTimeout(() => {
    removeClass(makeThemeButton, '-bg--lion-primary');
    removeClass(makeThemeButtonText, '-text--lion-white');

    addClass(makeThemeButton, '-bg--lion-white');
    addClass(makeThemeButtonText, '-text--lion-gray-300');

    changeImageName(icon, 'clicked', 'default');
  }, 300);
}

const reviewList = getNode('.reviewList');

function handleTogglePin(e) {
  e.preventDefault();
  const target = e.target.closest('.reviewList .pinButton');

  if (!target) {
    return;
  }

  changeClickImageName(target, 'default', 'clicked');
}

showListWrapper.addEventListener('click', handleShowMethod);
arrangeContainer.addEventListener('click', handleOpenMenu);
body.addEventListener('click', handleCloseMenu);
makeThemeButton.addEventListener('click', handleMakeTheme);
reviewList.addEventListener('click', handleTogglePin);
