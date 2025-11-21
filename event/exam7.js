// tab-button 버튼 클릭시 짝궁 tab-content 보여주기

// tab-button 찾아오기 + click 이벤트 리스너 이용 + orange 클래스명 이동

const btns = document.querySelectorAll(".tab-button");
console.log(btns);

const contents = document.querySelectorAll(".tab-content");

btns.forEach((btn, idx) => {
  btn.addEventListener("click", (e) => {
    //어느 tab-button 클릭이 되었는가? e.target 이벤트 대상을 알 수 있다.

    // 모든 tab-button orange 제거
    // btns[0].classList.remove("orange");
    // btns[1].classList.remove("orange");
    // btns[2].classList.remove("orange");

    btns.forEach((element) => {
      element.classList.remove("orange");
    });
    // e.target에 orange 추가
    e.target.classList.add("orange");

    // show 클래스명 이동.
    // 모든 tab-content show 제거
    contents.forEach((content) => {
      contents.classList.remove("show");
      contents[idx].classList.add("show");
    });
  });
});

// tab-content도 찾기. + show 클래스명 이동
