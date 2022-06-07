// Функция, возвращающая случайное целое число.
// Источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomIntInclusive(min, max) {
  if (min >= 0 && max >= 0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    console.log("Number must be positive")
  }
}

getRandomIntInclusive(1,5);

// Функция для проверки максимальной длины строки
// Источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/length

function checkStringLength(stringToCheck, maxLength) {
  if (stringToCheck.length <= maxLength) {
    return true;
  } else {
    return false;
  }
}
