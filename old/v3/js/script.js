const body = document.body;
const btnChangeTheme = document.querySelector('#btn-change-theme');
const btnTop = document.querySelector('#btn-top');

const hour = new Date().getHours();
const colorOne = '#08090a';
const colorTwo = '#dee4e8';

let theme;

function changeTheme() {
  function setColorProperty(element, colorMain, colorMainNd) {
    element.style.setProperty('--color-main', colorMain);
    element.style.setProperty('--color-main-nd', colorMainNd);
  }

  if (theme === 'light') {
    setColorProperty(body, colorOne, colorTwo);
    theme = 'dark';
  } else {
    setColorProperty(body, colorTwo, colorOne);
    theme = 'light';
  }
};

(function setThemeByHour() {
  if (hour >= 6 && hour < 18) {
    theme = 'dark';
  } else {
    theme = 'light';
  }
  changeTheme();
})();

btnChangeTheme.addEventListener('click', changeTheme);

body.addEventListener('keypress', (e) => {
  if (e.key === 'm' || e.key === 'M') changeTheme();
});

window.onscroll = function () {
  if (document.body.scrollTop > 140 || document.documentElement.scrollTop > 140) {
    btnTop.style.display = 'block';
  } else {
    btnTop.style.display = 'none';
  }
}
