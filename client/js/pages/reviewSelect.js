import { tiger } from '../../lib/utils/tiger.js';
import { loadStorage } from '../../lib/utils/storage.js';
import { getNode } from '../../lib/dom/getNode.js';
import { renderReviewList } from '../../lib/dom/renderReviewList.js';

const reviewListTarget = getNode('.reviewList');

async function renderReviewData() {
  const users = await tiger.get('http://localhost:3000/users');
  const response = await tiger.get('http://localhost:3000/reviews');
  const usersData = users.data;
  const reviewsData = response.data;
  const localToken = await loadStorage('token');

  usersData.forEach((item, index) => {
    const userToken = usersData[index].token;
    if (userToken === localToken) {
      reviewsData.forEach((item, index) => {
        if (reviewsData[index].token === localToken) {
          const restaurantData = reviewsData[index].restaurants;
          restaurantData.forEach((item) => {
            const date = item.visitDate + '';
            item.month = date.slice(5, 7);
            item.day = date.slice(8, 10);
            renderReviewList(reviewListTarget, item);
          });
        }
      });
    }
  });
}

window.addEventListener('DOMContentLoaded', renderReviewData);
