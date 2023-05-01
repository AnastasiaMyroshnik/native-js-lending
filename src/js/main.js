import showingLoginPopup from './modules/showingLoginPopup';
import burgerMenu from './modules/burgerMenu';
import modal from './modules/modal';
import slider from './modules/slider';
import accordion from './modules/accordion';
import sendForm from './modules/sendForm';
import showMore from './modules/showMore';
import maskPhoneNumber from './modules/maskPhoneNumber';
import maskMail from './modules/maskMail';
import smoothScroll from './modules/smoothScroll';

document.addEventListener( 'DOMContentLoaded', () => {
  showingLoginPopup('#login-icon', '.popup-header');
  burgerMenu({
    burgerSelector: '.header__burger',
    menuSelector: '.burger-menu', 
    titleSelector: '.main-screen__title', 
    burgerActiveClass: 'header__burger--active', 
    menuActiveClass: 'burger-menu--active', 
    titleActiveClass: 'main-screen__title--hidden'
  });
  burgerMenu({
    burgerSelector: '.main-screen__mobile-burger',
    menuSelector: '.burger-menu', 
    titleSelector: '.main-screen__title', 
    burgerActiveClass: '.main-screen__mobile-burger--active', 
    menuActiveClass: 'burger-menu--active', 
    titleActiveClass: 'main-screen__title--hidden'
  });
  modal('[data-login]', '[data-modal]', '.overflowing');
  slider({
    container: '.sale__slider', 
    slidesSelector: '.sale__slider-item', 
    nextBtn: '.sale__slider-btn', 
    wrapper: '.sale__slider-wrapper', 
    inner: '.sale__slider-inner', 
    slideCounter: 3,
    adaptiveSlideCounter920: 2
  });
  slider({
    container: '.reviews__slider', 
    slidesSelector: '.reviews__slider-item', 
    nextBtn: '.reviews__slider-btn', 
    wrapper: '.reviews__slider-wrapper', 
    inner: '.reviews__slider-inner', 
    slideCounter: 2,
    adaptiveSlideCounter920: 1
  });
  accordion({
    triggerElem: '.questions__question',
    spanClass: '.questions__question-plus',
    spanActiveClass: 'questions__question-plus--active',
    questionActiveClass: 'questions__question--active',
    answerActiveClass: 'questions__answer--active',
  });
  accordion({
    triggerElem: '.footer__component-title',
    spanClass: '.footer__component-arrow',
    spanActiveClass: 'footer__component-arrow--active',
    questionActiveClass: 'footer__component-title--active',
    answerActiveClass: 'footer__component-item--active',
  });
  sendForm('.feed-form', '[data-modal-thanks]', '.overflowing');
  showMore('.sale__slider-mobile-btn', '.sale__slider-item', 4);
  maskPhoneNumber('[name="phone"]');
  maskMail('[name="email"]');
  smoothScroll('#goHome', 0.25);
})