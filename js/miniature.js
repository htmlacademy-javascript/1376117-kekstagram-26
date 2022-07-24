import {openBigPhoto} from './full-size-img.js';

const pictureItem = document.body.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const imgFiltersContainer = document.querySelector('.img-filters');

const renderSimilarPhoto = (similarPictures) => {
  const similarListFragment = document.createDocumentFragment();

  similarPictures.forEach((photo) => {
    const {url, likes, comments, description} = photo;
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__img').alt = description;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;

    pictureElement.addEventListener('click', () => {
      openBigPhoto(photo);
    });

    similarListFragment.appendChild(pictureElement);
  });

  pictureItem.appendChild(similarListFragment);
  imgFiltersContainer.classList.remove('img-filters--inactive');
};

export {renderSimilarPhoto};
