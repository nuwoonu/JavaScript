// 함수 == 메소드 (객체 내에 포함)
// function name(params) {};
// const func = function(){};
// const func1 = () => {};

// 함수선언방식
function showMsg() // 파라메터가 없는경우
{
    console.log("안녕하세요");

}
showMsg();

// 2. 파라메터 있는 경우
function multiply(a,b)
{
    console.log(a,b);
    return a*b;
}
const result = multiply();
console.log(result);

function showDialog(greeting,name) 
{
    console.log(`${greeting}!! ${name}`);    
}

showDialog("hello","kim");

// 3. 매개변수 기본값

function multiply(a,b=5)  // 매개변수값 (b=5)초기값 지정하는 경우.
{
    console.log(a,b);
    b= b|| 5;
    return a*b;    
}
console.log(multiply(3));
console.log(multiply(5,6));


// 4. 함수안에 함수 작성
function a()
{
    function b() 
    {
        console.log("b function");    
    }
    if(true)
    {
        function c() {}
    }
    b();
    c();
}
a();
// b(); // 내부에서만 호출 가능함.