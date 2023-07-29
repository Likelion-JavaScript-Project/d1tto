import {
  addClass,
  changeClass,
  changeImageName,
  getNode,
  removeClass,
} from '../../lib/index.js';

const showListWrapper = getNode('.showListWrapper');
const changeArrangeButton = getNode('.changeArrangeButton');

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

  changeClass(changeArrangeButton, 'h-[26px]', 'h-[52px]');
  addClass(arrangeViews, 'hidden');

  if (changeArrangeButton.classList.contains('h-[52px]')) {
    removeClass(arrangeNew, 'hidden');
    removeClass(arrangeViews, 'hidden');
  } else if (changeArrangeButton.classList.contains('h-[26px]')) {
    if (e.target !== arrangeNew && e.target !== arrangeViews) {
      return;
    }

    addClass(arrangeNew, 'hidden');
    addClass(arrangeViews, 'hidden');
    removeClass(e.target, 'hidden');
  }
}

showListWrapper.addEventListener('click', handleShowMethod);
changeArrangeButton.addEventListener('click', handleChangeArrange);
