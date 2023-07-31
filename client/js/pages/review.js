import {
  renderEmptySvg,
  renderReviewCard,
  renderSpinner,
} from '../../lib/dom/reviewCard.js';
import {
  addClass,
  changeClass,
  changeClickImageName,
  changeImageName,
  css,
  getNode,
  removeClass,
  tiger,
} from '../../lib/index.js';

const makeThemeButton = getNode('.makeThemeButton');
const makeThemeButtonText = getNode('.makeThemeButton__text');

const showListWrapper = getNode('.showListWrapper');

const changeArrangeButton = getNode('.changeArrangeButton');
const body = getNode('body');
const arrangeWrapper = getNode('.arrangeWrapper');
const arrangeNew = getNode('.arrangeNew');
const arrangeViews = getNode('.arrangeViews');

const reviewList = getNode('.reviewList');

new Swiper('.swiperTheme', {
  direction: 'horizontal',
  slidesPerView: '2',
  width: '320',
  grabCursor: true,
  freeMode: {
    enabled: true,
    sticky: true,
  },
});

new Swiper('.swiperReview', {
  direction: 'vertical',
  slidesPerView: '3',
  // spaceBetween: 8,
  // autoHeight: true,
  height: '430',
  grid: {
    rows: 2,
  },
});

function handleMakeTheme(e) {
  e.preventDefault();

  const icon = document.querySelector('.makeThemeButton use');

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

function handleShowList(e) {
  const target = e.target.closest('.showListWrapper button');
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

function handleOpenMenu(e) {
  const target = e.target.closest('.changeArrangeButton');
  if (!target) {
    return;
  }

  const icon = getNode('.arrowIcon');

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
  const icon = getNode('.arrowIcon');
  const isItem = e.target.closest('.changeArrangeButton span');
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
  } else {
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

function handleTogglePin(e) {
  const target = e.target.closest('li');
  if (!target) {
    return;
  }
  const isSvg = e.target.closest('svg');
  const isUse = e.target.closest('use');
  const icon = target.querySelector('use');

  if (isSvg || isUse) {
    e.preventDefault();
    changeClickImageName(icon, 'default', 'clicked');
  }
}

// async function modifyDataTogglePin() {
//   const response = await tiger.put('http://localhost:3000/reviews');
//   const reviewsData = response.data;

//   console.log(reviewsData);
// }

// modifyDataTogglePin();

async function renderReviewList() {
  renderSpinner(reviewList);
  const loadingSpinner = getNode('.loadingSpinner');

  try {
    gsap.to(loadingSpinner, {
      opacity: 0,
      onComplete() {
        loadingSpinner.remove();
      },
    });

    const users = await tiger.get('http://localhost:3000/users');
    const response = await tiger.get('http://localhost:3000/reviews');
    const usersData = users.data;
    const reviewsData = response.data;

    usersData.forEach((item, index) => {
      const usersToken = usersData[index].token;

      reviewsData.forEach((item, index) => {
        const reviewsToken = reviewsData[index].token;

        if (usersToken === reviewsToken && item.restaurants.length > 1) {
          reviewsData[index].restaurants.forEach((item) => {
            renderReviewCard(reviewList, item);
          });
        }
      });
    });
  } catch (err) {
    renderEmptySvg(reviewList);
  }
}

makeThemeButton.addEventListener('click', handleMakeTheme);

showListWrapper.addEventListener('click', handleShowList);

changeArrangeButton.addEventListener('click', handleOpenMenu);
body.addEventListener('click', handleCloseMenu);

reviewList.addEventListener('click', handleTogglePin);

renderReviewList();