import { typeError } from '../error/typeError.js';
import { addClass, removeClass } from './css.js';
import { getNode } from './getNode.js';

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

export function toggleIcon(node, removeIcon, addIcon) {
  if (typeof node === 'string') {
    node = getNode(node);
  }

  if (typeof removeIcon !== 'string' && typeof addIcon !== 'string') {
    typeError('toggleIcon 함수에서 icon의 값은 문자형이어야 합니다.');
  }

  if (node.classList.contains(removeIcon)) {
    removeClass(node, removeIcon);
    addClass(node, addIcon);
  } else {
    removeClass(node, addIcon);
    addClass(node, removeIcon);
  }
}
