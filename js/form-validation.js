import { showMessage } from './messages.js';
import { sendData } from './api.js';

const MAX_DESCRIPTION_STRING = 140;
const MAX_COUNT_HASHTAGS = 5;
const NO_EFFECT = 'none';
const SUCCESS_MESSAGE= 'success';
const ERROR_MESSAGE = 'error';

const submitButton = document.querySelector('.img-upload__submit');
const form = document.querySelector('.img-upload__form');
const textDescription = document.querySelector('.text__description');
const textHashtags = document.querySelector('.text__hashtags');
const regExp = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
const imgUploadPreview = document.querySelector('.img-upload__preview img');

const validateCommentLength = (value) => value.length <= MAX_DESCRIPTION_STRING;

const validateHashtagsCount = (hashTagsString) => hashTagsString.split(' ').length <= MAX_COUNT_HASHTAGS;

const testUniqueHashtags = (hashTagsString) => {
  const hashtags = hashTagsString.toLowerCase().split(' ');
  const uniqueHashtags = Array.from(new Set(hashtags));
  return hashtags.length === uniqueHashtags.length;
};

const validateHashTagsFormat = (hashTagsString) => {
  if (hashTagsString === '') {
    return true;
  } else {
    const hashtags = hashTagsString.split(' ');
    let isValid = true;
    for (const hashtag of hashtags ) {
      isValid = regExp.test(hashtag);
      if (!isValid) {
        break;
      }
    }
    return isValid;
  }
};

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__error-text',
});

pristine.addValidator(textDescription, validateCommentLength, `Максимальная длина ${MAX_DESCRIPTION_STRING} символов`);
pristine.addValidator(textHashtags, validateHashtagsCount, 'Не больше 5 хэш-тегов');
pristine.addValidator(textHashtags, testUniqueHashtags, 'Oдин и тот же хэш-тег не может быть использован дважды');
pristine.addValidator(textHashtags, validateHashTagsFormat, 'Xэш-тег начинается с символа # (решётка).Cтрока после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы и т.д. Длина хэш-тега от 2 до 20');

const blockSubmitButton = () => {
  submitButton.disabled = true;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
};

const setPictureFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          onSuccess(showMessage(SUCCESS_MESSAGE));
          unblockSubmitButton();
          form.reset();
          imgUploadPreview.style.filter = NO_EFFECT;
        },
        () => {
          showMessage(ERROR_MESSAGE);
          unblockSubmitButton();
        },
        new FormData(evt.target),
      );
    }
  });
};

export {pristine, setPictureFormSubmit};
