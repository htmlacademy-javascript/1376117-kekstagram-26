const form = document.querySelector('.img-upload__form');
const textDescription = document.querySelector('.text__description');
const textHashtags = document.querySelector('.text__hashtags');
const regExp = /#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

const MAX_DESCRIPTION_STRING = 140;
const MAX_COUNT_HASHTAGS = 5;

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
    const listOfUniqueHashTags = hashTagsString.split(' ');
    let i = 0;
    let isHashTagValid = true;
    while (isHashTagValid && i < listOfUniqueHashTags.length) {
      listOfUniqueHashTags.forEach((hashtag) => {
        isHashTagValid = regExp.test(hashtag);
        i++;
      });
    }
    return isHashTagValid;
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

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    form.submit();
  }
});
