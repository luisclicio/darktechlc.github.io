const body = document.body;
const btnChangeTheme = document.querySelector('#btn-change-theme');

const hour = new Date().getHours();

let theme;

function changeTheme() {
  if (theme === 'light') {
    body.style.setProperty('--color-main', '#08090a');
    body.style.setProperty('--color-main-nd', '#dee4e8');
    theme = 'dark';
  } else {
    body.style.setProperty('--color-main', '#dee4e8');
    body.style.setProperty('--color-main-nd', '#08090a');
    theme = 'light';
  }
}

function setThemeByHour() {
  if (hour >= 6 && hour < 18) {
    theme = 'dark';
  } else {
    theme = 'light';
  }
  changeTheme()
}

setThemeByHour();

btnChangeTheme.addEventListener('click', changeTheme);
