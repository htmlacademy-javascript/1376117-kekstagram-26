import { showAlert } from './util.js';

const getData = (onSuccess) => {
  fetch('https://26.javascript.pages.academy/kekstagram/data')
    .then((response) => {
      if (response.ok) {
        response.json()
          .then ((photo) => {
            onSuccess(photo);
          });
      } else {
        showAlert('Не удалось загрузить фотографии с сервера');
      }
    })
    .catch(() => {
      showAlert('Не удалось загрузить фотографии с сервера');
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch('https://26.javascript.pages.academ/kekstagram',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => onFail());
};

export{getData, sendData};
