import { getNode, toggleClass, getNodes, tiger, attr } from "../../lib/index.js";

const container = getNode('.recommendedContainer')

let interestList = []

function handleInterest(e){
  e.preventDefault();
  const target = e.target.closest("li")
  // console.log(e.target)

  if(!target) return;

  const subTitle = target.querySelector("p")
  const title = target.querySelector("span")
  const button = target.querySelector("button")

  toggleClass(target,'-bg--lion-primary')
  toggleClass(subTitle,'text-[#D1D2D6]')
  toggleClass(title,'-text--lion-white')
  toggleClass(button,`bg-[url('../assets/icons/Icon/check_interests.svg')]`)

  interestList.push(title.innerHTML)
  console.log(interestList)
}
container.addEventListener('click', handleInterest)

