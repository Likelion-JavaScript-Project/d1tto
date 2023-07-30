import {
  addClass,
  changeClass,
  changeClickImageName,
  changeImageName,
  getNode,
  removeClass,
} from '../../lib/index.js';

const showListWrapper = getNode('.showListWrapper');
const changeArrangeButton = getNode('.changeArrangeButton');
const body = getNode('body');
const makeThemeButton = getNode('.makeThemeButton');
const makeThemeButtonText = getNode('.makeThemeButton__text');

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

function handleChangeArrange(e) {
  const arrangeNew = getNode('.arrangeNew');
  const arrangeViews = getNode('.arrangeViews');
  const arrowIcon = document.querySelector('.arrowIcon use');
  const arrangeWrapper = getNode('.arrangeWrapper');
  const checkClicked = changeArrangeButton.contains(e.target);
  e.stopPropagation();

  console.log(target);
  changeClass(changeArrangeButton, 'h-[26px]', 'h-[52px]');
  addClass(arrangeNew, 'hidden');
  changeImageName(arrowIcon, 'up', 'down');

  if (changeArrangeButton.classList.contains('h-[52px]')) {
    removeClass(arrangeNew, 'hidden');
    removeClass(arrangeViews, 'hidden');
    changeImageName(arrowIcon, 'down', 'up');
    return;
  } else if (changeArrangeButton.classList.contains('h-[26px]')) {
    if (e.target !== arrangeNew && e.target !== arrangeViews) {
      return;
    }
    addClass(arrangeNew, 'hidden');
    addClass(arrangeViews, 'hidden');
    removeClass(e.target, 'hidden');
    return;
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
// body.addEventListener('click', handleChangeArrange);
makeThemeButton.addEventListener('click', handleMakeTheme);
