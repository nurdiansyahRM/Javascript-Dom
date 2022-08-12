// Even handler
const p3 = document.querySelector('.p3');
const p2 = document.querySelector('.p2');
function ubahWarnap2() {
  p2.style.backgroundColor = 'red';
}
function ubahWarnap3() {
  p3.style.backgroundColor = 'lightblue';
}
p2.onclick = ubahWarnap2;
p3.onclick = ubahWarnap3;

const p4 = document.querySelector('.p4');
p4.addEventListener('click', function () {
  const list = document.createElement('li');
  const text = document.createTextNode('item baru');
  list.appendChild(text);
  const ul = document.querySelector('section#b ul');
  ul.appendChild(list);
  list.style.backgroundColor = 'lightblue';
});
