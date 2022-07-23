const BUTTON_ESCAPE = 'Escape';
const ALERT_SHOW_TIME = 5000;
// const getRandomIntInclusive = (min, max) => {
//   if (min >= 0 && max >= 0) {
//     if( min < max) {
//       min = Math.ceil(min);
//       max = Math.floor(max);
//       return Math.floor(Math.random() * (max - min + 1)) + min;
//     }

//     else if (min > max) {
//       const minValue = max;
//       max = min;
//       min = minValue;
//       min = Math.ceil(min);
//       max = Math.floor(max);
//       return Math.floor(Math.random() * (max - min + 1)) + min;
//     }

//     else {
//       return min;
//     }
//   }
//   else {
//     return 'Number must be positive';
//   }
// };

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
export {makeElement, isEscapeKey, showAlert};

