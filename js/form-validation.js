const form = document.querySelector('.img-upload__form');
const textDescription = document.querySelector('.text__description');
const textHashtags = document.querySelector('.text__hashtags').value;
const regExp = /#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__error-text',
});

const validateCommentLength = (value) => value.length <= 140;


const validateHashtagsLength = (value) => value.length >= 2 && value.length <= 20;

pristine.addValidator(textDescription, validateCommentLength, 'Максимальная длина 140 символов');
pristine.addValidator(textHashtags, validateHashtagsLength, 'Длина символов от 2 до 20');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    form.submit();
  }
});

const getHashtags = (value) => value.split('');

 console.log(getHashtags());

