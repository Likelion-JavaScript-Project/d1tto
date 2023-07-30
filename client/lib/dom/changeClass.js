import { typeError } from '../error/typeError.js';
import { attr } from './attr.js';
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

export function changeImageName(icon, beforeName, AfterName) {
  const directory = attr(icon, 'xlink:href');
  const result = directory.replace(beforeName, AfterName);

  return attr(icon, 'xlink:href', result);
}

export function changeClickImageName(icon, beforeName, AfterName) {
  let directory = attr(icon, 'xlink:href');
  let result = directory.replace(beforeName, AfterName);

  if (directory.includes(AfterName)) {
    result = directory.replace(AfterName, beforeName);

    return attr(icon, 'xlink:href', result);
  }

  return attr(icon, 'xlink:href', result);
}
