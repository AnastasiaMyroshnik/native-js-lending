const burgerMenu = ({burgerSelector, menuSelector, titleSelector, burgerActiveClass, menuActiveClass, titleActiveClass}) => {
  const burger = document.querySelector(burgerSelector);
  const burgerMenu = document.querySelector(menuSelector);
  const title = document.querySelector(titleSelector);

  const toggleBurgerMenu = () => {

    burger.classList.toggle(burgerActiveClass);
    burgerMenu.classList.toggle(menuActiveClass);
    title.classList.toggle(titleActiveClass);

  }
  burger.addEventListener('click', toggleBurgerMenu);
};

export default burgerMenu;