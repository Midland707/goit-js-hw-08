// Завдання 3 - форма зворотного зв'язку
// HTML містить розмітку форми. Напиши скрипт, який буде зберігати значення полів у локальне сховище, коли користувач щось друкує.

// <form class="feedback-form" autocomplete="off">
//   <label>
//     Email
//     <input type="email" name="email" autofocus />
//   </label>
//   <label>
//     Message
//     <textarea name="message" rows="8"></textarea>
//   </label>
//   <button type="submit">Submit</button>
// </form>

// Виконуй це завдання у файлах 03-feedback.html і 03-feedback.js. Розбий його на декілька підзавдань:

// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми.
// Нехай ключем для сховища буде рядок "feedback-form-state".
// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми.
// В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд.
// Для цього додай до проекту і використовуй бібліотеку lodash.throttle.

import throttle from 'lodash.throttle';

const fromForm = document.querySelector('.feedback-form');
const fromFormToInput = document.querySelector('.feedback-form label input');
const fromFormToTextarea = document.querySelector(
  '.feedback-form label textarea'
);
let storage = {};

function init() {
  const loadValues = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (loadValues) {
    if (loadValues.email) {
      fromFormToInput.value = loadValues.email;
    } else {
      fromFormToInput.value = '';
      loadValues.email = '';
    }
    if (loadValues.message) {
      fromFormToTextarea.value = loadValues.message;
    } else {
      fromFormToTextarea.value = '';
      loadValues.message = '';
    }
    storage = loadValues;
    localStorage.setItem('feedback-form-state', JSON.stringify(storage));
  }
}
const setLocalStorage = throttle(() => {
  localStorage.setItem('feedback-form-state', JSON.stringify(storage));
}, 500);

init();
fromFormToInput.addEventListener('input', () => {
  if (fromFormToInput.value) {
    storage.email = fromFormToInput.value;
  } else storage.email = '';
  setLocalStorage();
});

fromFormToTextarea.addEventListener('input', () => {
  if (fromFormToTextarea.value) {
    storage.message = fromFormToTextarea.value;
  } else storage.message = '';
  setLocalStorage();
});

fromForm.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  init();
  event.preventDefault();
  if (storage.email !== '') {
    event.currentTarget.reset();
    console.log(storage);
    storage = {};
    localStorage.removeItem('feedback-form-state');
  } else window.alert('Email не заповнено !!! Самознищення !!!!!');
}
