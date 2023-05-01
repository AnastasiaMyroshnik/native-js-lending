const showMore = (trigger, contentSelector, offsetNum) => {
  const triggerBtn = document.querySelector(trigger);
  const showedContent = document.querySelectorAll(contentSelector);
  let showIndex = 0;
  let offset = offsetNum;

  if (document.documentElement.clientWidth <= 414) {
    showedContent.forEach(item => {
      item.classList.add('hide');
    });
  
    const shovingFourItemsContent = (x) => {
      if (showIndex >= (showedContent.length - offset)) {
        triggerBtn.remove();
        for (let i = showIndex; i < showedContent.length; i++) {
          showedContent[i].classList.remove('hide');
        }
      } else {
        for (let i = x; i < x + offset; i++) {
          showedContent[i].classList.remove('hide');
        }
        showIndex = x + offset;
        return showIndex;
      }
    }
  
    shovingFourItemsContent(showIndex);
  
    const showMoreContent = () => {
      shovingFourItemsContent(showIndex);
    }
  
    triggerBtn.addEventListener('click', showMoreContent);
  }
};

export default showMore;