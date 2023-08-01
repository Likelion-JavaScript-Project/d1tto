import { typeError } from '../error/typeError.js';
import { addClass, removeClass } from './css.js';
import { getNode } from './getNode.js';

/**
 *해당 노드의 class 중 2번째 인수가 있다면 3번째 인수의 class로,
 * 3번째 인수가 있다면 2번째 인수의 class로 변환되는 함수
 * @param {*} node
 * 적용시킬 node
 * @param {*} deleteClass
 * 처음 삭제 시키고 싶은 class, 없다면 추가됨
 * @param {*} makeClass
 * 처음 추가 시키고 싶은 class, 있다면 삭제됨
 */
export function changeClass(node, deleteClass, makeClass) {
  if (typeof node === 'string') {
    node = getNode(node);
  }

  if (typeof deleteClass !== 'string' && typeof makeClass !== 'string') {
    typeError('toggleClass 함수에서 class의 값은 문자형이어야 합니다.');
  }

  if (node.classList.contains(deleteClass)) {
    removeClass(node, deleteClass);
    addClass(node, makeClass);
  } else {
    removeClass(node, makeClass);
    addClass(node, deleteClass);
  }
}
