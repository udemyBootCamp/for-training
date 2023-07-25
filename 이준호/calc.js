document.getElementById("title").innerHTML = "JavaScript 계산기";

function calc() {
  const a = parseInt(document.getElementById("numInput1").value);
  const b = parseInt(document.getElementById("numInput2").value);
  const sum_val = a + b;
  const sub_val = a - b;
  const multi_val = a * b;
  const div_val = a / b;

  const add_result = document.getElementById("add_result");
  const sub_result = document.getElementById("add_result");
  const multi_result = document.getElementById("add_result");
  const div_result = document.getElementById("add_result");

  add_result.innerHTML = `<strong>${sum_val}</strong>`;
  sub_result.innerHTML = `<strong>${sub_val}</strong>`;
  multi_result.innerHTML = `<strong>${multi_val}</strong>`;
  div_result.innerHTML = `<strong>${div_val}</strong>`;
}
//이벤트 리스너 사용방법
const mybutton = document.getElementById("mybutton");
mybutton.addEventListener("click", calc);
