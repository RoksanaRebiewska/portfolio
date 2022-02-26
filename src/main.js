// hamburger menu
hamburgerBar = document.getElementById('hamburger--bar');
navMobile = document.querySelector('nav');

hamburgerBar.addEventListener('click', () => {
  hamburgerBar.classList.toggle('open');
  navMobile.classList.toggle('open');
});

navMobile.addEventListener('click', () => {
  hamburgerBar.classList.toggle('open');
  navMobile.classList.toggle('open');
});

// begin button
beginButton = document.querySelector('.btn--begin');
beginButton.addEventListener('click', () => {
  beginButton.classList.add('no-view');
});

//buttons in Portfolio section
const gridButton = document.getElementById('grid-view-btn');
const listButton = document.getElementById('list-view-btn');
const portfolio = document.querySelector('.section__portfolio');

const toggleButtonVisibility = () => {
  gridButton.classList.toggle('non-active');
  listButton.classList.toggle('non-active');
};

gridButton.addEventListener('click', () => {
  if (gridButton.classList.contains('non-active')) {
    toggleButtonVisibility();

    portfolio.classList.add('grid');
    portfolio.classList.remove('list');
  }
});

listButton.addEventListener('click', () => {
  if (listButton.classList.contains('non-active')) {
    toggleButtonVisibility();

    portfolio.classList.add('list');
    portfolio.classList.remove('grid');
  }
});
