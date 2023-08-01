import {
  renderEmptySvg,
  renderReviewCardText,
  renderReviewCardPhoto,
  renderSpinner,
} from '../../lib/dom/renderReview.js';
import {
  addClass,
  changeClass,
  changeClickImageName,
  changeImageName,
  checkHasClass,
  clearContents,
  css,
  getNode,
  removeClass,
  tiger,
} from '../../lib/index.js';

const themeList = getNode('.themeList');
const showListWrapper = getNode('.showListWrapper');
const buttonChangeArrange = getNode('.buttonChangeArrange');
const body = getNode('body');
const arrangeWrapper = getNode('.arrangeWrapper');
const arrangeNew = getNode('.arrangeNew');
const arrangeViews = getNode('.arrangeViews');
const reviewList = getNode('.reviewList');

const themeSlide = new Swiper('.swiperTheme', {
  direction: 'horizontal',
  slidesPerView: '2',
  width: '320',
  grabCursor: true,
  freeMode: {
    enabled: true,
    sticky: true,
  },
});

const reviewSlide = new Swiper('.swiperReview', {
  direction: 'vertical',
  slidesPerView: '1',
  height: '144',
  grid: {
    rows: 2,
  },
});

/* -------------------------------------------------------------------------- */
/*                                     완료                                   */
/* -------------------------------------------------------------------------- */
function handleTheme(e) {
  e.preventDefault();
  e.stopPropagation();
  const target = e.target.closest('a');
  if (!target) {
    return;
  }

  if (checkHasClass(target, 'makeThemeButton__link')) {
    const makeThemeButtonLink = getNode('.makeThemeButton__link');
    const makeThemeButtonText = getNode('.makeThemeButton__text');
    const icon = getNode('.makeThemeButton use');

    changeClass(makeThemeButtonLink, '-bg--lion-white', '-bg--lion-primary');
    changeClass(
      makeThemeButtonText,
      '-text--lion-gray-300',
      '-text--lion-white'
    );

    changeClickImageName(icon, 'default', 'clicked');

    setTimeout(() => {
      removeClass(makeThemeButtonLink, '-bg--lion-primary');
      addClass(makeThemeButtonLink, '-bg--lion-white');

      removeClass(makeThemeButtonText, '-text--lion-white');
      addClass(makeThemeButtonText, '-text--lion-gray-300');

      changeImageName(icon, 'clicked', 'default');
      location.href = 'https://www.naver.com';
    }, 300);
  }
}

/* -------------------------------------------------------------------------- */
/*                                     완료                                   */
/* -------------------------------------------------------------------------- */
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

  if (checkHasClass(target, '-text--lion-gray-300')) {
    changeClass(target, '-text--lion-gray-300', '-text--lion-black');
    changeImageName(icon, 'default', 'clicked');
  }

  return renderShowMethod(e);
}

/* -------------------------------------------------------------------------- */
/*                                     완료                                   */
/* -------------------------------------------------------------------------- */
function renderShowMethod(e) {
  const target = e.target.closest('button');

  if (checkHasClass(target, 'showListWrapper__all')) {
    renderReviewListAll();
  } else {
    renderReviewListPhoto();
  }
}

