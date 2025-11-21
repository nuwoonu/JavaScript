//fetch

//페이지가 로드 되면
//  1. 어제 날짜를 보여주기

const txtYear = document.querySelector("#txtYear");
const Selmom = document.querySelector("#selMon");
const setDay = document.querySelector("#selDay");

//
const init = () => {
  const now = new Date();
  console.log(now);
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate() - 1; // 0 == 몇월에 시작
  console.log(year, month, day);

  txtYear.value = year;
  selMon.value = month < 10 ? "0" + month : month;
  selDay.value = day < 10 ? "0" + day : day;
};

init();

const btn = document.querySelector("button");
const msg = document.querySelector("#msg");
btn.addEventListener("click", () => {
  //사용자가 입력한 날짜 가져오기
  const date = txtYear.value + selMon.value + selDay.value;
  console.log(date);
  const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=9e986ef9ea1e908a9107f6d97052ff22&targetDt=${date}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // movieCd , movieNm, rank , rankInten
      const dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
      dailyBoxOfficeList.forEach((item) => {
        console.log(item.movieCd, item.movieNm, item.rank, item.rankInten);
      });
    });
});
