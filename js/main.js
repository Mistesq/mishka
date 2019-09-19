var mainNav = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var modal = document.querySelector('.modal');
var overlay = document.querySelector('.overlay');
var buyButton = document.querySelector('.featured__button');

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

buyButton.addEventListener('click', function(e) {
  e.preventDefault();
  modal.classList.add('modal--show');
  overlay.classList.add('overlay--show');
});

window.addEventListener('keydown', function(e) {
  if (e.keyCode === 27) {
    if (modal.classList.contains('modal--show')) {
      e.preventDefault();
      modal.classList.remove('modal--show');
      overlay.classList.remove('overlay--show');
    }
  }
});

window.addEventListener('click', function(e) {
  if (modal.classList.contains('modal--show')) {
    var target = e.target;
    if (target.classList.contains('overlay')) {
      modal.classList.remove('modal--show');
      overlay.classList.remove('overlay--show');
    }
  }
});
