import {isEscapeKey} from './util.js';
import './form-validation.js';
import {setupEffects, destroyEffects} from './range.js';
import {onclickPlusButton, onClickMinusButton, scaleControlBigger, scaleControlSmaller, scaleControlValue} from './image-scale.js';

const FULL_SCALE_VALUE = 100;

const uploadFile = document.querySelector('#upload-file');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadCancel = document.querySelector('.img-upload__cancel');
const textHashtags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');
const form = document.querySelector('.img-upload__form');
const bodyElement = document.querySelector('body');
const imageUploadPreview = document.querySelector('.img-upload__preview img');

const onCloseImgEdit = () => {
  closeImgEdit();
  form.reset();
};

const onCloseImgEditEscape = (evt) => {
  if (isEscapeKey(evt)) {
    closeImgEdit();
  }
};

const onStopPropagationEsc = (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
};

function closeImgEdit () {
  imgUploadOverlay.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  imgUploadCancel.removeEventListener('change', onCloseImgEdit);
  window.removeEventListener('keydown', onCloseImgEditEscape);
  textHashtags.removeEventListener('keydown', onStopPropagationEsc);
  textDescription.removeEventListener('keydown', onStopPropagationEsc);
  destroyEffects();
  scaleControlBigger.removeEventListener('click', onclickPlusButton);
  scaleControlSmaller.removeEventListener('click', onClickMinusButton);
  imageUploadPreview.style.transform = '';
  imageUploadPreview.style.filter = 'none';
  imageUploadPreview.className = 'none';
}

const openImgEdit = () => {
  uploadFile.addEventListener('change', () => {
    imgUploadOverlay.classList.remove('hidden');
    bodyElement.classList.add('modal-open');
    window.addEventListener('keydown', onCloseImgEditEscape);
    imgUploadCancel.addEventListener('click', onCloseImgEdit);
    textHashtags.addEventListener('keydown', onStopPropagationEsc);
    textDescription.addEventListener('keydown', onStopPropagationEsc);
    setupEffects();
    scaleControlValue.defaultValue = `${FULL_SCALE_VALUE}%`;
    scaleControlBigger.addEventListener('click', onclickPlusButton);
    scaleControlSmaller.addEventListener('click', onClickMinusButton);
  });
};

export{openImgEdit};
