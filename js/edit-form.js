import {bodyElement} from './full-size-img.js';
import {isEscapeKey} from './util.js';
import './form-validation.js';

const uploadFile = document.querySelector('#upload-file');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadCancel = document.querySelector('.img-upload__cancel');
const textHashtags = document.querySelector('.text__hashtags');
const form = document.querySelector('.img-upload__form');

const onCloseImgEdit = () => {
  closeImgEdit();
  form.requestFullscreen();
};

const onCloseImgEditEscape = (evt) => {
  if (isEscapeKey(evt)) {
    closeImgEdit();
  }
};

const stopPropagationEsc = (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
};

function closeImgEdit () {
  imgUploadOverlay.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  imgUploadCancel.removeEventListener('change', onCloseImgEdit);
  window.removeEventListener('keydown', onCloseImgEditEscape);
  textHashtags.removeEventListener('keydown', stopPropagationEsc);
}

const openImgEdit = () => {
  uploadFile.addEventListener('change', () => {
    imgUploadOverlay.classList.remove('hidden');
    bodyElement.classList.add('modal-open');
    window.addEventListener('keydown', onCloseImgEditEscape);
    imgUploadCancel.addEventListener('click', onCloseImgEdit);
    textHashtags.addEventListener('keydown', stopPropagationEsc);
  });
};

export{openImgEdit};
