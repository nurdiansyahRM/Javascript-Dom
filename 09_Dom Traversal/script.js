// const tutup = document.querySelector('.close');
// const card = document.querySelector('.card');
// tutup.addEventListener('click', function () {
//   const container = document.querySelector('.container');
//   container.removeChild(card);
// });

const tutup = document.querySelectorAll('.close');
// for (let i = 0; i < tutup.length; i++) {
//   tutup[i].addEventListener('click', function (event) {
//     event.target.parentElement.remove(parent);
//   });
// }

tutup.forEach(function (el) {
  el.addEventListener('click', (e) => {
    e.target.parentElement.remove(parent);
  });
});

const nama = document.querySelector('.nama');
console.log(nama.nextElementSibling.nextElementSibling);
