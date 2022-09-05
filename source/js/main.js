import {initModals} from './modal/init-modal';

const aboutCompanyButton = document.querySelector('.about-company__button');
const aboutCompanyDescription = document.querySelector('.about-company__wrapper');
const innerHeaderButton = document.querySelector('.inner-header__button');
const footerAccordion = document.querySelectorAll('.footer-accordion');
const navigationToggle = document.querySelector('.navigation__toggle');
const contactsToggle = document.querySelector('.footer-contacts__toggle');
const navigation = document.querySelector('.navigation');
const footerContacts = document.querySelector('.footer-contacts');
const catalogTitle = document.querySelector('.catalog__wrapper').querySelector('h2');
const catalogTitleInitial = document.querySelector('.catalog__wrapper').querySelector('h2').textContent;
const headerButton = document.querySelector('.inner-header__button');
const headerButtonInitial = document.querySelector('.inner-header__button').textContent;
const mobileVersion = window.matchMedia('(max-width: 767px)');

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initModals();
  });
});

window.addEventListener('resize', () => {
  if (mobileVersion.matches) {
    catalogTitle.textContent = catalogTitle.dataset.mobileVersion;
    headerButton.textContent = headerButton.dataset.mobileVersion;
  } else {
    catalogTitle.textContent = catalogTitleInitial;
    headerButton.textContent = headerButtonInitial;
  }
});

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
