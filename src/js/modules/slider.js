const slider = ({ container, slidesSelector, nextBtn, wrapper, inner, slideCounter, adaptiveSlideCounter920 }) => {
  if (document.documentElement.clientWidth <= 414) {
    return
  } else {
    const slider = document.querySelector(container);
    const slides = document.querySelectorAll(slidesSelector);
    const oneSlide = document.querySelector(slidesSelector);
    const next = document.querySelector(nextBtn);
    const slidesWrapper = document.querySelector(wrapper);
    const slidesField = document.querySelector(inner);
    const widthOneSlide = window.getComputedStyle(oneSlide).width;
    const marginRight = window.getComputedStyle(oneSlide).marginRight;
    let slideCount = slideCounter;
    let offset = 0;
    let slideIndex = 1;

    function deleteNotANunber(str) {
      return +str.replace(/\D/g, '');
    }

    if (document.documentElement.clientWidth <= 920) {
      slideCount = adaptiveSlideCounter920;
    }

    slidesField.style.width = 100 * slider.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '1s all';
    slidesWrapper.style.overflow = 'hidden';
    slidesWrapper.style.width = (slideCount * deleteNotANunber(widthOneSlide)) + (deleteNotANunber(marginRight) * (slideCount - 1)) + 'px';

    const counter = Math.round(slides.length / slideCount);

    next.addEventListener('click', () => {

      let num = (slideCount * deleteNotANunber(widthOneSlide)) + (deleteNotANunber(marginRight) * slideCount);

      if (slideIndex == counter) {
        offset = 0;
        slideIndex = 1;
      } else {
        offset += num;
        ++slideIndex;
      }
      slidesField.style.transform = `translateX(-${offset}px)`;
    })
  }
}

export default slider;