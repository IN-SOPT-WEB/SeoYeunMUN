const form = document.querySelector(".text_writing");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
const li = document.getElementsByClassName("tags");
let tags = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let text = "#" + e.target[0].value;
  createTag(text);
  tags.push(text);
  input.value = "";
});

//event handler-create a tag
function createTag(text) {
  if (tags.includes(text)) {
    alarm();
    return;
  }
  const li = document.createElement("li");
  li.classList.add("tags");
  li.innerText = text;
  li.addEventListener("click", (e) => deleteTag(e));
  ul.appendChild(li);
}

//pop-up for same tag
function alarm() {
  const div = document.createElement("div");
}

//event handler-delete a tag
function deleteTag(e) {
  tags = tags.filter((a) => {
    return a != e.target.innerText;
  });
  e.target.remove();
}
