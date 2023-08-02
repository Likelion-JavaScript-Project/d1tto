import { insertFirst } from '../../lib/dom/insert.js';

export function createReviewList({
  name = '',
  comment = '',
  address = '',
  month = '',
  day = '',
  image = '',
}) {
  const template = /* html */ `
  <li
          class="reviewList__item relative mb-3 h-[91px] rounded-2xl -bg--lion-white"
        ><a href="/">
          <div
            class="reviewList__item__image absolute left-0 inline-block h-[91px] w-[92px] rounded-l-2xl bg-cover" style="background-image: url(${image})"
          ></div>
          <div class="reviewList__item__info ml-[104px] py-3 pr-3">
            <span
              class="restaurantName pb-1 -text--lion-label-small font-medium -text--lion-contents-content-primary"
              >${name}</span
            >
            <p
              class="reviewContents overflow-hidden truncate text-ellipsis pb-1 -text--lion-paragraph-small"
            >${comment}
            </p>
            <div class="infoDetial__container flex flex-row">
              <span
                class="location -text--lion-paragraph-small -text--lion-contents-content-tertiary"
                >${address}</span
              >
              <div
                class="divider not-sr-only -text--lion-paragraph-small -text--lion-contents-content-tertiary"
              >
                ㅣ
              </div>
              <span
                class="date -text--lion-paragraph-small -text--lion-contents-content-tertiary"
                >${month}.${day}. 방문</span
              >
            </div>
          </div>
          <button
            class="callHere absolute right-[10px] top-[10px] h-[18px] w-[18px] bg-[url('../assets/icons/icon/call_reviewSelect.svg')]"
          ></button>
          </a>
        </li>
  `;
  return template;
}

export function renderReviewList(target, data) {
  insertFirst(target, createReviewList(data));
}
