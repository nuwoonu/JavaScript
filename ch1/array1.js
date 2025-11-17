// 배열

const fruits = ["사과","망고","바나나","수박","자두","포도"];
const others = ["과일",1,1.34,new Date(), true, {}];
const array1 = new Array("자전거","자동차","기차","트럭","오토바이");
const planet = new Array("수성","금성","지구","화성","목성","토성","천왕성");

console.log(fruits);
// console.log(others);
// console.log(array1);
// console.log(planet);

// for (let index = 0; index < array1.length; index++) {
//     const element = array1[index];
//     console.log(element);
// }

// planet.forEach((element,idx) => {
//     console.log(`${idx} : ${element}`);
// });

// for (const element of others) 
// {
//     console.log(element);

// }

console.log(fruits[3]);

// 배열요소 추가
// push() : 뒤에 추가, unshift() : 앞에 추가 unshift가 default이다.
console.log("\n ------------ 배열요소 추가 ----------------");
fruits.push("메론");
fruits.unshift("딸기");
// 배열요소 변경
fruits[5]= "키위"
// 없는 index 사용시 push 상황과 동일하게 적용된다 (flexible)
fruits[8]= "파인애플"
console.log(fruits);

// fruits = []; 자바스크립트에서 상수로 선언했지만 안에 요소는 변경가능하다.

// 2. 배열요소 삭제
// splice() : 위치 지정 후 삭제 pop() -> 맨뒤 부터 제거
// splice(요소위치,삭제갯수,"삽입요소") : 원본 삭제후 변경가능.
console.log("\n ------------배열요소 제거------------")

console.log(array1);

array1.pop(); // 맨뒤에 제거
console.log(array1);

// array1.splice(2,1);
// console.log(array1);


array1.splice(2,1,"오토바이");
console.log(array1);

array1.splice(2,0,"트럭");
console.log(array1);

// 3. 배열 연결 후 문자열로 리턴: join()
console.log("-문자열 배열 연결",fruits.join("-"));
console.log(" 문자열 배열 연결",fruits.join(" "));

// 4. concat() --> 다른 배열과 연결 후 새로운 배열로 리턴.
console.log(fruits.concat(planet));
console.log(fruits);

// 5. slice()
console.log(fruits.slice(1,3));

// 6. 정렬
console.log(fruits.sort()); // 문자열 정렬 잘 됨.
// 화살표 함수
console.log([12,6,9,1,10,7].sort((a,b)=> b-a));  // b-a (내림차순)
console.log([12,6,9,1,10,7].sort((a,b)=> a-b));  // a-b (오름차순)

// 7. indexOf() 배열 인덱스 위치 체크 (있으면 1 없으면 -1) java와 동일하다.
console.log(fruits.indexOf("망고"));

// 8. 깊은복사 vs 얕은복사
console.log("\n -- 얕은 복사 : 주소복사 --")
const fruits2 = fruits;
console.log(fruits);
console.log(fruits2);

// 원본 수정
fruits[2] = "자동차";
console.log(fruits);
console.log(fruits2); // -> 주소복사 되어 변경이 된다.

// *** 중요 ... : spread 중요 ***
const shallowCopy = [...fruits];
fruits[2] = "메론";
console.log("\n -- 깊은 복사 : 값만 복사--");
console.log(fruits);
//복사본 변화 없음.
console.log(shallowCopy);

// 동일한 값으로 배열 생성
// 숫자 1 5개를 요소로 하는 배열 생성
// const array2 = [1,1,1,1,1];
const array2 = new Array(5).fill(1);
console.log(array2);

// 조건에 만족하는 배열 요소 추출 : find
const array3 = [12,6,9,1,10,7];

console.log(array3.find((item)=> item > 5)); // 조건에 가장 만나는 요소. 하나만 출력
// 조건에 만족하는 배열 첫 요소의 인덱스 추출 : findIndex()
console.log(array3.findIndex((item)=> item >5));

const varArr1 = ["num1","num2"];
const varArr2 = ["num3","num4"];

const varArr3 = [varArr1,varArr2];
console.log(varArr3);


const varArr4 = [...varArr1,...varArr2];
console.log(varArr4);

// 원본 수정
varArr1[0]="num5";
console.log("복사본", varArr3);
console.log(varArr4);