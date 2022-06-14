// Функция, возвращающая случайное целое число.
// Источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const getRandomIntInclusive = (min, max) => {
  if (min >= 0 && max >= 0) {
    if( min < max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    else if (min > max) {
      const minValue = max;
      max = min;
      min = minValue;
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    else {
      return min;
    }
  }
  else {
    return 'Number must be positive';
  }
};

getRandomIntInclusive(1,5);

// Функция для проверки максимальной длины строки
// Источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/length

const checkStringLength = (stringToCheck, maxLength) => stringToCheck.length <= maxLength;

checkStringLength('Keks', 10);

const descriptions = [
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

const authorNames = [
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

const commentBank = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const getRandomArrayElements = (elements) => elements[getRandomIntInclusive(0, elements.length - 1)];

const createPhotoInfo = (id, description, comments) =>
  {
    id,
    url: 'photos/' + id + '.jpg',
    description,
    likes: getRandomIntInclusive(15,200),
    comments,
  };

const makeComment = (id) => {
  return {
    id,
    avatar: 'img/avatar-' + getRandomIntInclusive(1,6) + '.svg',
    message: getRandomArrayElements(commentBank),
    name: getRandomArrayElements(authorNames),
  };
};

const makePhotos = (count) => {
  const photos = [];
  for (let i = 0; i <= count - 1; i++) {
    const messages = [];
    messages.push(makeComment(i + 1), makeComment(i + 2));
    photos.push(createPhotoInfo((i + 1), descriptions[i], messages));
  };
  return photos;
};
const maxPhotoCount = 25;
makePhotos(maxPhotoCount);

const similarPhotoInfo = Array.from({length: 25}, createPhotoInfo);

console.log(similarPhotoInfo);

