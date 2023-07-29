import {
  addClass,
  changeClass,
  getNode,
  removeClass,
  toggleIcon,
} from '../../lib/index.js';

const showAllListButton = getNode('.showAllList');
const showPhotoListButton = getNode('.showPhotoList');
const changeArrangeButton = getNode('.changeArrangeButton');

function handleAllList() {
  const showAllListIcon = getNode('.showAllList__icon');
  const showAllListText = getNode('.showAllList__text');

  changeClass(showAllListText, '-text--lion-black', '-text--lion-gray-300');
  toggleIcon(
    showAllListIcon,
    `bg-[url('/assets/icons/Icon/hamburger_review_default.svg')]`,
    `bg-[url('/assets/icons/Icon/hamburger_review_clicked.svg')]`
  );
}

function handlePhotoList() {
  const showPhotoListIcon = getNode('.showPhotoList__icon');
  const showPhotoListText = getNode('.showPhotoList__text');

  changeClass(showPhotoListText, '-text--lion-gray-300', '-text--lion-black');
  toggleIcon(
    showPhotoListIcon,
    `bg-[url('/assets/icons/Icon/camera_review_clicked.svg')]`,
    `bg-[url('/assets/icons/Icon/camera_review_default.svg')]`
  );
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

showAllListButton.addEventListener('click', handleAllList);
showPhotoListButton.addEventListener('click', handlePhotoList);
changeArrangeButton.addEventListener('click', handleChangeArrange);
