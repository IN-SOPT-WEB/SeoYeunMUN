function useViewstate({
  leftpanel,
  rightpanel,
  todayBtn,
  tomorrowBtn,
  bothBtn,
}) {
  const viewToday = () => {
    rightpanel.classList.add(hidden);
  };
}

function main() {
  useViewState({
    leftpanel: $(),
  });
}

function onAdd() {
  todo_value;
  /* 리스트 툴 만들기 */
  const li = document.createElement("li");
  const btn = document.createElement("button");
  btn.innerHTML = '<span class="material-symbols-outlined"> delete </span>';
  li.appendChild(btn);
  /*값 넣고 올리기 */
  li.innerHTML = todo_value;
}
