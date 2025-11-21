// 알림창 보여주기 클릭시 알림창 보여주기
// const box = document.querySelector(".alert-box");
// const al = document.querySelector("button");

const box = document.querySelector(".alert-box");
const notification = (state) => {
  box.style.display = state;
};

// al.addEventListener("click", (e) => {
//   notification("block");
// });
// const x = document.querySelector(".close");
// x.addEventListener("click", (e) => {
//   notification("none");
// });

document.querySelector("button").addEventListener("click", () => {
  notification("block");
});

document.querySelector(".close").addEventListener("click", () => {
  notification("none");
});
