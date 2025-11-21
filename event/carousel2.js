const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const wrap = document.querySelector(".wrap");
const carousel = document.querySelector(".carousel");
let idx = 0;

// 다음클릭
// translate(-${-100}vw -> translate(-${-200}vw
// 이전클릭
// translate(-${-200}vw => translate(-${-100}vw -> translate(-${-0}vw

prev.addEventListener("click", (e) => {
  if (idx === 0) {
    return;
  }
  idx -= 1;

  carousel.style.transform = `translate(-${100 * idx}vw)`;
});

next.addEventListener("click", (e) => {
  if (idx === 2) {
    return;
  }

  idx += 1;
  carousel.style.transform = `translate(-${100 * idx}vw)`;
});
