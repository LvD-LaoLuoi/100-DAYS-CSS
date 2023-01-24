document.querySelector('.menu-icon').addEventListener('click', function () {
  this.classList.toggle('active');
  Array.from(this.querySelectorAll('.no-animation')).map((e) => e.classList.remove('no-animation'));
});
