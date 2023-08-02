// import { tiger } from "../../lib/utils/tiger.js";
// import { insertFirst, insertLast } from '../../lib/dom/insert.js';
// import { getNode } from '../../lib/dom/getNode.js';


// // fetch("./../../../server/db/data.json")
// //     .then(response => {
// //         return response.json();
// //     })
// //     .then(jsondata => console.log(jsondata));

// // let json = JSON.parse(JSON.stringify());
// // console.log(json);

// const review = await tiger.get('http://localhost:3000/visited');
// // const reviewdata = await tiger.get('http://localhost:3000/reviews');

// console.log(review);
// console.log(...review.data);



// for (const [key, value] of Object.entries(review)) {
//     // console.log(`${key}:${value}`);
//     console.log(...review.data);
// }
// console.log(review.data);

// const array = { ...review.data }
// const reviewList = { ...array }
// const findToken = { ...reviewList }
// console.log(findToken[0].token);
// let isToken = findToken[0].token;


// const data = [review.data]

// // console.log(data[0].place); undefined

// console.log(array[0].place[0]);
// console.log(array[1].place[0]);

// const datalist = { ...array[0].place[0] }

// // const dataArray = { ...datalist }

// // const keyList = Object.keys(datalist);
// // console.log(keyList);
// // console.log(typeof (keyList));

// let idx = 0;
// // console.log(dataArray);
// // console.log(datalist.keyList[1]);

// // datalist.forEach((item, index) => {
// //     console.log(datalist);
// // });
// console.log(datalist.date);

// // for (let i = 0; i < length)


// //방문장소 리뷰 포멧 만드는 함수
// function createReview({
//     visitPlace = '',
//     visitDate = 'm.d.d',
//     visitCount = '',
//     visitReview = '',
//     reviewTag = '',
//     img = '',
//     menuName = '', menuPrice = ''
// }) {
//     const template = `
//     <div class="reviewedContainer relative my-4 rounded-lg -bg--lion-white p-3">
//         <div class="reviewed__title mb-1">
//             <p class="restaurantsName -text--lion-label-medium font-semibold">
//                 ${visitPlace}
//                 <span class="dateCount -text--lion-paragraph-small -text--lion-contents-content-tertiary"> ${visitDate}
//                     • ${visitCount}번째 방문</span>
//             </p>
//         </div>
//         <div class="reviewed__reviewContainer flex gap-4">
//             <div class="reviewed__reviewSet">
//                 <p
//                     class="reviewed__reveiw text-ellipsis -text--lion-paragraph-small -text--lion-contents-content-secondary">
//                     ${visitReview}
//                 </p >
//             <div class="reviewed__tagSet flex flex-nowrap gap-[2px]">
//                 <div
//                     class="reviewed__summary w-[110px] rounded -bg--lion-gray-50 px-2 py-[2px] text-center -text--lion-paragraph-small -text--lion-contents-content-secondary">
//                     ${reviewTag}
//                 </div>
//                 <div
//                 class="reviewed__summaryCount w-[50px] rounded -bg--lion-gray-50 px-2 py-[2px] text-center -text--lion-paragraph-small -text--lion-contents-content-secondary">
//                 ${reviewTag}
//                 </div>
//                  <img id="img"
//             class="mr-[7px]"
//             src=${img}
//             alt="쿠키 2개"
//           />
//           <p>
//                 ${menuName}•${menuPrice}
//             </p>
//             <button
//           class="heart absolute right-[30px] top-[15px] h-[18px] w-[18px] bg-[url('../assets/icons/Icon/heart_visited.svg')]"
//         ></button>
//         <button
//           class="more absolute right-[12px] top-[15px] h-[18px] w-[18px] bg-[url('../assets/icons/Icon/more_visited.svg')]"
//         ></button>
//             </div>

//       `
//     return template;
// }

// //렌더링 함수
// function renderVisitReviewData(target, data) {
//     insertLast(target, createReview(data));
// }

// const renderTarget = getNode('.vistedMonth');

// function renderButton(target, data) {

// }
// console.log(localStorage.token.length);
// console.log(localStorage.token.slice(1, 14));
// console.log(typeof (localStorage.token) + typeof (isToken));
// const localToken = localStorage.token.slice(1, 14);
// console.log(localToken === isToken);
// //조건에 따라 renderVisitReview 함수 실행하기
// let index = 0;


// // keyList.forEach((item, index) => {
// //     console.log(datalist.item);
// // })
// async function renderVisitReview() {
//     let visitPlace = datalist.name;
//     let visitDate = datalist.date;
//     let visitCount = datalist.visitCount;
//     let visitReview = datalist.review;
//     let visitImg = datalist.img;


//     console.log(review.data);

// }
// renderVisitReview()
// console.log(array[1].place[0].review);