const body = document.querySelector("body");
const img = document.createElement("img");
const nextButton = document.createElement("button");
const prevButton = document.createElement("button");
let imgNum = 0;

img.setAttribute("src", `./assest/image_${imgNum}.jpg`);
img.setAttribute("width", "500px");
img.setAttribute("height", "500px");

nextButton.innerText = "다음";
prevButton.innerText = "이전";

nextButton.addEventListener("click", () => {
  imgNum += 1;

  if (imgNum > 9) {
    imgNum -= 10;
  }
  img.setAttribute("src", `./assest/image_${imgNum}.jpg`);

  console.log(imgNum);
});
prevButton.addEventListener("click", () => {
  imgNum -= 1;

  if (imgNum < 0) {
    imgNum += 10;
  }
  img.setAttribute("src", `./assest/image_${imgNum}.jpg`);

  console.log(imgNum);
});

body.append(img, prevButton, nextButton);
