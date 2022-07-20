const SIZE_STEP = 25;
const MIN_VALUE = 25;
const MAX_VALUE = 100;

const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const imageUploadPreview = document.querySelector('.img-upload__preview img');

const addImagePreview = (value) => {
  imageUploadPreview.style.transform = `scale(${ value / 100})`;
};

const increaseScale = () => {
  let currentValue = parseInt(scaleControlValue.value, 10);
  if (currentValue < MAX_VALUE) {
    currentValue += SIZE_STEP;
  }
  return currentValue;
};

const reduceScale = () => {
  let currentValue = parseInt(scaleControlValue.value, 10);
  if (currentValue > MIN_VALUE) {
    currentValue -= SIZE_STEP;
  }
  return currentValue;
};

const onclickPlusButton = () => {
  const currentValue = increaseScale();
  scaleControlValue.value = `${currentValue}%`;
  addImagePreview(currentValue);
};

const onClickMinusButton = () => {
  const currentValue = reduceScale();
  scaleControlValue.value = `${currentValue}%`;
  addImagePreview(currentValue);
};

const resetScale = () => {
  imageUploadPreview.style.transform = '';
  scaleControlValue.value = `${MAX_VALUE}%`;
};

export {onclickPlusButton, onClickMinusButton, scaleControlBigger, scaleControlSmaller, scaleControlValue, resetScale};
