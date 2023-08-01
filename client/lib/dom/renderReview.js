import { insertLast } from './insert.js';

function createReviewCardPhoto({
  id = '',
  name = '',
  address = '',
  url = '',
  like = false,
  image = '/assets/images/likeLion_common.png',
}) {
  if (like === true) {
    like = 'clicked';
  } else {
    like = 'default';
  }

  const template = /* html */ `
  <li data-index=${id} class="swiper-slide h-[138px] w-[145px]">
    <a
      target="_blank"
      noopener noreferrer
      href="${url}"
      class="relative block bg-cover h-[138px] w-[145px] rounded-[3px] p-2"
      style="background-image: url('${image}')"
    >
      <span aria-label="상단 고정 핀" class="pinButton absolute right-1.5 h-6 w-6">
        <svg aria-hidden="true" class="absolute right-0 top-0 h-6 w-6">
          <use
            xlink:href="#favorite-review-${like}"
          ></use>
        </svg>
      </span>
      <div class="pt-20">
        <span
          class="block text-[12.003px] font-semibold -text--lion-white"
          >${address}</span
        >
        <span class="block font-semibold -text--lion-white truncate"
          >${name}</span
        >
      </div>
    </a>
  </li>
  `;

  return template;
}

export function renderReviewCardPhoto(target, data) {
  insertLast(target, createReviewCardPhoto(data));
}

function createReviewCarText({
  id = '',
  name = '',
  address = '',
  url = '',
  keywords = '',
  remainKeywords = '',
}) {
  const template = /* html */ `
  <li data-index=${id} class="swiper-slide h-[138px] w-[145px]">
    <a
      target="_blank"
      noopener noreferrer
      href="${url}"
      class="relative block bg-cover h-[138px] w-[145px] rounded-[3px] p-2"
      style="background: linear-gradient(0deg, rgba(23,31,49,1) 40%, rgba(58,69,93,1) 90%);"
    >
    <div class= "relative top-6 -text--lion-white font-semibold text-[12.003px]">${keywords}</div>
    <div class= "relative top-7 -text--lion-white font-semibold text-[12.003px]">${remainKeywords}</div>
      <div class="pt-10">
        <span
          class="block text-[12.003px] font-semibold -text--lion-white"
          >${address}</span
        >
        <span class="block font-semibold -text--lion-white truncate"
          >${name}</span
        >
      </div>
    </a>
  </li>
  `;

  return template;
}
export function renderReviewCardText(target, data) {
  insertLast(target, createReviewCarText(data));
}

function createSpinner(loadingMessage = '리뷰 가져오는 중...') {
  return /* html */ `
  <figure class="loadingSpinner">
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
    style="margin:auto;background:#fff;display:block;" width="300px" height="150px" viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid">
    <circle cx="30" cy="50" fill="#e90c59" r="20">
      <animate attributeName="cx" repeatCount="indefinite" dur="1s" keyTimes="0;0.5;1" values="30;70;30"
        begin="-0.5s"></animate>
    </circle>
    <circle cx="70" cy="50" fill="#46dff0" r="20">
      <animate attributeName="cx" repeatCount="indefinite" dur="1s" keyTimes="0;0.5;1" values="30;70;30"
        begin="0s">
      </animate>
    </circle>
    <circle cx="30" cy="50" fill="#e90c59" r="20">
      <animate attributeName="cx" repeatCount="indefinite" dur="1s" keyTimes="0;0.5;1" values="30;70;30"
        begin="-0.5s"></animate>
      <animate attributeName="fill-opacity" values="0;0;1;1" calcMode="discrete" keyTimes="0;0.499;0.5;1" dur="1s"
        repeatCount="indefinite"></animate>
    </circle>
  </svg>
  <figcaption class= "text-center -text--lion-info-error">${loadingMessage}</figcaption>
</figure>
  `;
}
export function renderSpinner(target) {
  insertLast(target, createSpinner());
}

