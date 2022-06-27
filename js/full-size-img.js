import {pictureItem} from './miniature.js';
import { makeElement } from './util.js';
const bigPicture = document.body.querySelector('.big-picture');
const previewPicture = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const commentsList = bigPicture.querySelector('.social__comments');
const fragmentItem = document.createDocumentFragment();
const descriptionPicture = bigPicture.querySelector('.social__caption');
// bigPicture.classList.remove('hidden');

const openBigPicture = (photo) => {
  previewPicture.src = photo.url;
  descriptionPicture.textContent = photo.description;
  likesCount.textContent = photo.likes;
  commentsCount.textContent = photo.comments.length;

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
  });
  commentsList.append(fragmentItem);
};

pictureItem.addEventListener('click',() => {
  bigPicture.classList.remove('hidden');

});

openBigPicture();

export {bigPicture};
export{previewPicture};
