const body = document.querySelector("body");
const img = document.createElement("img");

body.appendChild(img);
img.className = "backgroundimg";

const randomImgNum = Math.floor(Math.random() * 10);
img.setAttribute("src", `./assest/image_${randomImgNum}.jpg`);
img.setAttribute("alt", `backGroundImg`);

const clock = document.createElement("h3");
clock.className = "Clock";
body.appendChild(clock);

const greetingMsg = [
  "좋은 아침입니다.",
  "점심은 드셨나요?",
  "좋은 오후입니다",
  "편안한 밤 되시길",
];

const greeting = document.createElement("h2");
greeting.className = "Greeting";

body.appendChild(greeting);

setInterval(() => {
  const date = new Date();

  let hours = date.getHours();
  let min = date.getMinutes();

  if (min < 10) {
    min = "0" + min;
  }

  if (hours < 10) {
    hours = "0" + hours;
  }
  clock.innerText = `${hours}:${min}`;

  const hour = new Date().getHours();

  console.log(hour < 15);

  if (hour < 11) {
    greeting.innerText = greetingMsg[0];
  } else if (hour < 15) {
    greeting.innerText = greetingMsg[1];
  } else if (hour < 19) {
    greeting.innerText = greetingMsg[2];
  } else {
    greeting.innerText = greetingMsg[3];
  }
}, 1000);
