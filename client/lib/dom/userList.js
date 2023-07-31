import { insertLast } from './insert.js';

function createReviewCard({
  id = '',
  token = '',
  name = '',
  address = '',
  url = '',
  like = false,
  image = '',
}) {
  if (like === true) {
    like = 'clicked';
  } else {
    like = 'default';
  }

  const template = /* html */ `
  <li data-index=${id}>
    <a
      target="_blank"
      noopener noreferrer
      href="${url}"
      class="relative block w-[145px] rounded-[3px] bg-cover p-2"
      style="background-image: url('${image}')"
    >
      <span aria-label="상단 고정" class="absolute right-1.5 h-6 w-6">
        <svg aria-hidden="true" class="absolute right-0 top-0 h-6 w-6">
          <use
            class="pinButton"
            xlink:href="#favorite-review-${like}"
          ></use>
        </svg>
      </span>
      <div class="pt-20 w-[125px]">
        <span
          class="block text-[12.003px] font-semibold -text--lion-white"
          >${address}</span
        >
        <span class="block font-semibold -text--lion-white truncate h-6 w-full"
          >${name}</span
        >
      </div>
    </a>
  </li>
  `;

  return template;
}

export function renderReviewCard(target, data) {
  insertLast(target, createReviewCard(data));
}
