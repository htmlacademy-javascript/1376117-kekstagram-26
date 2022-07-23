import {renderSimilarPhoto} from './miniature.js';
import './full-size-img.js';
import './edit-form.js';
import './range.js';
import './image-scale.js';
import { openImgEdit, closeImgEdit } from './edit-form.js';
import {setPictureFormSubmit} from './form-validation.js';
import './messages.js';
import {getData} from './api.js';

openImgEdit();

getData ((photo) => {
  renderSimilarPhoto(photo);
});

setPictureFormSubmit(closeImgEdit);
