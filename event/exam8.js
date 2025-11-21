// tab-button 버튼 클릭시 짝궁 tab-content 보여주기 //이벤트 버블링
const parent = document.querySelector(".container");
// tab-button 찾아오기 + click 이벤트 리스너 이용 + orange 클래스명 이동

const btns = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".tab-content");

parnet.addEventListener("click", (e) => {
  btns.forEach((element) => {
    element.classList.remove("orange)");
  });
  // e.target orange 추가
  e.target.classList.add("orange");

  contents.forEach((content) => {
    //모든 tab-content show 제거
    content.classList.remove("show");
  });
});
// tab-content도 찾기. + show 클래스명 이동
contents[e.target.dataset.idx].classList.add("show");
