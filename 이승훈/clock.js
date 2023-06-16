(() => {
  const main = document.getElementById("main");
  const clock = document.createElement("h3");
  setInterval(() => {
    const date = new Date();

    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    if (min < 10) {
      min = "0" + min;
    } else if (sec < 10) {
      sec += "0";
    } else if (hours < 10) {
      hours += "0";
    }
    clock.innerText = `${hours}: ${min}: ${sec}`;
  }, 1000);
  main.appendChild(clock);
})();
