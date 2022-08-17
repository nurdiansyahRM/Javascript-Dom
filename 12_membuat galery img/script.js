const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thums = document.querySelectorAll('.thum');
container.addEventListener('click', function (e) {
  if (e.target.className == 'thum') {
    jumbo.src = e.target.src;
    jumbo.classList.add('fade');
    setTimeout(function () {
      jumbo.classList.remove('fade');
    }, 500);
    thums.forEach(function (thum) {
      if (thum.classList.contains('active')) {
        thum.classList.remove('active');
      }
    });
    e.target.classList.add('active');
  }
});
