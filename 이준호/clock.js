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

/* <간단 실습>
window.alert(5 + 6);
*/
const divElem = document.createElement("div");
divElem.innerText = "새로운 div 요소";
document.body.appendChild(divElem);

divElem.addEventListener("click", function () {
  console.log(this);
  this.innerHTML = "clicked";
});

const onChange = (event) => {
  //event객체를 매개변수로 받는 onChange함수를 화살표 함수로 정의
  const {
    //event.target은 event가 발생한 요소를 나타내는 객체 -> ex) <div></div>
    target: { value },
  } = event; //객체 비구조화 할당을 사용해서, event.target.value를 value변수로 정의
  console.log(value); //console.log(event.target.value)
};

const doggy = {
  name: "멍멍이",
  sound: "멍멍",
  age: 2,
};

console.log(Object.entries(doggy));
console.log(Object.keys(doggy));
console.log(Object.values(doggy));

let w = window.innerHeight;
console.log(w);
