const accordion = ({ triggerElem, spanClass, spanActiveClass, questionActiveClass, answerActiveClass }) => {
  const triggers = document.querySelectorAll(triggerElem);

  triggers.forEach(trigger => {
    trigger.addEventListener('click', function () {
      const span = trigger.querySelectorAll(spanClass);
      span.forEach(item => item.classList.toggle(spanActiveClass));
      this.classList.toggle(questionActiveClass);
      this.nextElementSibling.classList.toggle(answerActiveClass);
    })
  })
}

export default accordion;