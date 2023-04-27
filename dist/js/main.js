document.addEventListener( 'DOMContentLoaded', () => {

  // Всплывающее окно
  const loginIcon = document.getElementById('login-icon');
  const loginPopup = document.querySelector('.popup-header');

  const showLoginPopup = () => {
    loginPopup.classList.add('popup-header--active');
    loginPopup.addEventListener('mouseover', showLoginPopup);
    loginPopup.addEventListener('mouseout', hideLoginPopup);
  }

  const hideLoginPopup = () => {
    loginPopup.classList.remove('popup-header--active');
  }

  loginIcon.addEventListener('mouseover', showLoginPopup);
  loginIcon.addEventListener('mouseout', hideLoginPopup);

  // Бургер меню
  const burger = document.querySelector('.header__burger');
  const mobileBurger = document.querySelector('.main-screen__mobile-burger');
  const btn = document.querySelector('.main-screen__btn');
  const burgerMenu = document.querySelector('.burger-menu');
  const title = document.querySelector('.main-screen__title');

  const toggleBurgerMenu = () => {

  burger.classList.toggle('header__burger--active');
  burgerMenu.classList.toggle('burger-menu--active');
  title.classList.toggle('main-screen__title--hidden');

  }
  burger.addEventListener('click', toggleBurgerMenu);
  mobileBurger.addEventListener('click', toggleBurgerMenu);
  btn.addEventListener('click', toggleBurgerMenu);

  // Modal
  const modal = () => {
    const modalOpenedBtns = document.querySelectorAll('[data-login]');
    const modal = document.querySelector('[data-modal]');
    const overflow = document.querySelector('.overflowing')

    const openModal = () => {
      modal.classList.remove('hide');
      overflow.classList.remove('hide');
      modal.classList.add('show');
      overflow.classList.add('show');
      document.body.style.overflow = 'hidden';
    }
    const closeModal = () => {
      modal.classList.remove('show');
      overflow.classList.remove('show');
      modal.classList.add('hide');
      overflow.classList.add('hide');
      document.body.style.overflow = '';
    }

    modalOpenedBtns.forEach(btn => {
      btn.addEventListener('click', openModal)
    })
    // modalOpenedBtn.addEventListener('click', openModal);

    document.addEventListener('click', (e) => {
      if (e.target.getAttribute('data-close') == '' || e.target === overflow) {
        closeModal();
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.code === 'Escape' && modal.classList.contains('show')) {
        closeModal();
      }
    })
  };

  modal();

  // Slider
  const slider = ({container, slidesSelector, nextBtn, wrapper, inner, slideCounter, adaptiveSlideCounter920}) => {
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

  // Accordion
  const accordion = () => {
    const triggers = document.querySelectorAll('.questions__question');

    triggers.forEach(trigger => {
      trigger.addEventListener('click', function() {
        console.log(this.lastChild);
        this.lastChild.classList.toggle('questions__question-plus--active');
        this.classList.toggle('questions__question--active');
        this.nextElementSibling.classList.toggle('questions__answer--active');
      })
    })
  }

  accordion();

  const sendForm = () => {
    const form = document.querySelector('.feed-form');

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);

        const jsonData = JSON.stringify(Object.fromEntries(formData.entries()));

        fetch('server.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: jsonData
        })
        .then(data => data.text())
        .then (data => 
          {console.log(data);
          showModal();
          })
        .catch(() => {
          console.log('error');
        })
        .finally(() => {
          form.reset();
        })
      });

      const showModal = () => {
        const modal = document.querySelector('[data-modal-thanks]');
        const overflow = document.querySelector('.overflowing');
        
        document.body.style.overflow = 'hidden';
        modal.classList.remove('hide');
        overflow.classList.remove('hide');
        modal.classList.add('show');
        overflow.classList.add('show');
        
        
        const closeModal = () => {
          modal.classList.remove('show');
          overflow.classList.remove('show');
          modal.classList.add('hide');
          overflow.classList.add('hide');
          document.body.style.overflow = '';
        }
        
        setTimeout(closeModal, 6000);

        document.addEventListener('click', (e) => {
          if (e.target.getAttribute('data-close') == '' || e.target === overflow) {
            closeModal();
          }
        });
        document.addEventListener('keydown', (e) => {
          if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal();
          }
        })
      }
  }

  sendForm();

  // sale mobile
  const showMore = () => {
    const triggerBtn = document.querySelector('.sale__slider-mobile-btn');
    const showedContent = document.querySelectorAll('.sale__slider-item');
    let showIndex = 0;
    let offset = 2;

    showedContent.forEach(item => {
      item.classList.add('hide')
    });

    const shovingFourItemsContent = (x) => {
      for (let i = x; i < x + offset; i++) {
        showedContent[i].classList.remove('hide');
      }
      showIndex = x + offset;
      return showIndex;
    }

    shovingFourItemsContent(showIndex);
    console.log(`showIndex first time: ${showIndex}`);

    const showMoreContent = () => {
      shovingFourItemsContent(showIndex);
      console.log(`showIndex is ${showIndex}`);
      console.log(`showedContent.length is ${showedContent.length}`);
      if (showIndex >= (showedContent.length - offset)) {
        triggerBtn.remove();
        shovingFourItemsContent(showIndex);
      }
    }

    triggerBtn.addEventListener('click', showMoreContent);
  };

  showMore();
})