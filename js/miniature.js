import {makePhotos} from './data.js';
import {openBigPhoto} from './full-size-img.js';

const pictureItem = document.body.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const similarPictures = makePhotos(25);
const similarListFragment = document.createDocumentFragment();

// similarPictures.forEach((photo) => {
//   const {url, likes, comments, description} = photo;
//   const pictureElement = pictureTemplate.cloneNode(true);
//   pictureElement.querySelector('.picture__img').src = url;
//   pictureElement.querySelector('.picture__likes').textContent = likes;
//   pictureElement.querySelector('.picture__comments').textContent = comments.length;

//   pictureElement.addEventListener('click', () => {
//     bigPicture.classList.remove('hidden');
//     previewPicture.src = url;
//     descriptionPicture.textContent = description;
//     likesCount.textContent = likes;
//     commentsCount.textContent = comments;
//     commentCountElement.classList.add('hidden');
//     commentsLoaderElement.classList.add('hidden');
//     bodyElement.classList.add('modal-open');

//     comments.forEach((comment) => {
//       const socialComment = makeElement('li', 'social__comment');
//       const image = makeElement('img', 'social__picture');
//       const socialText = makeElement('p', 'social__text');
//       image.src = comment.avatar;
//       image.alt = comment.name;
//       image.width = '35';
//       image.height = '35';
//       socialText.textContent = comment.message;
//       socialComment.append(image);
//       socialComment.append(socialText);
//       fragmentItem.append(socialComment);
//       commentsList.append(fragmentItem);
//     });
//   });

//   similarListFragment.appendChild(pictureElement);
// });

similarPictures.forEach((photo) => {
  const {url, likes, comments, description} = photo;
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;

  pictureElement.addEventListener('click', () => {
    openBigPhoto(photo);
  });

  similarListFragment.appendChild(pictureElement);
});

pictureItem.appendChild(similarListFragment);

export {pictureItem, makePhotos};
