function getcomputer() {
  const comp = Math.random();

  if (comp < 0.34) return 'gajah';
  if (comp >= 0.34 && comp < 0.64) return 'orang';
  return 'semut';
}

function gethasil(comp, player) {
  if (player == comp) return 'Seri!';
  if (player == 'gajah') return comp == 'orang' ? 'Menang!' : 'Kalah!';
  if (player == 'orang') return comp == 'gajah' ? 'Kalah!' : 'Menang!';
  if (player == 'semut') return comp == 'orang' ? 'Kalah!' : 'Menang!';
}

function putar() {
  const imgcomputer = document.querySelector('.img-computer');
  const gambar = ['gajah', 'semut', 'orang'];
  let i = 0;
  const waktuaawal = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuaawal > 1000) {
      clearInterval;
      return;
    }
    imgcomputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
    if (i == gambar.length) i = 0;
  }, 100);
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function (pil) {
  pil.addEventListener('click', function () {
    const pilihancomp = getcomputer();
    const pilihanplayer = pil.className;
    const hasil = gethasil(pilihancomp, pilihanplayer);

    putar();
    setTimeout(function () {
      const imgcomputer = document.querySelector('.img-computer');
      imgcomputer.setAttribute('src', 'img/' + pilihancomp + '.png');

      const info = document.querySelector('.info');
      info.innerHTML = hasil;
    }, 1000);
  });
});

// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function () {
//   const pilihancomp = getcomputer();
//   const pilihanplayer = pGajah.className;
//   const hasil = gethasil(pilihancomp, pilihanplayer);

//   const imgcomputer = document.querySelector('.img-computer');
//   imgcomputer.setAttribute('src', 'img/' + pilihancomp + '.png');

//   const info = document.querySelector('.info');
//   info.innerHTML = hasil;
// });
// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function () {
//   const pilihancomp = getcomputer();
//   const pilihanplayer = pOrang.className;
//   const hasil = gethasil(pilihancomp, pilihanplayer);

//   const imgcomputer = document.querySelector('.img-computer');
//   imgcomputer.setAttribute('src', 'img/' + pilihancomp + '.png');

//   const info = document.querySelector('.info');
//   info.innerHTML = hasil;
// });
// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function () {
//   const pilihancomp = getcomputer();
//   const pilihanplayer = pSemut.className;
//   const hasil = gethasil(pilihancomp, pilihanplayer);

//   const imgcomputer = document.querySelector('.img-computer');
//   imgcomputer.setAttribute('src', 'img/' + pilihancomp + '.png');

//   const info = document.querySelector('.info');
//   info.innerHTML = hasil;
// });
