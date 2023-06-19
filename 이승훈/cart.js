const body = document.querySelector("body");
const container = document.createElement("div");
container.setAttribute("class", "container");
body.appendChild(container);
let total = 0;
const merchandise = { 사과: 1000, 배: 1500, 감자: 300 };

const cartContainer = document.createElement("div");
cartContainer.setAttribute("class", "cartContainer");

const cartTitle = document.createElement("h3");
cartTitle.innerText = "장바구니";

const initalTotalCost = document.createElement("div");
initalTotalCost.innerHTML = `<span>총합 금액: ${total}원</span>`;

const cartProduct = document.createElement("div");

for (const [key, value] of Object.entries(merchandise)) {
  const merchandiseContainer = document.createElement("div");
  merchandiseContainer.setAttribute("class", "merchandise");
  const title = document.createElement("h4");
  title.innerText = `${key}`;

  const cost = document.createElement("div");
  cost.innerText = `${value}원`;

  const buyButton = document.createElement("button");
  buyButton.innerText = "장바구니에 추가";
  buyButton.addEventListener("click", (e) => {
    console.log(e);

    //금액 리렌더링
    total += Number(value);
    const totalCost = document.createElement("span");
    totalCost.innerText = `총합 금액: ${total}원`;
    if (initalTotalCost.firstChild) {
      initalTotalCost.removeChild(initalTotalCost.firstChild);
    }
    initalTotalCost.appendChild(totalCost);

    //카트 내부 리렌더링
    const itemArea = document.createElement("div");
    itemArea.innerText = `${key} - ${value}`;
    cartProduct.appendChild(itemArea);
  });

  merchandiseContainer.append(title, cost, buyButton);
  container.appendChild(merchandiseContainer);
}

body.appendChild(cartContainer);
cartContainer.append(cartTitle, initalTotalCost, cartProduct);

document.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    window.alert(`총 금액 ${total}원을 지불 하셧습니다`);
    total = 0;
    const resetTotal = document.createElement("span");
    resetTotal.innerText = `총합 금액: ${total}원`;
    if (initalTotalCost.firstChild) {
      initalTotalCost.removeChild(initalTotalCost.firstChild);
    }
    initalTotalCost.appendChild(resetTotal);

    cartProduct.innerHTML = "";
  }
});
