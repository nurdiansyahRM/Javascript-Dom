// const tes = setTimeout(function () {
//   console.log('hello nurdiansyah');
// }, 5000);
// const tombol = document.getElementById('tombol');
// tombol.addEventListener('click', function () {
//   clearTimeout(tes);
//   console.log('selesai');
// });

// setInterval()
// const set = setInterval(() => {
//   console.log('ok');
// }, 1000);

// const tombol = document.getElementById('tombol');
// tombol.addEventListener('click', function () {
//   clearInterval(set);
//   console.log('selesai');
// });

//program hitung mundur
const tanggaltujuan = new Date('Aug 15, 2022 20:40:00').getTime();

const hitungmundur = setInterval(function () {
  const sekarang = new Date().getTime();
  const selisih = tanggaltujuan - sekarang;
  const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
  const jam = Math.floor((selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const menit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
  const detik = Math.floor((selisih % (1000 * 60)) / 1000);
  console.log('Waktu anda tinggal : ' + hari + ' hari ' + jam + ' jam ' + menit + ' menit ' + detik + ' detik ');

  const teks = document.getElementById('text');
  teks.innerHTML = 'Waktu anda tinggal : ' + hari + ' hari ' + jam + ' jam ' + menit + ' menit ' + detik + ' detik ';
  if (selisih < 0) {
    clearInterval(hitungmundur);
    teks.innerHTML = 'Waktu anda habis!!!!';
  }
}, 1000);

// const tombol = document.getElementById('tombol');
// tombol.addEventListener('click', () => {
//   clearInterval(hitungmundur);
//   console.log('selesai');
// });
