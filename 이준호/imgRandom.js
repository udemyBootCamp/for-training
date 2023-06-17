// 힌트는 math.random(), 이미지를 클릭했을 때 사진이 바뀌는 기능
function imgChange() {
  const img = document.querySelector("img");
  const randomNum = Math.floor(Math.random() * 7) + 1;
  img.src = `images/${randomNum}.jpg`;
}

const myImg = document.getElementById("myImg");
myImg.addEventListener("click", imgChange);
