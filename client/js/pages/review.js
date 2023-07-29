import {
  addClass,
  changeClass,
  changeImageClicked,
  changeImageDefault,
  getNode,
  removeClass,
} from '../../lib/index.js';

const showListWrapper = getNode('.showListWrapper');
const showAllListButton = getNode('.showAllList');
const showPhotoListButton = getNode('.showPhotoList');
const changeArrangeButton = getNode('.changeArrangeButton');

function handleAllList() {
  const showAllListIcon = getNode('.showAllList__icon');
  const showAllListText = getNode('.showAllList__text');

  changeClass(showAllListText, '-text--lion-black', '-text--lion-gray-300');
  changeClass(
    showAllListIcon,
    `bg-[url('/assets/icons/Icon/hamburger_review_default.svg')]`,
    `bg-[url('/assets/icons/Icon/hamburger_review_clicked.svg')]`
  );
}
const showPhotoListText = getNode('.showPhotoList__text');

function handlePhotoList() {
  const showPhotoListIcon = getNode('.showPhotoList__icon');

  changeClass(showPhotoListText, '-text--lion-gray-300', '-text--lion-black');
  changeClass(
    showPhotoListIcon,
    `bg-[url('/assets/icons/Icon/camera_review_clicked.svg')]`,
    `bg-[url('/assets/icons/Icon/camera_review_default.svg')]`
  );
}

function handleShowMethod(e) {
  const target = e.target.closest('button');
  const icon = target.querySelector('use');
  const buttonList = showListWrapper.querySelectorAll('button');

  if (!target) {
    return;
  }

  buttonList.forEach((item) => {
    removeClass(item, '-text--lion-black');
    addClass(item, '-text--lion-gray-300');

    changeImageDefault(item.querySelector('use'));
  });

  if (target.classList.contains('-text--lion-gray-300')) {
    changeClass(target, '-text--lion-gray-300', '-text--lion-black');
    changeImageClicked(icon);
  }
}

function handleChangeArrange(e) {
  const arrangeNew = getNode('.arrangeNew');
  const arrangeViews = getNode('.arrangeViews');

  changeClass(changeArrangeButton, 'h-[26px]', 'h-[52px]');
  addClass(arrangeViews, 'hidden');

  if (changeArrangeButton.classList.contains('h-[52px]')) {
    removeClass(arrangeViews, 'hidden');
    removeClass(arrangeNew, 'hidden');
  } else {
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
