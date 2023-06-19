const body = document.querySelector("body");
const section = document.createElement("section");
section.setAttribute("class", "make_by_js");
function makeBoard(title, text) {
  const div = document.createElement("div");
  const h3 = document.createElement("h3");
  const span = document.createElement("span");

  h3.innerText = `${title}`;
  span.innerText = `${text}`;

  div.append(h3, span);
  section.appendChild(div);
}
body.appendChild(section);

makeBoard("첫 번째 게시글", "안녕하세요!");
makeBoard("두 번째 게시글", "안녕히계세요!");
