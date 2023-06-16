document.getElementById("title").innerHTML = "JavaScript 계산기";

function calc() {
  let a = parseInt(document.getElementById("numInput1").value);
  let b = parseInt(document.getElementById("numInput2").value);
  let sum_val = a + b;
  let sub_val = a - b;
  let multi_val = a * b;
  let div_val = a / b;
  console.log(
    `덧셈 결과: ${sum_val}, 뺄셈 결과: ${sub_val}, 곱셈 결과: ${multi_val}, 나눗셈 결과: ${div_val}`
  );
  const add_result = document.getElementById("add_result");
  add_result.innerHTML = `<strong>${sum_val}</strong>`;
  sub_result.innerHTML = `<strong>${sub_val}</strong>`;
  multi_result.innerHTML = `<strong>${multi_val}</strong>`;
  div_result.innerHTML = `<strong>${div_val}</strong>`;
}
