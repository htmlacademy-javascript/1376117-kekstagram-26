import {escapeKey, makeElement} from './util.js';
// import {escapeKey1} from './util.js';


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

// closeButton.addEventListener('click', () => {
//   bigPicture.classList.add('hidden');
//   bodyElement.classList.remove('modal-open');
// });

const closePhotoEscape = (evt) => {
  if (evt.key === 'Escape') {
    bigPicture.classList.add('hidden');
  }
};

function removeEvent () {
  closeButton.removeEventListener('click', () => {
    bigPicture.classList.remove('hidden');
    bodyElement.classList.add('modal-open');
  });
}

const openBigPhoto = (photo) => {
  bigPicture.classList.remove('hidden');
  previewPicture.src = photo.url;
  descriptionPicture.textContent = photo.description;
  likesCount.textContent = photo.likes;
  commentsCount.textContent = photo.comments;

  photo.comments.forEach((comment) => {
    const socialComment = makeElement('li', 'social__comment');
    const image = makeElement('img', 'social__picture');
    const socialText = makeElement('p', 'social__text');
    image.src = comment.avatar;
    image.alt = comment.name;
    image.width = '35';
    image.height = '35';
    socialText.textContent = comment.message;
    socialComment.append(image);
    socialComment.append(socialText);
    fragmentItem.append(socialComment);
    commentsList.append(fragmentItem);
  });
  commentCountElement.classList.add('hidden');
  commentsLoaderElement.classList.add('hidden');
  bodyElement.classList.add('modal-open');
  closeButton.addEventListener('click', () => {
    bigPicture.classList.add('hidden');
    bodyElement.classList.remove('modal-open');
    removeEvent();
  });
};


// const closePictureEscape = (evt) => {
//   if (escapeKey(evt)) {
//     bigPicture.classList.add('hidden');
//   }
// };

// document.addEventListener('keydown', (evt) => {
//   escapeKey1(evt, bigPicture);
// });

export {bigPicture, commentCountElement, commentsLoaderElement, bodyElement,
  previewPicture, likesCount, commentsCount, descriptionPicture, commentsList, fragmentItem, openBigPhoto};
