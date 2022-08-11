// document.querySelector() -> element
const p4 = document.querySelector('#b p');
p4.style.color = 'green';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';

// document.querySelectorAll() memilih semua element

const p = document.querySelectorAll('p');
for (let i = 0; i < p.length; i++) {
  p[i].style.color = 'red';
}
