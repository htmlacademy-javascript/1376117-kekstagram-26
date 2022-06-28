const bigPicture = document.body.querySelector('.big-picture');
const previewPicture = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const commentsList = bigPicture.querySelector('.social__comments');
const fragmentItem = document.createDocumentFragment();
const descriptionPicture = bigPicture.querySelector('.social__caption');
const commentCountElement = bigPicture.querySelector('.social__comment-count');
const commentsLoaderElement = bigPicture.querySelector('.comments-loader');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const bodyElement = document.querySelector('body');

closeButton.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    bigPicture.classList.add('hidden');
  }
});

export {bigPicture, commentCountElement, commentsLoaderElement, bodyElement,
  previewPicture, likesCount, commentsCount, descriptionPicture, commentsList, fragmentItem};