function createEmptySvg(
  ErrorMessage = '리뷰가 존재하지 않습니다😫 리뷰를 남겨보세요.'
) {
  return /* html */ `
  <figure class="empty-user-card">
    <svg width="300px" height="150px" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M180 100C180 111.881 177.405 123.168 172.746 133.308C160.119 160.865 132.292 180 100 180C67.7081 180 39.8811 160.865 27.2541 133.308C22.5946 123.168 20 111.881 20 100C20 55.8162 55.8162 20 100 20C144.184 20 180 55.8162 180 100Z" fill="#F4F7FC"/>
      <mask id="mask0_50_2137" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="20" y="20" width="160" height="160">
      <path d="M180 100C180 111.881 177.405 123.168 172.746 133.308C160.119 160.865 132.292 180 100 180C67.7081 180 39.8811 160.865 27.2541 133.308C22.5946 123.168 20 111.881 20 100C20 55.8162 55.8162 20 100 20C144.184 20 180 55.8162 180 100Z" fill="#F4F7FC"/>
      </mask>
      <g mask="url(#mask0_50_2137)">
      <path d="M59.1667 121H140.833L155 134H45L59.1667 121Z" fill="url(#paint0_linear_50_2137)"/>
      <rect x="63" y="72" width="74" height="82" rx="3" fill="#E6EAF5"/>
      <path d="M76 134H45V235H155V134H125L121 147H80L76 134Z" fill="url(#paint1_linear_50_2137)"/>
      </g>
      <path d="M148.548 28C156.53 28 163 34.4702 163 42.4516C163 50.433 156.53 56.9032 148.548 56.9032H139.162L132.385 64.2787C131.549 65.1879 130.032 64.5968 130.032 63.362V55.8526C124.736 53.7088 121 48.5165 121 42.4516C121 34.4702 127.47 28 135.452 28H148.548Z" fill="url(#paint2_linear_50_2137)"/>
      <circle r="2.25806" transform="matrix(-1 0 0 1 150.807 42.4514)" fill="#F4F7FC"/>
      <circle r="2.25806" transform="matrix(-1 0 0 1 141.774 42.4514)" fill="#F4F7FC"/>
      <circle r="2.25806" transform="matrix(-1 0 0 1 132.742 42.4514)" fill="#F4F7FC"/>
      <path d="M99.024 121.356C98.192 121.356 97.488 121.148 96.912 120.732C96.336 120.284 96.048 119.564 96.048 118.572C96.048 118.06 96.144 117.436 96.336 116.7C96.56 115.932 96.864 115.132 97.248 114.3C97.632 113.436 98.112 112.588 98.688 111.756C99.264 110.892 99.936 110.092 100.704 109.356C101.28 108.78 101.76 108.252 102.144 107.772C102.56 107.292 102.88 106.844 103.104 106.428C103.328 105.98 103.488 105.548 103.584 105.132C103.68 104.684 103.728 104.188 103.728 103.644C103.728 102.332 103.36 101.452 102.624 101.004C101.888 100.524 101.008 100.3 99.984 100.332C98.96 100.364 98.048 100.572 97.248 100.956C96.448 101.34 96.048 101.948 96.048 102.78C96.048 103.612 95.68 104.236 94.944 104.652C94.208 105.068 93.456 105.276 92.688 105.276C91.728 105.244 91.04 105.02 90.624 104.604C90.208 104.188 90 103.58 90 102.78C90 101.66 90.256 100.636 90.768 99.7077C91.312 98.7477 92.032 97.9317 92.928 97.2597C93.856 96.5877 94.928 96.0597 96.144 95.6757C97.392 95.2597 98.72 95.0357 100.128 95.0037C101.504 94.9717 102.784 95.1477 103.968 95.5317C105.152 95.8837 106.16 96.4437 106.992 97.2117C107.856 97.9797 108.512 98.9237 108.96 100.044C109.44 101.164 109.664 102.46 109.632 103.932C109.6 105.212 109.344 106.428 108.864 107.58C108.416 108.7 107.504 109.916 106.128 111.228C105.2 112.124 104.464 112.908 103.92 113.58C103.376 114.22 102.96 114.812 102.672 115.356C102.384 115.868 102.192 116.38 102.096 116.892C102.032 117.404 102 117.964 102 118.572C102 119.5 101.712 120.204 101.136 120.684C100.56 121.132 99.856 121.356 99.024 121.356ZM99.024 131.724C99.952 131.724 100.72 131.42 101.328 130.812C101.968 130.172 102.288 129.388 102.288 128.46C102.288 127.532 101.968 126.764 101.328 126.156C100.72 125.516 99.952 125.196 99.024 125.196C98.096 125.196 97.312 125.516 96.672 126.156C96.064 126.764 95.76 127.532 95.76 128.46C95.76 129.388 96.064 130.172 96.672 130.812C97.312 131.42 98.096 131.724 99.024 131.724Z" fill="url(#paint3_linear_50_2137)"/>
      <defs>
      <linearGradient id="paint0_linear_50_2137" x1="144.366" y1="135.174" x2="48.6921" y2="120.877" gradientUnits="userSpaceOnUse">
      <stop stop-color="#9198AA"/>
      <stop offset="1" stop-color="#B4B8C4"/>
      </linearGradient>
      <linearGradient id="paint1_linear_50_2137" x1="102.879" y1="231.936" x2="102.711" y2="163.972" gradientUnits="userSpaceOnUse">
      <stop stop-color="#D4D9E3"/>
      <stop offset="1" stop-color="#D2D5DC"/>
      </linearGradient>
      <linearGradient id="paint2_linear_50_2137" x1="121.687" y1="69.0469" x2="158.543" y2="23.4883" gradientUnits="userSpaceOnUse">
      <stop stop-color="#A7ABB6"/>
      <stop offset="1" stop-color="#C7CCD7"/>
      </linearGradient>
      <linearGradient id="paint3_linear_50_2137" x1="105" y1="138.5" x2="72.6675" y2="134.128" gradientUnits="userSpaceOnUse">
      <stop stop-color="#9198AA"/>
      <stop offset="1" stop-color="#B4B8C4"/>
      </linearGradient>
      </defs>
      </svg>
      
    <figcaption class= "left-[31%] top-48 -text--lion-info-error">${ErrorMessage}</figcaption>
  </figure>
  `;
}
export function renderEmptySvg(target) {
  insertLast(target, createEmptySvg());
}
