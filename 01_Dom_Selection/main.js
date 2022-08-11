// dom selection
// 1.getElementById
// document.getElementById() -> mengembalikan element
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = 'blue';
judul.innerHTML = 'NurdiansyahRM';

//document.getElementsByTagName(); ->  dia mengembalikan HTML COllection

const paragraf = document.getElementsByTagName('p');
for (var i = 0; i < paragraf.length; i++) {
  paragraf[i].style.backgroundColor = 'lightblue';
}

const heading = document.getElementsByTagName('h1');
for (var i = 0; i < heading.length; i++) {
  heading[i].style.fontSize = '50px';
}

// document.getElementsByClassName -> mengembalikan HTML Collection

const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'ini dirubah dari javascript';
