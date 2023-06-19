//JS 모르는 함수는 MDN에 한번씩 참고
// function realClock() {
//   const date = new Date();
//   const hours = date.getHours();
//   const mins = date.getMinutes();
//   const secs = date.getSeconds();
//   const clockElem = document.getElementById("clock");
//   return clockElem;
// }
// setInterval(realClock, 1000);
// click -> setInterval(원하는 함수)
// myclock.addEventListener("click", setInterval(myclock, 1000));

// 먼저 지정해주기
const myclock = document.getElementById("clock");
// 화살표 함수와 콜백 함수의 개념
const startClock = () => {
  //setInterval은 지정된 시간 간격마다 지정한 함수를 실행해주는 함수
  setInterval(() => {
    const date = new Date();
    const hours = date.getHours();
    const mins = date.getMinutes();
    const secs = date.getSeconds();
    myclock.innerText = `${hours}:${mins}:${secs}`;
  }, 1000);
};

myclock.addEventListener("click", startClock);
