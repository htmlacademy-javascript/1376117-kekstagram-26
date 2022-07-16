/*При нажатии на кнопки .scale__control--smaller и .scale__control--bigger должно
 изменяться значение поля .scale__control--value;
Значение должно изменяться с шагом в 25. Например, если значение поля установлено
в 50%, после нажатия на «+», значение должно стать равным 75%. Максимальное значение — 100%,
минимальное — 25%. Значение по умолчанию — 100%;
При изменении значения поля .scale__control--value изображению внутри .img-upload__preview
должен добавляться соответствующий стиль CSS, который с помощью трансформации scale задаёт масштаб.
Например, если в поле стоит значение 75%, то в стиле изображения должно быть написано transform: scale(0.75).*/

/*Наложение эффекта на изображение:

По умолчанию должен быть выбран эффект «Оригинал».
На изображение может накладываться только один эффект.
При смене эффекта, выбором одного из значений среди радиокнопок
.effects__radio, добавить картинке внутри .img-upload__preview CSS-класс,
соответствующий эффекту. Например, если выбран эффект .effect-chrome, изображению нужно добавить класс effects__preview--chrome.
Интенсивность эффекта регулируется перемещением ползунка в слайдере.
Слайдер реализуется сторонней библиотекой для реализации слайдеров noUiSlider.
Уровень эффекта записывается в поле .effect-level__value. При изменении уровня интенсивности эффекта
(предоставляется API слайдера), CSS-стили картинки внутри .img-upload__preview обновляются следующим образом:
Для эффекта «Хром» — filter: grayscale(0..1) с шагом 0.1;
Для эффекта «Сепия» — filter: sepia(0..1) с шагом 0.1;
Для эффекта «Марвин» — filter: invert(0..100%) с шагом 1%;
Для эффекта «Фобос» — filter: blur(0..3px) с шагом 0.1px;
Для эффекта «Зной» — filter: brightness(1..3) с шагом 0.1;
Для эффекта «Оригинал» CSS-стили filter удаляются.
При выборе эффекта «Оригинал» слайдер скрывается.
При переключении эффектов, уровень насыщенности сбрасывается до начального
значения (100%): слайдер, CSS-стиль изображения и значение поля должны
 обновляться.*/
const NO_EFFECT = 'none';

const EFFECTS = {
  chrome: {
    filter: {
      range: {min: 0, max: 1,},
      start: 1,
      step: 0.1,
    },
    style: 'grayscale',
    measure: '',
  },

  sepia: {
    filter: {
      range: {min: 0, max: 1,},
      start: 1,
      step: 0.1,
    },
    style: 'sepia',
    measure: '',
  },

  marvin: {
    filter: {
      range: {min: 0, max: 100,},
      start: 100,
      step: 1,
    },
    style: 'invert',
    measure: '%',
  },

  phobos: {
    filter: {
      range: {min: 0, max: 3,},
      start: 3,
      step: 0.1,
    },
    style: 'blur',
    measure: 'px',
  },

  heat: {
    filter: {
      range: {min: 1, max: 3,},
      start: 3,
      step: 0.1,
    },
    style: 'brightness',
    measure: '',
  }
};

const sliderElement = document.querySelector('.effect-level__slider');
const imgUploadPreview = document.querySelector('.img-upload__preview img');
const effectLevelValue = document.querySelector('.effect-level__value');
const form = document.querySelector('#upload-select-image');
const filterInputs = document.querySelectorAll('input [type = "radio"]');
const effectsList = document.querySelector('.effects__list');
// const filterInputs = document.querySelectorAll('.effects__item');
let selectedEffect;

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
});

sliderElement.noUiSlider.on('update', () => {
  effectLevelValue.value = sliderElement.noUiSlider.get();
});

const onFilterChange = (evt) => {
  selectedEffect = evt.target.value;
  imgUploadPreview.className = '';
  imgUploadPreview.classList.add(`effects__preview--${selectedEffect}`);
  console.log(selectedEffect);
};

effectsList.addEventListener('change', onFilterChange);

sliderElement.addEventListener('change', () => {
  if ()
});
