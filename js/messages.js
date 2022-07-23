/*
 <!-- Сообщение с ошибкой загрузки изображения -->
  <template id="error">
    <section class="error">
      <div class="error__inner">
        <h2 class="error__title">Ошибка загрузки файла</h2>
        <button type="button" class="error__button">Загрузить другой файл</button>
      </div>
    </section>
  </template>

  <!-- Сообщение об успешной загрузке изображения -->
  <template id="success">
    <section class="success">
      <div class="success__inner">
        <h2 class="success__title">Изображение успешно загружено</h2>
        <button type="button" class="success__button">Круто!</button>
      </div>
    </section>
  </template>
  */
// import { isEscapeKey } from './util.js';

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
};

// console.log(showMessage('error'));

export {showMessage};
