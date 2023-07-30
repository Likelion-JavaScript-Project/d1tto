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
const changeArrangeButton = getNode('.changeArrangeButton');
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

function handleOpenMenu(e) {
  const target = e.target.closest('.arrangeContainer');
  const icon = getNode('.arrowIcon');
  if (!target) {
    return;
  }

  changeClickImageName(icon, 'down', 'up');
  if (css(arrangeViews, 'display') === 'none') {
    removeClass(arrangeViews, 'hidden');
    removeClass(arrangeViews, 'h-0');
    addClass(arrangeViews, 'h-[26px]');
    e.stopPropagation();
  } else if (css(arrangeNew, 'display') === 'none') {
    removeClass(arrangeNew, 'hidden');
    removeClass(arrangeNew, 'h-0');
    addClass(arrangeNew, 'h-[26px]');
    e.stopPropagation();
  }
}

function handleChangeMenuItem(e) {
  const target = e.target;
  const isItem = target.closest('.changeArrangeButton li');
  const menuItem = [...arrangeWrapper.children];

  if (!isItem) {
    menuItem.forEach((item) => {
      if (!item.classList.contains('order-first')) {
        addClass(item, 'hidden');
      }
    });
    return;
  }

  if (isItem) {
    menuItem.forEach((item) => {
      removeClass(item, 'order-first');
      if (!item.contains(event.target)) {
        addClass(item, 'hidden');
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
showListWrapper.addEventListener('click', handleShowMethod);
arrangeContainer.addEventListener('click', handleOpenMenu);
body.addEventListener('click', handleChangeMenuItem);
makeThemeButton.addEventListener('click', handleMakeTheme);

// 동작 순서대로 하위 요소부터 이벤트를 적용하고 stopPropagation?
