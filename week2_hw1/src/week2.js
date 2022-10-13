const formTodo = document.querySelectorAll(".form-todo");
const delBtn = document.querySelectorAll(".list__del-btn");
const setTdy = document.querySelector(".set-tdy");
const setTmr = document.querySelector(".set-tmr");
const setAll = document.querySelector(".set-all");
const sectionTdy = document.querySelector(".section-tdy");
const sectionTmr = document.querySelector(".section-tmr");

/*항목 추가 */
for (form of formTodo) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    onAdd(e.target[0].value, e.target.previousElementSibling);
    /*텍스트 상자 비워주기 */
    e.target[0].value = "";
  });
}

function onAdd(todoValue, ul) {
  const li = document.createElement("li");
  li.classList.add("list__item");
  const span = document.createElement("span");
  span.classList.add("list__todo-text");
  const btn = document.createElement("button");
  btn.addEventListener("click", (e) => {
    onDelete(e.currentTarget);
  });
  btn.classList.add("list__del-btn");
  span.innerText = todoValue;
  btn.innerHTML = '<span class="material-symbols-outlined"> delete </span>';
  li.appendChild(span);
  li.appendChild(btn);
  ul.appendChild(li);
}

/*항목 삭제*/
for (d of delBtn) {
  d.addEventListener("click", (e) => {
    onDelete(e.currentTarget);
  });
}

function onDelete(currentTarget) {
  currentTarget.parentNode.remove();
}

/*사이즈 변화*/
setTdy.addEventListener("click", () => {
  onHide(sectionTdy, sectionTmr);
});
setTmr.addEventListener("click", () => {
  onHide(sectionTmr, sectionTdy);
});
setAll.addEventListener("click", () => {
  sectionTdy.classList.remove("hide-btn");
  sectionTmr.classList.remove("hide-btn");
});
function onHide(sectionToShowup, sectionToHide) {
  if ([...sectionToShowup.classList].includes("hide-btn"))
    sectionToShowup.classList.remove("hide-btn");
  if (![...sectionToHide.classList].includes("hide-btn"))
    sectionToHide.classList.add("hide-btn");
}
