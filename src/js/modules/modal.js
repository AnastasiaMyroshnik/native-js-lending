const modal = (triggers, modalSelector, overflowSelector) => {
  const modalOpenedBtns = document.querySelectorAll(triggers);
  const modal = document.querySelector(modalSelector);
  const overflow = document.querySelector(overflowSelector)

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

export default modal;