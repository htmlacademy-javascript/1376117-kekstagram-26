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
const effectsList = document.querySelector('.effects__list');
const effectLevel =document.querySelector('.img-upload__effect-level');

const updateEffects = (effect) => {
  sliderElement.noUiSlider.updateOptions(effect.filter);
};

const onFilterChange = (evt) => {
  const selectedEffect = evt.target.value;
  imgUploadPreview.className = '';
  imgUploadPreview.classList.add(`effects__preview--${selectedEffect}`);
  if (selectedEffect === NO_EFFECT) {
    imgUploadPreview.style.filter = NO_EFFECT;
    imgUploadPreview.className = '';
    effectLevelValue.value = '';
    effectLevel.classList.add('hidden');
  } else {
    effectLevel.classList.remove('hidden');
    updateEffects(EFFECTS[selectedEffect]);
  }
};

const setupEffects = () => {
  effectsList.addEventListener('change', onFilterChange);

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
    const selectedEffect = effectsList.querySelector('input:checked').value;
    effectLevelValue.value = sliderElement.noUiSlider.get();
    if (EFFECTS[selectedEffect]) {
      const styleName = EFFECTS[selectedEffect].style;
      const measure = EFFECTS[selectedEffect].measure;
      imgUploadPreview.style.filter = `${styleName}(${effectLevelValue.value}${measure})`;
    }
  });
  effectLevel.classList.add('hidden');
};

const destroyEffects = () => {
  sliderElement.noUiSlider.destroy();
  effectsList.removeEventListener('change', onFilterChange);
};

export {setupEffects, destroyEffects};
