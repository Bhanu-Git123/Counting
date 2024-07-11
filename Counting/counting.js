let saveEL = document.getElementById("save-el");
let countEL = document.getElementById("count-el");

let count = 0;

function increment() {
  count += 1;
  countEL.innerText = count;
}

function decrement() {
  count = count - 1;
  countEL.innerText = count;
}

function save() {
  let countstr = count + " - ";
  saveEL.innerText += countstr;
  countEL.innerText = 0;
}
