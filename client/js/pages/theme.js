import {
  renderEmptySvg,
  renderReviewCardText,
  renderReviewCardPhoto,
  renderSpinner,
  renderReviewTheme,
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
  slidesPerView: '1',
  width: '160',
  grabCursor: true,
  mousewheel: true,
  freeMode: {
    enabled: true,
    sticky: true,
  },
});

const reviewSlide = new Swiper('.swiperReview', {
  direction: 'vertical',
  slidesPerView: '1',
  height: '144',
  mousewheel: true,
  grid: {
    rows: 2,
  },
});

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
      // location.href = 'https://www.naver.com';
    }, 300);
  }
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

  if (checkHasClass(target, '-text--lion-gray-300')) {
    changeClass(target, '-text--lion-gray-300', '-text--lion-black');
    changeImageName(icon, 'default', 'clicked');
  }

  return renderShowMethod(e);
}

function renderShowMethod(e) {
  const target = e.target.closest('button');

  if (checkHasClass(target, 'showListWrapper__all')) {
    renderReviewListAll();
  } else {
    renderReviewListPhoto();
  }
}

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

async function renderingTheme() {
  const response = await tiger.get('http://localhost:3000/reviews');
  const reviewsData = response.data;
  const users = await tiger.get('http://localhost:3000/users');
  const usersData = users.data;
  const localToken = localStorage.getItem('token').slice(1, -1);
  let isSave;
  let themeName;
  let listCount;
  let viewsCount;
  let image1;
  let image2;
  let image3;

  usersData.forEach((item, index) => {
    if (item.token === localToken) {
      item.themeName = `${usersData[index].name}의 맛집 리스트`;

      let keywordsCount = 0;

      reviewsData[index].restaurants.forEach((item) => {
        keywordsCount += Object.values(item.keywords).length;
      });
      if (keywordsCount > 12) {
        item.isSave = '수정하기';
      } else {
        item.isSave = '임시저장';
      }
      if (Object.values(reviewsData[index].restaurants).length > 2) {
        item.image1 = Object.values(reviewsData[index].restaurants)[0].image;
        item.image2 = Object.values(reviewsData[index].restaurants)[1].image;
        item.image3 = Object.values(reviewsData[index].restaurants)[2].image;
      } else {
        item.image1 = Object.values(reviewsData[index].restaurants)[0].image;
        item.image2 = Object.values(reviewsData[index].restaurants)[1].image;
      }

      item.listCount = Object.values(reviewsData[index].restaurants).length;
      item.viewsCount = Math.floor(Math.random() * 100);

      renderReviewTheme(themeList, item);
    }
  });
}
renderingTheme();

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

    const response = await tiger.get('http://localhost:3000/reviews');
    const reviewsData = response.data;
    const localToken = localStorage.getItem('token').slice(1, -1);

    const hasNewFirst = checkHasClass(arrangeNew, 'order-first');
    const hasViewsFirst = checkHasClass(arrangeViews, 'order-first');

    if (hasNewFirst) {
      reviewsData.forEach((item) => {
        if (item.token === localToken) {
          if (item.restaurants.length > 1) {
            item.restaurants.forEach((item) => {
              renderReviewCardPhoto(reviewList, item);
            });
            reviewSlide.slideTo(0);
          } else {
            renderEmptySvg(reviewList);
          }
        }
      });
    } else if (hasViewsFirst) {
      reviewsData.forEach((item) => {
        if (item.token === localToken) {
          if (item.restaurants.length > 1) {
            item.restaurants
              .slice()
              .reverse()
              .forEach((item) => {
                renderReviewCardPhoto(reviewList, item);
              });
            reviewSlide.slideTo(0);
          } else {
            renderEmptySvg(reviewList);
          }
        }
      });
    }
  } catch (err) {
    renderEmptySvg(reviewList);
  }
}
renderReviewListPhoto();

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
    const response = await tiger.get('http://localhost:3000/reviews');
    const reviewsData = response.data;
    const localToken = localStorage.getItem('token').slice(1, -1);

    const hasNewFirst = checkHasClass(arrangeNew, 'order-first');
    const hasViewsFirst = checkHasClass(arrangeViews, 'order-first');

    if (hasNewFirst) {
      reviewsData.forEach((item) => {
        if (item.token === localToken) {
          if (item.restaurants.length > 1) {
            item.restaurants.forEach((item) => {
              let keywords = Object.values(item.keywords);
              let remainKeywords;

              if (keywords.length > 1) {
                remainKeywords = `+ ${keywords.length - 1}`;
                keywords = keywords[0];
              } else if (keywords.length === 1) {
                keywords = keywords[0];
                remainKeywords = '';
              } else {
                keywords = '키워드가 없습니다.';
              }

              item.keywords = keywords;
              item.remainKeywords = remainKeywords;
              renderReviewCardText(reviewList, item);
            });
            reviewSlide.slideTo(0);
          } else {
            renderEmptySvg(reviewList);
          }
        }
      });
    } else if (hasViewsFirst) {
      reviewsData.forEach((item) => {
        if (item.token === localToken) {
          if (item.restaurants.length > 1) {
            item.restaurants
              .slice()
              .reverse()
              .forEach((item) => {
                let keywords = Object.values(item.keywords);
                let remainKeywords;

                if (keywords.length > 1) {
                  remainKeywords = `+ ${keywords.length - 1}`;
                  keywords = keywords[0];
                } else if (keywords.length === 1) {
                  keywords = keywords[0];
                  remainKeywords = '';
                } else {
                  keywords = '키워드가 없습니다.';
                }

                item.keywords = keywords;
                item.remainKeywords = remainKeywords;

                renderReviewCardText(reviewList, item);
              });
            reviewSlide.slideTo(0);
          } else {
            renderEmptySvg(reviewList);
          }
        }
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
