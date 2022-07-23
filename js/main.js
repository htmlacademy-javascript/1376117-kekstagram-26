import {renderSimilarPhoto} from './miniature.js';
import './full-size-img.js';
import './edit-form.js';
import './range.js';
import './image-scale.js';
import { openImgEdit, closeImgEdit } from './edit-form.js';
import {setPictureFormSubmit} from './form-validation.js';
import './messages.js';

openImgEdit();

fetch('https://26.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then ((photo) => {
    renderSimilarPhoto(photo);
  });

setPictureFormSubmit(closeImgEdit);
