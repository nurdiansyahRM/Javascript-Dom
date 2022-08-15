//DOM manipulasi methodbaru

const h2baru = document.createElement('h2');
const text = document.createTextNode('Hello Nurdiansyah');
h2baru.appendChild(text);
//menentukan posisi h2 baru
const body = document.getElementsByTagName('body')[0];
const container = body.querySelector('div.container');
body.insertBefore(h2baru, container);

const label = document.createElement('label');
const textlabel = document.createTextNode('input');
label.setAttribute('class', 'masukan');

const sectionA = document.getElementById('a');
const button = sectionA.querySelector('button');

label.appendChild(textlabel);
sectionA.replaceChild(label, button);

const masukan = document.createElement('input');
sectionA.appendChild(masukan);

const sectionB = document.querySelector('section#b');
const paragraf = sectionB.querySelector('p');
sectionB.removeChild(paragraf);
