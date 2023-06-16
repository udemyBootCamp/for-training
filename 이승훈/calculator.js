function calculate(val1, val2, type) {
  switch (type) {
    case "더하기":
      return val1 + val2;

    case "빼기":
      return val1 - val2;

    case "곱하기":
      return val1 * val2;

    case "나누기":
      return val1 / val2;
  }
}

const one = document.getElementById("value_one");
const two = document.getElementById("value_two");
const calc = document.getElementById("selector");

(() => {
  const main = document.getElementById("main");
  const button = document.createElement("button");

  function renderResult(result) {
    const ans = document.getElementById("result");

    if (!ans) {
      const ans = document.createElement("h3");
      ans.setAttribute("id", "result");
      ans.innerText = `결과값 : ${result}`;

      main.appendChild(ans);
    } else {
      const ans = document.getElementById("result");
      ans.innerText = `결과값 : ${result}`;
    }
  }

  button.innerText = "계산";
  button.addEventListener("click", () => {
    const val1 = parseInt(one.value);
    const val2 = parseInt(two.value);
    const num = calculate(val1, val2, calc.value);
    renderResult(num);
  });

  main.appendChild(button);
})();
