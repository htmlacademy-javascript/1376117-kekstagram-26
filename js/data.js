import { getRandomIntInclusive } from './util';

const DESCRIPTIONS = [
  'Отель около моря',
  'Отличный указатель',
  'Море',
  'Девушка с фотоаппаратом',
  'Блюдо: "Спа процедуры"',
  'Черный автомобиль',
  'Клубничка',
  'Витаминки!',
  'Улыбаемся и машем',
  'Обувница',
  'Пляж',
  'Ауди',
  'Здоровое питание!',
  'Суши кот!',
  'Комфорт - превыше всего',
  'Завораживает!',
  'Отличная музыка!',
  'Классика',
  'Технологичные домашние тапочки!',
  'Пальмы',
  'Вкуснее ничего не ел(а)',
  'Закат',
  'Крабик',
  'Концерт',
  'Внедорожник',
];

const AUTHOR_NAMES = [
  'Павел',
  'Вова',
  'Катя',
  'Маша',
  'Сергей',
  'Анна',
  'Вероника',
  'Роман',
  'Стас',
  'Антон',
  'Лиза',
  'Яна',
  'Кристина',
  'Валентин',
  'Валентина',
  'Женя',
  'Саша',
  'Петя',
  'Алексей',
  'Оля',
  'Андрей',
  'Михаил',
  'Алена',
  'Олеся',
  'Даша',
];

const COMMENTS_BANK = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const getRandomArrayElements = (elements) => elements[getRandomIntInclusive(0, elements.length - 1)];

const createPhotoInfo = (id, description, comments) => ({
  id,
  url: `photos/${id}.jpg`,
  description,
  likes: getRandomIntInclusive(15,200),
  comments,
});

const makeComment = (id) => ({
  id,
  avatar: `img/avatar-${getRandomIntInclusive(1,6)}.svg`,
  message: getRandomArrayElements(COMMENTS_BANK),
  name: getRandomArrayElements(AUTHOR_NAMES),
});

const makePhotos = (count) => {
  const photos = [];
  for (let i = 0; i <= count - 1; i++) {
    const messages = [];
    for (let j = 1; j <= getRandomIntInclusive(1, 10); j++) {
      messages.push(makeComment(j));
    }
    photos.push(createPhotoInfo((i + 1), DESCRIPTIONS[i], messages));
  }
  return photos;
};

export {makePhotos};
