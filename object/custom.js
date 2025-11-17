// 사용자 객체
const person = 
{
    name: ["bob","smith"],
    age: 32,
    gender: "male",
    interests: ["music","skiing"],
    greeting: function ()
    {
        console.log(`Hi!!! I'm ${this.name[0]}.`);
    },
};

console.log(person);
console.log();
console.log(person.name);
console.log();
console.log(person.age);
console.log();
console.log(person.gender);
console.log();
person.greeting();

console.log();
console.log(person.name[1]); // 요소 하나를 개별로 찍을 수 있다.

const tv = new Object();
tv.color = "red";
tv.power = true;
tv.volume = 13;
tv.info = function()
{
    console.log("색상" + this.color);
    console.log("전원" + this.power);
    console.log("볼륨" + this.volume);
};

console.log(tv);

// 객체 값 변경
person.age = 40;
console.log(person.age);
person.farewell = function()
{
    console.log("bye");
};
person.farewell();

// 얕은복사 / 깊은복사 (값 복사 : ...)

const person2 = person; //얕은복사

// 원본 수정 
person.name[0] = "tomato";
console.log("person name 변경 후 ",person.name);
console.log(person2.name);
console.log();

const person3 = {...person,name:[...person.name],interests: [...person.interests]}; // 깊은 복사를 뜬것.
person.name[0]= "bob";
person.interests[0]= "book";
console.log("person name 변경 후", person.name);
console.log(person3.name);
console.log(person3.interests);
console.log();