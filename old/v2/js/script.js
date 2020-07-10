const topBar = document.querySelector('.topbar');

window.onscroll = function funcScroll() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    topBar.classList.add('scroll');
  } else {
    topBar.classList.remove('scroll');
  }
}
