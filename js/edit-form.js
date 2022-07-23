import {isEscapeKey} from './util.js';
import './form-validation.js';
import {setupEffects, destroyEffects} from './range.js';
import {onclickPlusButton, onClickMinusButton, scaleControlBigger, scaleControlSmaller, resetScale} from './image-scale.js';
import { pristine } from './form-validation.js';
// import { showMessage } from './messages.js';

const FULL_SCALE_VALUE = 100;

const errorMessage = document.querySelector('.error');
const uploadFile = document.querySelector('#upload-file');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadCancel = document.querySelector('.img-upload__cancel');
const textHashtags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');
const form = document.querySelector('.img-upload__form');
const bodyElement = document.querySelector('body');
const scaleControl = document.querySelector('.scale__control--value');

const onCloseImgEdit = () => {
  closeImgEdit();
};

const onCloseImgEditEscape = (evt) => {
  if (isEscapeKey(evt) && !errorMessage) {
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
  resetScale();
  form.reset();
  pristine.reset();
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
    scaleControl.defaultValue = `${FULL_SCALE_VALUE}%`;
    scaleControlBigger.addEventListener('click', onclickPlusButton);
    scaleControlSmaller.addEventListener('click', onClickMinusButton);
  });
};

export{openImgEdit, closeImgEdit};
