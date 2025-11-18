const table = document.querySelector("table");
//console.log(table);

// Search 클릭 감시 및 클릭 시 검색어 가져오기
// 일반버튼
// submit 버튼 : 폼 안 내용 전송(action이 가리키는 곳으로)
// action 값이 없다면 : 현재 브라우저 주소 그대로 사용
// method : 기본값 get
// submit  증지

//reset 버튼 : 폼 안 내용 clear


// const btn = btndocument.querySelector(".btn-outline-success");

const form = document.querySelector("form");
//console.log(form);


// Search 버튼 클릭 감시 및 클릭 시 검색어 가져오기
// 폼 안의 요소 찾기
// 1)form.querySelector("");
// 2) 이름
/*
form.addEventListener("submit",(e) => {
    // submit 기능 중지
    e.preventDefault();
    const search = form.search ;
    //console.log(search); 
    console.log(search.value);
});
*/

// Link li 찾기
// text 출력

const li = document.querySelector(".navbar-nav li:nth-child(2)");
console.log(li);
console.log(li.textContent.trim());