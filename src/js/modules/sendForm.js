const sendForm = (formSelector, modalSelector, overflowSelector) => {
  const form = document.querySelector(formSelector);

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
      .then(data => {
        console.log(data);
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
    const modal = document.querySelector(modalSelector);
    const overflow = document.querySelector(overflowSelector);

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

export default sendForm;