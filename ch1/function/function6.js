// 내장함수
// window.confirm(), window.alert(),
// isNaN(), parseInt(), parseFloat()

// 문자 인코딩
// a => 97 => 1010 

// 문자 디코딩
// a <= 97 <= 1010

// encodeURI() : 한글만 인코딩. (영문,숫자,일부기호만 제외)
console.log(encodeURI("http:localhost:8080/basic/info.html?name=홍길동&age=15"));
console.log();
// encodeURIComponent() : 영문,숫자만 제외하고 인코딩됨.
console.log(encodeURIComponent("http:localhost:8080/basic/info.html?name=홍길동&age=15"));

console.log(decodeURI("http:localhost:8080/basic/info.html?name=%ED%99%8D%EA%B8%B8%EB%8F%99&age=15"));
console.log(decodeURIComponent("http%3Alocalhost%3A8080%2Fbasic%2Finfo.html%3Fname%3D%ED%99%8D%EA%B8%B8%EB%8F%99%26age%3D15"));

// 2초 지난뒤 안녕 글자 출력
setTimeout(() => {console.log("안녕")}, 2000);
console.log("종료");

console.log("시작");

// 일정시간 간격으로 처리.
setInterval(() => {
    console.log("3초가 지났습니다.");
}, 3000);
console.log("종료");