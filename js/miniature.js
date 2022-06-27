import {makePhotos} from './data.js';
// import { bigPicture } from './full-size-img.js';
// import { previewPicture } from './full-size-img.js';

const pictureItem = document.body.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const similarPictures = makePhotos(25);
const similarListFragment = document.createDocumentFragment();

similarPictures.forEach(({url, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  similarListFragment.appendChild(pictureElement);
});

pictureItem.appendChild(similarListFragment);

export {pictureItem, makePhotos};
