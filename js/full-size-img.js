import { isEscapeKey, makeElement } from './util.js';

const NOTES_ON_PAGE = 5;

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
let page = 0;
let startIndex = 0;
let photoComments;

const onClosePhotoEscape = (evt) => {
  if (isEscapeKey(evt)) {
    closePhoto();
  }
};

const onClosePhoto = () => {
  closePhoto();
};

const generateComment = (comment) => {
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
};

const addComments = (comments) => {
  comments.forEach(generateComment);
  commentsList.append(fragmentItem);
};

const makeCommentAmountInfo = (shownComments, totalAmountComments) => `${shownComments} из ${totalAmountComments} комментариев`;


const onLoadMore = () => {
  startIndex = page * NOTES_ON_PAGE;
  const endIndex = page * NOTES_ON_PAGE + NOTES_ON_PAGE;
  commentCountElement.textContent = makeCommentAmountInfo(endIndex, photoComments.length);

  addComments(photoComments.slice(startIndex, endIndex));
  if (endIndex >= photoComments.length) {
    commentCountElement.textContent = makeCommentAmountInfo(photoComments.length, photoComments.length);
    commentsLoaderElement.classList.add('hidden');
  }
  page++;
};

const openBigPhoto = (photo) => {
  commentsList.innerHTML = '';
  page = 0;
  photoComments = photo.comments;
  bigPicture.classList.remove('hidden');
  previewPicture.src = photo.url;
  descriptionPicture.textContent = photo.description;
  likesCount.textContent = photo.likes;
  const commentsLength = photo.comments.length;
  commentsCount.textContent = commentsLength;

  if (commentsLength <= NOTES_ON_PAGE) {
    commentsLoaderElement.classList.add('hidden');
    commentCountElement.textContent = makeCommentAmountInfo(commentsLength, commentsLength);

  } else {
    commentCountElement.textContent = makeCommentAmountInfo(NOTES_ON_PAGE, commentsLength);
    commentsLoaderElement.classList.remove('hidden');
    commentsLoaderElement.addEventListener('click', onLoadMore);
  }

  onLoadMore(photo.comments);

  bodyElement.classList.add('modal-open');
  window.addEventListener('keydown', onClosePhotoEscape);
  closeButton.addEventListener('click', onClosePhoto);
};

function closePhoto() {
  bigPicture.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  closeButton.removeEventListener('click', onClosePhoto);
  window.removeEventListener('keydown', onClosePhotoEscape);
  commentsLoaderElement.removeEventListener('click', onLoadMore);

}

export { openBigPhoto };
