//+ Ознайомся з документацією бібліотеки Vimeo плеєра.
//+ Додай бібліотеку як залежність проекту через npm.
//+ Ініціалізуй плеєр у файлі скрипта як це описано в секції pre-existing player, але враховуй, що у тебе плеєр доданий як npm пакет, а не через CDN.
//+ Вивчи документацію методу on() і почни відстежувати подію timeupdate - оновлення часу відтворення.
//+ Зберігай час відтворення у локальне сховище. Нехай ключем для сховища буде рядок "videoplayer-current-time".
//+ Під час перезавантаження сторінки скористайся методом setCurrentTime() з метою відновлення відтворення зі збереженої позиції.
//+ Додай до проекту бібліотеку lodash.throttle і зроби так, щоб час відтворення оновлювався у сховищі не частіше, ніж раз на секунду.
//+ Зберігай час відтворення у локальне сховище. Нехай ключем для сховища буде рядок "videoplayer-current-time".

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

let currentTime;
function saveTime() {
  localStorage.setItem('videoplayer-current-time', currentTime);
  console.log('Scroll handler call every 1000ms');
}

player.on('timeupdate', function (data) {
  currentTime = data.seconds;
  _.throttle(saveTime, 300);
});

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
