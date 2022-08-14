const tombol = document.getElementsByClassName('tombol')[0];
const body = document.getElementsByTagName('body')[0];

tombol.addEventListener('click', function () {
  //   body.style.backgroundColor = 'lightblue';
  //  body.setAttribute('class', 'biru-muda');
  body.classList.toggle('biru-muda');
});

const tombolR = document.createElement('button');
const textT = document.createTextNode('AcakWarna');
tombolR.appendChild(textT);
tombolR.setAttribute('type', 'button');
tombol.after(tombolR);
tombolR.addEventListener('click', function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});
