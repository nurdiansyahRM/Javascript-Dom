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

const sMerah = document.querySelector('input[name=sMerah]');
const shijau = document.querySelector('input[name=shijau]');
const sblue = document.querySelector('input[name=sblue]');
sMerah.addEventListener('input', function () {
  const r = sMerah.value;
  const g = shijau.value;
  const b = sblue.value;
  body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

shijau.addEventListener('input', function () {
  const r = sMerah.value;
  const g = shijau.value;
  const b = sblue.value;
  body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});
sblue.addEventListener('input', function () {
  const r = sMerah.value;
  const g = shijau.value;
  const b = sblue.value;
  body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

body.addEventListener('mousemove', function (event) {
  const xpos = Math.round((event.clientX / window.innerWidth) * 255);
  const ypos = Math.round((event.clientY / window.innerHeight) * 255);
  body.style.backgroundColor = 'rgb(' + xpos + ',' + ypos + ',100)';
});
