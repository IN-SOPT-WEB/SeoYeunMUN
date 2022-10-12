/*toggle button 선택시 drop down */
const toggle_btn = document.querySelector(".toggle_btn");
const option_ul = document.querySelector(".option_ul");
toggle_btn.addEventListener("click", () => {
  option_ul.classList.toggle("hidden");
});

/*option 선택 시 li 내용 바뀌고, option의 색도 바뀜 */
const option = document.getElementsByClassName("option");
const selection_text = document.querySelector(".selection_text");
for (opt of option) {
  opt.addEventListener("click", (e) => {
    changeSelected(e);
  });
}
function changeSelected(e) {
  console.log(e);
  /*선택한 option 색 변화 */
  for (opt of option) {
    opt.classList.remove("selected");
  }
  e.currentTarget.classList.add("selected");

  /*li 내용 바꿔주기 */
  selection_text.innerText = e.target.innerText;
  /*ul 닫아주기*/
  option_ul.classList.add("hidden");
}
