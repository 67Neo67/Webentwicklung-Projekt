let box = document.getElementById('box');
box.addEventListener('click', divHi); // bubbling
// box.addEventListener("click", divHi, true); // capturing
function divHi(event) {
  console.log('div: Hi');
  console.log(event.currentTarget);
  console.log(event.target);
}
let button = document.getElementsByTagName('button')[0];
button.addEventListener('click', buttonHi);
function buttonHi(event) {
  console.log('button: Hi');
  // event.stopPropagation();
}