/* -------------------------------------------------------------------------- */
/*                                     완료                                   */
/* -------------------------------------------------------------------------- */
function handleOpenMenu(e) {
  const target = e.target.closest('.buttonChangeArrange');
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

/* -------------------------------------------------------------------------- */
/*                                     완료                                   */
/* -------------------------------------------------------------------------- */
function handleCloseMenu(e) {
  const icon = getNode('.arrowIcon');

  changeImageName(icon, 'up', 'down');

  const isItem = e.target.closest('.buttonChangeArrange span');
  const menuItem = [...arrangeWrapper.children];

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

  return renderReviewListArrange(e);
}

/* -------------------------------------------------------------------------- */
/*                                     완료                                   */
/* -------------------------------------------------------------------------- */
async function renderReviewListArrange(e) {
  const target = e.target.closest('span');
  if (!target) {
    return;
  }

  const buttonAll = getNode('.showListWrapper__all');
  const buttonPhoto = getNode('.showListWrapper__photo');

  if (checkHasClass(buttonAll, '-text--lion-black')) {
    renderReviewListAll();
  } else if (checkHasClass(buttonPhoto, '-text--lion-black')) {
    renderReviewListPhoto();
  }
}

/* -------------------------------------------------------------------------- */
/*                                     완료                                   */
/* -------------------------------------------------------------------------- */
function handleTogglePin(e) {
  e.stopPropagation();
  const target = e.target.closest('span');
  if (!target) {
    return;
  }
  e.preventDefault();

  const icon = target.querySelector('use');
  changeClickImageName(icon, 'default', 'clicked');
}

/* -------------------------------------------------------------------------- */
/*                                     완료                                   */
/* -------------------------------------------------------------------------- */
async function renderReviewListPhoto() {
  clearContents(reviewList);
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

    const hasNewFirst = checkHasClass(arrangeNew, 'order-first');
    const hasViewsFirst = checkHasClass(arrangeViews, 'order-first');

    if (hasNewFirst) {
      usersData.forEach((item, index) => {
        const usersToken = usersData[index].token;

        reviewsData.forEach((item, index) => {
          const reviewsToken = reviewsData[index].token;

          if (usersToken === reviewsToken && item.restaurants.length > 1) {
            reviewsData[index].restaurants.forEach((item) => {
              renderReviewCardPhoto(reviewList, item);
            });
            reviewSlide.slideTo(0);
          } else {
            renderEmptySvg(reviewList);
          }
        });
      });
    } else if (hasViewsFirst) {
      usersData.forEach((item, index) => {
        const usersToken = usersData[index].token;

        reviewsData.forEach((item, index) => {
          const reviewsToken = reviewsData[index].token;

          if (usersToken === reviewsToken && item.restaurants.length > 1) {
            reviewsData[index].restaurants
              .slice()
              .reverse()
              .forEach((item) => {
                renderReviewCardPhoto(reviewList, item);
              });
            reviewSlide.slideTo(0);

            return handleTogglePin(e);
          } else {
            renderEmptySvg(reviewList);
          }
        });
      });
    }
  } catch (err) {
    renderEmptySvg(reviewList);
  }
}
renderReviewListPhoto();

/* -------------------------------------------------------------------------- */
/*                                     완료                                   */
/* -------------------------------------------------------------------------- */
async function renderReviewListAll() {
  clearContents(reviewList);
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

    const hasNewFirst = checkHasClass(arrangeNew, 'order-first');
    const hasViewsFirst = checkHasClass(arrangeViews, 'order-first');

    if (hasNewFirst) {
      usersData.forEach((item, index) => {
        const usersToken = usersData[index].token;

        reviewsData.forEach((item, index) => {
          const reviewsToken = reviewsData[index].token;

          if (usersToken === reviewsToken && item.restaurants.length > 1) {
            reviewsData[index].restaurants.forEach((item) => {
              renderReviewCardText(reviewList, item);
            });
            reviewSlide.slideTo(0);
          } else {
            renderEmptySvg(reviewList);
          }
        });
      });
    } else if (hasViewsFirst) {
      usersData.forEach((item, index) => {
        const usersToken = usersData[index].token;

        reviewsData.forEach((item, index) => {
          const reviewsToken = reviewsData[index].token;

          if (usersToken === reviewsToken && item.restaurants.length > 1) {
            reviewsData[index].restaurants
              .slice()
              .reverse()
              .forEach((item) => {
                renderReviewCardText(reviewList, item);
              });
            reviewSlide.slideTo(0);
          } else {
            renderEmptySvg(reviewList);
          }
        });
      });
    }
  } catch (err) {
    renderEmptySvg(reviewList);
  }
}

themeList.addEventListener('click', handleTheme);
showListWrapper.addEventListener('click', handleShowList);
buttonChangeArrange.addEventListener('click', handleOpenMenu);
body.addEventListener('click', handleCloseMenu);
reviewList.addEventListener('click', handleTogglePin);
