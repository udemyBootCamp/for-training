(() => {
  const main = document.getElementById("main");
  const title = document.createElement("h3");
  const image = document.createElement("img");
  const container = document.createElement("div");

  image.setAttribute("src", `./assest/image_1.jpg`);
  image.setAttribute("width", `450px`);
  image.setAttribute("height", `450px`);

  container.addEventListener("click", () => {
    const randomNum = Math.floor(Math.random() * 10);
    image.setAttribute("src", `./assest/image_${randomNum}.jpg`);
  });

  container.appendChild(image);
  title.innerText = "클릭하면 랜덤하게 이미지가 변화합니다.";
  main.appendChild(title);
  main.appendChild(container);
})();
