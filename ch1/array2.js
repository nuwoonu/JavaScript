const numArr = [52,273,586,32,57,103,312,2];
let min=numArr[0],max=numArr[0];
// 최댓값과 최솟값 출력
// for (let index = 1; index < numArr.length; index++) {
//     if (numArr[index]> max) {
//         max= numArr[index];
//     }
//     else if (numArr[index]< min) {
//         min= numArr[index];
//     }
// }
for (let index = 1; index < numArr.length; index++) 
{
    if(max < numArr[index]) max= numArr[index];
    if(min > numArr[index]) min= numArr[index];

}
document.writeln(`최댓값 : ${max}, 최솟값 : ${min}`);
document.writeln("<br>");

// 사용자에게 한글로 행성 이름을 받고 영어로 된 행성 이름 출력
const planetKor = ["수성","금성","지구","화성","목성","토성","천왕성"];
const planetEng = ["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus"];

const palnet = prompt("행성을 한글로 입력하세요.");
document.writeln("입력한 한글 행성 이름 : ", palnet);
document.writeln("<br>");
document.writeln("영어행성 이름 : ",planetEng[planetKor.indexOf(palnet)]);