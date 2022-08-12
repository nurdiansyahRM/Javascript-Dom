// Element.innerHTML = 'string'

// const judul = document.getElementById('judul');
// judul.innerHTML = 'Nurdiansyah RM';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'Work Hard';

// Element.style.propertyCss
// const judul = document.querySelector('#judul');
// judul.style.backgroundColor = 'red';

// Element.setattribute

// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'heading');

// const a = document.querySelector('section#a a');
// a.setAttribute('class', 'link');

// const b = document.querySelector('section#b ul li:nth-child(2)');
// b.setAttribute('id', 'list');
// const b = document.querySelector('section#b');
// b.getAttribute('id');

const p2 = document.querySelector('.p2');
p2.classList.add('p3');
p2.classList.add('p4');

if (p2.classList.contains('p2')) {
  p2.classList.toggle('bg');
}

if (p2.classList.contains('p4')) {
  p2.classList.replace('p4', 'p5');
}
