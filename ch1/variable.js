// 타입 지정은 따로 안함
//변수선언 : var, let
//상수선언 : const

var value1 = 4;
var value2 = 5;
console.log(value1+value2)

var value2 = 6;
console.log(value2);

//SyntaxError : Identifier 'value1' has already has been declared
// let value1 =7; // 재선언 불가능 재할당은 가능
// console.log(value1);

let value3 = 8;
console.log(value3);
value3 = 10;
console.log(value3);

const value4=15;
value4 =20;
console.log(value4);