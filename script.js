const slider = document.querySelector('.slider-container');
const buttonRight = document.querySelector('.button-right');
const buttonLeft = document.querySelector('.button-left');
const pictures = Array.from(slider.querySelectorAll('img'));
const pictureCount = pictures.length;

let currentPictureIndex = 0;

// Обработка нажания на кнопки
function onDocumentKeydown (evt) {
    if (evt.keyCode === 39) {
        OnRightButtonClick();
      } else if (evt.keyCode === 37){
      OnLeftButtonClick();
    }
  };

  document.addEventListener('keydown', onDocumentKeydown);

// Добавляем обработчики на кнопки
buttonRight.addEventListener('click', OnRightButtonClick);
buttonLeft.addEventListener('click', OnLeftButtonClick);

function OnRightButtonClick() {
    currentPictureIndex = (currentPictureIndex + 1) % pictureCount;
    switchPicture();
}

function OnLeftButtonClick() {
    currentPictureIndex = (currentPictureIndex - 1 + pictureCount) % pictureCount;
    switchPicture();
}

// Функция переключения картинок в контейнере
function switchPicture() {
    pictures.forEach((picture, index) => {
        if (index === currentPictureIndex) {
            picture.style.display = 'block';
        } else {
            picture.style.display = 'none';
        }
    });
}

// Инициализация
switchPicture();
