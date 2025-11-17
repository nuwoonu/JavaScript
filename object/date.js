const date = new Date();

console.log(date);
console.log(typeof date);
console.log(`연도 : ${date.getFullYear()}`);
console.log(`월 : ${date.getMonth()}`);
console.log(`일 : ${date.getDate()}`);
console.log(`시 : ${date.getTime()}`);
console.log(`분 : ${date.getMinutes()}`);
console.log(`초 : ${date.getSeconds()}`);
console.log(`문자열 : ${date.toLocaleString()}`); // 시스템 방식으로 표현.
console.log(`문자열 : ${date.toLocaleString("ko-KR")}`);