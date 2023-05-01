const showingLoginPopup = (trigger, loginPopupSelector) => {
  const loginIcon = document.querySelector(trigger);
  const loginPopup = document.querySelector(loginPopupSelector);

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
};

export default showingLoginPopup;