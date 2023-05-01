const maskMail = (mailSelector) => {
  const mailInputs = document.querySelectorAll(mailSelector);

  mailInputs.forEach(input => {
    input.addEventListener('input', function () {
      input.value = input.value.replace(/[а-яёії]/ig, '');
    })
  })
}

export default maskMail;