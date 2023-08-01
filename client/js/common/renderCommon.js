import { insertLast, tiger } from '../../lib/index.js';

function createUserData({
  id = '',
  name = '',
  profileImage = '',
  reviews = '',
  image = '',
  following = '',
  follower = '',
}) {
  const template = /* html */ `
  <span class="userName -text--lion-label-medium" data-index=${id}>${name}</span>
  <img
    class="userNameShare inline-block pb-[6px]"
    src="../assets/icons/Icon/btnShare_common.svg"
    alt="공유하기"
  />
  <a
    href=""
    class="userLink relative float-left mr-5 inline-block h-[56px] w-[56px] rounded-full border-4 border-solid border-white text-center -text--lion-label-small leading-[44px]" style="background-image: url('${profileImage}'); background-size: cover"
    >
    <img
      src="../assets/icons/Icon/userImgPencil_common.svg"
      alt=""
      class="absolute bottom-[-4px] right-[-4px] rounded-full -bg--lion-white p-[4px]"
  /></a>
  <ul class="userInfo mb-[12px]">
    <li
      class="userInfo__tab userInfo__tabReview inline-block h-[37.5px] pl-[10px] text-center"
    >
      <a href="" class="uerInfo__title inline-block -text--lion-label-small"
        >리뷰
        <span class="userInfo__count userInfo__countReview block">${reviews}</span>
      </a>
      <span
        class="userInfo__divider ml-[10px] inline-block h-[28px] w-[1px] -bg--lion-white"
      ></span>
    </li>
    <li
      class="userInfo__tab userInfo__tabReview inline-block h-[37.5px] pl-[10px] text-center"
    >
      <a href="" class="uerInfo__title inline-block -text--lion-label-small"
        >사진 <span class="userInfo__countPicture block">${image}</span></a
      ><span
        class="userInfo__divider ml-[10px] inline-block h-[28px] w-[1px] -bg--lion-white"
      ></span>
    </li>
    <li
      class="userInfo__tab userInfo__tabReview inline-block h-[37.5px] pl-[10px] text-center"
    >
      <a href="" class="uerInfo__title inline-block -text--lion-label-small"
        >팔로잉 <span class="userInfo__countFollwing block">${following}</span></a
      ><span
        class="userInfo__divider ml-[10px] inline-block h-[28px] w-[1px] -bg--lion-white"
      ></span>
    </li>
    <li
      class="userInfo__tab userInfo__tabReview inline-block h-[37.5px] pl-[10px] text-center"
    >
      <a href="" class="uerInfo__title inline-block -text--lion-label-small"
        >팔로워
        <span class="userInfo__countFollwer block">${follower}</span>
      </a>
    </li>
  </ul>
  `;

  return template;
}

export function renderUserData(target, data) {
  insertLast(target, createUserData(data));
}
