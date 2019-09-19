var mainNav = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

mainNav.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
  }
  else {
    mainNav.classList.add('main-nav--closed');
    mainNav.classList.remove('main-nav--opened');
  }
});
