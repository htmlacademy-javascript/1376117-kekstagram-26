const BUTTON_ESCAPE = 'Escape';
const ALERT_SHOW_TIME = 5000;

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

// Функция для создания элементов

const makeElement = (tagName, className) => {
  const element = document.createElement(tagName);
  element.classList.add(className);
  return element;
};

//Функция для закрытия окна по нажатию клавиши Esc

const isEscapeKey = (evt) => evt.key === BUTTON_ESCAPE;

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

function debounce (callback, timeoutDelay = 500) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_throttle

// function throttle (callback, delayBetweenFrames) {
//   // Используем замыкания, чтобы время "последнего кадра" навсегда приклеилось
//   // к возвращаемой функции с условием, тогда мы его сможем перезаписывать
//   let lastTime = 0;

//   return (...rest) => {
//     // Получаем текущую дату в миллисекундах,
//     // чтобы можно было в дальнейшем
//     // вычислять разницу между кадрами
//     const now = new Date();

//     // Если время между кадрами больше задержки,
//     // вызываем наш колбэк и перезаписываем lastTime
//     // временем "последнего кадра"
//     if (now - lastTime >= delayBetweenFrames) {
//       callback.apply(this, rest);
//       lastTime = now;
//     }
//   };
// }

const getRandomUniqueElements = (array) => {
  const newArray = array.slice();
  const elements = [];
  for (let i = 0; i < array.length; i++) {
    const randomId = getRandomIntInclusive(0, newArray.length - 1);
    elements.push(newArray[randomId]);
    newArray.splice(randomId, 1);
  }
  return elements;
}

export {makeElement, isEscapeKey, showAlert, debounce, getRandomUniqueElements};
