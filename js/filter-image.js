import {renderSimilarPhoto} from './miniature.js';
import { debounce, getRandomUniqueElements } from './util.js';

const RANDOM_QUANTITY = 10;

const imgFiltersForm = document.querySelector('.img-filters__form');
const defaultButton = document.querySelector('#filter-default');
const randomButton = document.querySelector('#filter-random');
const discussedButton = document.querySelector('#filter-discussed');

const createRandomFilter = (pictures) => {
  const copyPictures = pictures.slice();
  return getRandomUniqueElements(copyPictures).slice(0, RANDOM_QUANTITY);
};

const comparePhotoComments = (photoA, photoB) => {
  const rankA = photoA.comments.length;
  const rankB = photoB.comments.length;
  return rankB - rankA;
};

const createDefaultFilter = (pictures) => pictures.slice();

const createDiscussedFilter = (pictures) => {
  const copyPictures = pictures.slice();
  return copyPictures.sort(comparePhotoComments);
};

const removeActiveClass = () => {
  const currentButton = imgFiltersForm.querySelector('.img-filters__button--active');
  currentButton.classList.remove('img-filters__button--active');
};

const clearPicturesContainer = () => {
  const pictureItems = document.querySelectorAll('.picture');
  pictureItems.forEach((picture) => {
    picture.remove();
  });
};

const renderPicturesFilter = (photo) => {
  clearPicturesContainer();
  renderSimilarPhoto(photo);
};

const changeActiveButton = (target) => {
  if (target.matches('.img-filters__button')) {
    removeActiveClass();
    target.classList.add('img-filters__button--active');
  }
};

const getFilteredPicture = (pictures) => {
  const filterPictures = debounce((target) => {
    if (target === defaultButton) {
      renderPicturesFilter(createDefaultFilter(pictures));
    }
    if (target === randomButton) {
      renderPicturesFilter(createRandomFilter(pictures));
    }
    if (target === discussedButton) {
      renderPicturesFilter(createDiscussedFilter(pictures));
    }
  });

  const onFilterClick = (evt) => {
    changeActiveButton(evt.target);
    filterPictures(evt.target);
  };

  imgFiltersForm.addEventListener('click', debounce(onFilterClick));
};

export {getFilteredPicture};
