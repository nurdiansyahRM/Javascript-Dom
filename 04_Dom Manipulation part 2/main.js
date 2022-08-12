//DOM Manipulation
//buat elemen baru

const pBaru = document.createElement('p');
const textpBaru = document.createTextNode('paragraf baru');
//simpan tulisan ke dalam paragraf
pBaru.appendChild(textpBaru);
// simpan pBaru diakhir secttion A;
const sectionA = document.querySelector('#a');
sectionA.appendChild(pBaru);

const list = document.createElement('li');
const text = document.createTextNode('Item baru');
list.appendChild(text);
const ul = document.querySelector('section#b ul');
const list_2 = ul.querySelector('li:nth-child(2)');
ul.insertBefore(list, list_2);

const link = document.querySelector('a');
sectionA.removeChild(link);

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
const h2baru = document.createElement('h2');
const h2text = document.createTextNode('Judul baru');
h2baru.appendChild(h2text);
sectionB.replaceChild(h2baru, p4);

h2baru.style.backgroundColor = 'green';
pBaru.style.backgroundColor = 'orange';
list.style.backgroundColor = 'red';
