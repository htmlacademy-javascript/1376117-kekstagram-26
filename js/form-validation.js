const form = document.querySelector('.img-upload__form');
const textDescription = document.querySelector('.text__description');
const textHashtags = document.querySelector('.text__hashtags');
const regExp = /#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

const MAX_DESCRIPTION_STRING = 140;

const validateCommentLength = (value) => value.length <= MAX_DESCRIPTION_STRING;

const validateHashtagsStringLength = (hashTagsString) =>
  hashTagsString.length === 0 || (hashTagsString.length >= 2 && hashTagsString.length <= 20);

const validateHashtagsCount = (hashTagsString) => hashTagsString.split(' ').length <= 5;

const makeArrayWithUniqueHashtags = (hashTagsString) => Array.from(new Set(hashTagsString.split(' ')));

const validateHashTagsFormat = (hashTagsString) => {
  const listOfUniqueHashTags = makeArrayWithUniqueHashtags(hashTagsString);
  let i = 0;
  let isHashTagValid = true;
  while (isHashTagValid && i < listOfUniqueHashTags.length) {
    listOfUniqueHashTags.forEach((hashtag) => {
      isHashTagValid = regExp.test(hashtag);
      i++;
    });
  }
  return isHashTagValid;
};

const makeHashtagsToLowCase = (hashTagsString) => hashTagsString.toLowerCase();

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  // errorTextClass: 'img-upload__error-text',
});

pristine.addValidator(textDescription, validateCommentLength, `Максимальная длина ${MAX_DESCRIPTION_STRING} символов`);
pristine.addValidator(textHashtags, validateHashtagsStringLength, 'Длина символов от 2 до 20');
pristine.addValidator(textHashtags, validateHashtagsCount, 'Не больше 5 хэш-тегов');
pristine.addValidator(textHashtags, makeArrayWithUniqueHashtags, 'Один и тот же хэш-тег не может быть использован дважды');
pristine.addValidator(textHashtags, validateHashTagsFormat, 'Xэш-тег начинается с символа # (решётка).Cтрока после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы и т.д.');
pristine.addValidator(textHashtags, makeHashtagsToLowCase, '');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    form.submit();
  }
});
