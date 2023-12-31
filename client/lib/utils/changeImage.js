import { attr } from '../dom/attr.js';
import { typeError } from '../error/typeError.js';

/**
 * 해당하는 icon의 파일 명을 2번째 인수에서 3번째 인수로 변환시키는 함수
 * @param {*} icon
 * @param {*} beforeName
 * @param {*} AfterName
 * @returns
 */
export function changeImageName(icon, beforeName, AfterName) {
  if (typeof icon === 'string') {
    typeError(
      'changeImageName 함수에서 첫 번째 인수는 node 타입이어야 합니다.'
    );
  }

  if (typeof beforeName !== 'string' || typeof AfterName !== 'string') {
    typeError(
      'changeImageName 함수에서 두 번째, 세 번째 인수는 문자형이어야 합니다.'
    );
  }

  const directory = attr(icon, 'xlink:href');
  const result = directory.replace(beforeName, AfterName);

  return attr(icon, 'xlink:href', result);
}

/**
 * 해당하는 icon의 파일 명에 2번째 인수가 포함된다면 3번째 인수로, 3번째 인수가 포함된다면 2번째 인수로 변환시키는 함수
 * @param {*} icon
 * @param {*} beforeName
 * @param {*} AfterName
 * @returns
 */
export function changeClickImageName(icon, beforeName, AfterName) {
  if (typeof icon === 'string') {
    typeError(
      'changeClickImageName 함수에서 첫 번째 인수는 node 타입이어야 합니다.'
    );
  }

  if (typeof beforeName !== 'string' || typeof AfterName !== 'string') {
    typeError(
      'changeClickImageName 함수에서 두 번째, 세 번째 인수는 문자형이어야 합니다.'
    );
  }

  let directory = attr(icon, 'xlink:href');
  let result = directory.replace(beforeName, AfterName);

  if (directory.includes(AfterName)) {
    result = directory.replace(AfterName, beforeName);

    return attr(icon, 'xlink:href', result);
  }

  return attr(icon, 'xlink:href', result);
}
