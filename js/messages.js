import { isEscapeKey } from './util.js';

const bodyElement = document.querySelector('body');

const showMessage = (typeMessage, message, textButton) => {
  const template = document.querySelector(`#${typeMessage}`).content.querySelector(`.${typeMessage}`);
  const messageElement = template.cloneNode(true);
  const buttonTemplate = messageElement.querySelector(`.${typeMessage}__button`);

  if (message) {
    template.querySelector(`.${typeMessage}__title`).textContent = message;
    buttonTemplate.textContent = textButton;
  }
  messageElement.style.zIndex = 100;
  bodyElement.append(messageElement);

  const onCloseMessageWindow = () => {
    messageElement.remove();
    document.removeEventListener('keydown', onCloseMessageWindowEsc);
  };

  function onCloseMessageWindowEsc (evt) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      evt.stopPropagation();
      onCloseMessageWindow();
    }
  }

  messageElement.addEventListener('click', onCloseMessageWindow);
  document.addEventListener('keydown', onCloseMessageWindowEsc);
};

export {showMessage};
