document.querySelector("a").addEventListener("click", (e) => {
  // a태그도 기능을 막을 수 있다.
  e.preventDefault();

  // href 값 가져오기
  console.log("href", e.target.href);
  // target 값 가져오기
  console.log("target", e.target.target);

  console.log("data-link", e.target.dataset.link);
  console.log("data-link", e.target.dataset.linkTest);
  /*
  // naver 가 들어있다면 이동
  if (e.target.href.includes("naver")) {
    location.href = e.target.href;
  } else {
    // 아니라면 구글로 이동. 리디렉션
    location.href = "https://www.google.com";
  }
    */
});

// form submit 발생시
document.querySelector("form").addEventListener("submit", (e) => {
  //submit 중지
  e.preventDefault();

  const form = e.target;
  // 검증
  //요소 선택

  // 내용이 잘 입력되어 있는지 확인
  // 입력안된 요소에 포커스 주고 메세지 alert 띄우기
  if (form.name.value === "") {
    alert("이름을 입력하세요.");
    form.name.focus();
    return;
  }
  if (form.password.value === "") {
    alert("비밀번호를 입력하세요");
    form.password.focus();
    return;
  }
  if (form.age.value === "") {
    alert("나이를 입력하세요");
    form.age.focus();
    return;
  }

  // 모든 값이 입력된 경우에만 submit
  e.target.submit();
});
