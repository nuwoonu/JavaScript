// 함수
// alert("사용자에게 메세지 전달");
//입력
// prompt("숫자 입력",처음 초기값 , );
/*
let input =prompt("숫자 입력");
console.log("사용자 입력 값",input);

let isBoss = confirm("당신이 주인입니까");
console.log(isBoss ? "주인" : "주인아님");
*/
// 게임의사 물어보기

/*
if (confirm("게임 한판 하실래요?")) 
{
    document.writeln("좋습니다. 게임 한판 하시죠.");
} 
else 
{
    document.writeln("나중에 한판 하시죠.");
}
*/

// 사용자에게 숫자를 입력받아 양수,음수,0, 인지 판별
// prompt()

/*
let input = Number(prompt("숫자를 입력하세요"));

if (input > 0) 
{
    document.writeln("양수");    
} else if(input <0)
{
    document.writeln("음수");
}
else if(input == 0)
{
    document.writeln("0");
}
else if(isNaN(input))
{
    document.writeln("숫자가 아님.");
}
*/

//  숫자를 입력받아 짝,홀 구분
/*
let input = Number(prompt("숫자를 입력하세요."));

if (input % 2 ==0) 
{
    document.writeln("짝수");    
} else if(input %2 ==1)
{
    document.writeln("홀수");    
}
else 
{
    document.writeln("숫자를 확인해주세요")
}
*/

// 숫자 3개를 입력받아 평균이 >= 90 A , >=80 B, >=70 C, >=60 D ,F
let num1 = Number(prompt("숫자를 입력하세요. 3번해야함."));
let num2 = Number(prompt("숫자를 입력하세요."));
let num3 = Number(prompt("숫자를 입력하세요."));

let avg = (num1+num2+num3)/3

// if (avg >=90) 
// {
//     document.writeln("A");
// }
// else if (avg >=80) 
// {
//     document.writeln("B");
// }
// else if (avg >=70) 
// {
//     document.writeln("C");
// }
// else if (avg >=90) 
// {
//     document.writeln("D");
// }
// else
// {
//     document.writeln("F");
// }

switch (parseInt(avg / 10)) {
    case 10:
    case 9:
        document.writeln("A");
        break;
    case 8:
        document.writeln("B");
        break;
    case 7:
        document.writeln("C");
        break;
    case 6:
        document.writeln("D");
        break;
    default:
        document.writeln("F");
        break;
}

