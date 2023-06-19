const body = document.querySelector("body");
const chatBoard = document.createElement("div");
body.appendChild(chatBoard);
function chat(userName, text) {
  const chatArea = document.createElement("div");
  chatArea.innerHTML = `<bold>${userName}</bold>: ${text}`;
  chatBoard.appendChild(chatArea);
}

const inputUserName = document.createElement("input");
inputUserName.setAttribute("class", "userName");
inputUserName.setAttribute("type", "text");

const inputText = document.createElement("input");
inputText.setAttribute("class", "inputText");
inputText.setAttribute("type", "text");

const submitBtn = document.createElement("input");
submitBtn.setAttribute("type", "submit");
submitBtn.setAttribute("value", "전송");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  chat(inputUserName.value, inputText.value);
  inputUserName.value = null;
  inputText.value = null;
  inputUserName.focus();
});

const form = document.createElement("form");

form.append(inputUserName, inputText, submitBtn);

body.appendChild(form);
