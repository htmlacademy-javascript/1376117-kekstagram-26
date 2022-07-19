const SIZE_STEP = 25;
const MIN_VALUE = 25;
const MAX_VALUE = 100;

const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const imageUploadPreview = document.querySelector('.img-upload__preview img');
let selectedValue;
let currentValue = MAX_VALUE;

const addImagePreview = (value) => {
  imageUploadPreview.style.transform = `scale(${ value / 100})`;
  selectedValue = `${value}%`;
  scaleControlValue.setAttribute('value', selectedValue);
};

const increaseScale = () => {
  currentValue += SIZE_STEP;
  addImagePreview(currentValue);
};

const reduceScale = () => {
  currentValue -= SIZE_STEP;
  addImagePreview(currentValue);
};

const onclickPlusButton = () => {
  if (currentValue < MAX_VALUE) {
    increaseScale();
  }
};

const onClickMinusButton = () => {
  if (currentValue > MIN_VALUE) {
    reduceScale();
  }
};

export {onclickPlusButton, onClickMinusButton, scaleControlBigger, scaleControlSmaller, scaleControlValue};
