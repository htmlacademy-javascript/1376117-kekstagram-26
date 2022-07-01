// Функция, возвращающая случайное целое число.
// Источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const getRandomIntInclusive = (min, max) => {
  if (min >= 0 && max >= 0) {
    if( min < max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    else if (min > max) {
      const minValue = max;
      max = min;
      min = minValue;
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    else {
      return min;
    }
  }
  else {
    return 'Number must be positive';
  }
};

// Функция для проверки максимальной длины строки
// Источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/length

const checkStringLength = (stringToCheck, maxLength) => stringToCheck.length <= maxLength;

checkStringLength('Keks', 10);

// Функция для создания элементов

const makeElement = (tagName, className) => {
  const element = document.createElement(tagName);
  element.classList.add(className);
  return element;
};

//Функция для закрытия окна по нажатию клавиши Esc

const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomIntInclusive, makeElement, isEscapeKey};

