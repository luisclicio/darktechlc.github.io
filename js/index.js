const navBar = document.querySelector('div.bar');
const btnMenu = document.querySelector('#btn-menu');
const menu = document.querySelector('#menu');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('main > section');
const btnToTop = document.querySelector('#btn-to-top');

const handleMenu = element => {
  element.addEventListener('click', () => {
    btnMenu.classList.toggle('visible');
    menu.classList.toggle('visible');
  });
}

const activeLinksWithClicked = link => {
  link.addEventListener('click', () => {
    navLinks.forEach(link => link.classList.remove('active'));
    link.classList.toggle('active');
  });
}

navLinks.forEach(link => {
  activeLinksWithClicked(link);
  handleMenu(link);
});

handleMenu(btnMenu);

window.addEventListener('scroll', () => {
  const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

  // Actions in navbar
  if (scrollPosition > 20) navBar.classList.add('visible');
  else navBar.classList.remove('visible');

  // Actions in button to top
  if (scrollPosition > 140) btnToTop.classList.add('visible');
  else {
    btnToTop.classList.remove('visible');
    navLinks.forEach(link => link.classList.remove('active'));
  }

  // ScrollSpy
  sections.forEach(section => {
    if (section.offsetTop <= scrollPosition) {
      const { id } = section;
      navLinks.forEach(link => link.classList.remove('active'));
      document.querySelector(`nav a[href*=${id}]`).classList.add('active');
    }
  });
});