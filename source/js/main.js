const aboutCompanyButton = document.querySelector('.about-company__button');
const aboutCompanyDescription = document.querySelector('.about-company__description');
const innerHeaderButton = document.querySelector('.inner-header__button');
const openModalButton = document.querySelector('.page-header__button');
const modal = document.querySelector('.modal');
const closeModalButton = document.querySelector('.modal__close-button');
const modalOverlay = document.querySelector('.modal__overlay');
const body = document.querySelector('.page-body');
const inputName = document.getElementById('modal-form-name');
const footerAccordion = document.querySelectorAll('.footer-accordion');
const navigationToggle = document.querySelector('.navigation__toggle');
const contactsToggle = document.querySelector('.footer-contacts__toggle');
const navigation = document.querySelector('.navigation');
const footerContacts = document.querySelector('.footer-contacts');

// Развернуть описание в блоке "О компании"

aboutCompanyButton.addEventListener('click', () => {

  if (aboutCompanyDescription.classList.contains('is-expand')) {
    aboutCompanyDescription.classList.remove('is-expand');
  } else {
    aboutCompanyDescription.classList.add('is-expand');
  }
});

// Плавный скролл

function getSmoothScrolling(element) {
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: 'smooth',
  });
}

innerHeaderButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  getSmoothScrolling(document.getElementById('feedback'));
});

// Попап обратной связи

function openModal() {
  body.classList.add('is-locked');
  modal.classList.add('is-opened');
  inputName.focus();
}

function closeModal() {
  body.classList.remove('is-locked');
  modal.classList.remove('is-opened');
}

openModalButton.addEventListener('click', () => {
  openModal();
});

closeModalButton.addEventListener('click', () => {
  closeModal();
});

modalOverlay.addEventListener('click', () => {
  body.classList.remove('is-locked');
  modal.classList.remove('is-opened');
});

// Аккордеон

navigation.classList.remove('is-nojs');
footerContacts.classList.remove('is-nojs');

function openAccordeon(element) {
  element.classList.remove('is-closed');
  element.classList.add('is-opened');
}

function closeAccordeon(element) {
  element.classList.remove('is-opened');
  element.classList.add('is-closed');
}

navigationToggle.addEventListener('click', () => {
  if (navigation.classList.contains('is-closed')) {
    footerAccordion.forEach((element) => closeAccordeon(element));
    openAccordeon(navigation);
  } else {
    closeAccordeon(navigation);
  }
});

contactsToggle.addEventListener('click', () => {
  if (footerContacts.classList.contains('is-closed')) {
    footerAccordion.forEach((element) => closeAccordeon(element));
    openAccordeon(footerContacts);
  } else {
    closeAccordeon(footerContacts);
  }
});

// closeModalButton.addEventListener('click', () => {
//   closeModal();
// });

// // ---------------------------------

// window.addEventListener('DOMContentLoaded', () => {

//   // Utils
//   // ---------------------------------

//   iosVhFix();

//   // Modules
//   // ---------------------------------

//   // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
//   // в load следует добавить скрипты, не участвующие в работе первого экрана
//   window.addEventListener('load', () => {
//     initModals();
//   });
// });

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
