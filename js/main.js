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
      let x = max;
      max = min;
      min = x;
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
}

getRandomIntInclusive(1,5);

// Функция для проверки максимальной длины строки
// Источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/length

const checkStringLength = (stringToCheck, maxLength) => {
  return stringToCheck.length <= maxLength;
}

checkStringLength('Keks', 10);
