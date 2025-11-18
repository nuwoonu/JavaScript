// h1 태그 요소 삭제
const h1 = document.querySelector("h1");

// h1 글자 클릭 시 제거
//h1.addEventListener("click", (e) => h1.remove());
//h1.addEventListener("mouseover", (e) => e.target.remove());



//document.querySelector("button").addEventListener("click",()=>h1.remove()); // 이벤트 대상 ==> button

// h1 요소의 class 제거(button 클릭)
// 1) removeAttribute("제거할 속성명") : 모든 속성용
// 2) classList.remove() : class 전용


console.log(h1.classList);
console.log(h1.classList[0]);
h1.classList.remove("two"); // 클래스명 지울 때 주로 사용.


// img 요소 찾기
const img = document.querySelector("img");
// img alt 속성 값 제거.
// img.removeAttribute("alt");

// h1.removeAttribute("class");

;
