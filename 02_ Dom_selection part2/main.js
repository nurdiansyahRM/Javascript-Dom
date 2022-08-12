// document.querySelector() -> element
const p4 = document.querySelector('#b p');
p4.style.color = 'green';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';

// document.querySelectorAll() memilih semua element -> node list
const SectionB = document.getElementById('b');
const p = SectionB.querySelectorAll('p')[0];
p.style.backgroundColor = 'red';
