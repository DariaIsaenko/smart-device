import {initModals} from './modal/init-modal';

const aboutCompanyButton = document.querySelector('.about-company__button');
const aboutCompanyDescription = document.querySelector('.about-company__wrapper');
const innerHeaderButton = document.querySelector('.inner-header__button');
const footerAccordion = document.querySelectorAll('.footer-accordion');
const navigationTab = document.querySelector('.navigation__wrapper').querySelector('h2');
const navigationToggle = document.querySelector('.navigation__toggle');
const contactsToggle = document.querySelector('.footer-contacts__toggle');
const navigation = document.querySelector('.navigation');
const footerContacts = document.querySelector('.footer-contacts');
const footerContactsTab = document.querySelector('.footer-contacts__wrapper').querySelector('h2');
const catalogTitle = document.querySelector('.catalog__wrapper').querySelector('h2');
const catalogTitleInitial = document.querySelector('.catalog__wrapper').querySelector('h2').textContent;
const headerButton = document.querySelector('.inner-header__button');
const headerButtonInitial = document.querySelector('.inner-header__button').textContent;
const mobileVersion = window.matchMedia('(max-width: 767px)');
const tabletVersion = window.matchMedia('(max-width: 1023px)');

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initModals();
    showImgs();
  });
});

function showImgs() {
  document.querySelectorAll('.card__img').forEach((element) => showImg(element));
}

function showImg(element) {
  if (mobileVersion.matches) {
    element.querySelector('img').src = element.querySelector('img').dataset.srcMobile;
    element.querySelector('img').srcset = element.querySelector('img').dataset.srcsetMobile;
    element.querySelector('source').srcset = element.querySelector('source').dataset.srcsetMobile;
  } else if (tabletVersion.matches) {
    element.querySelector('img').src = element.querySelector('img').dataset.srcTablet;
    element.querySelector('img').srcset = element.querySelector('img').dataset.srcsetTablet;
    element.querySelector('source').srcset = element.querySelector('source').dataset.srcsetTablet;
  } else {
    element.querySelector('img').src = element.querySelector('img').dataset.srcDesktop;
    element.querySelector('img').srcset = element.querySelector('img').dataset.srcsetDesktop;
    element.querySelector('source').srcset = element.querySelector('source').dataset.srcsetDesktop;
  }
}

window.addEventListener('resize', () => {
  showImgs();

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

function openTabAccordeon(element) {
  element.classList.remove('is-closed');
  element.classList.add('is-opened');
}

function closeTabAccordeon(element) {
  element.classList.remove('is-opened');
  element.classList.add('is-closed');
}

function openOneTab(element) {
  if (element.classList.contains('is-closed')) {
    footerAccordion.forEach((accordionElement) => closeTabAccordeon(accordionElement));
    openTabAccordeon(element);
  } else {
    closeTabAccordeon(element);
  }
}

navigationToggle.addEventListener('click', () => {
  openOneTab(navigation);
});

navigationTab.addEventListener('click', () => {
  openOneTab(navigation);
});

contactsToggle.addEventListener('click', () => {
  openOneTab(footerContacts);
});

footerContactsTab.addEventListener('click', () => {
  openOneTab(footerContacts);
});
