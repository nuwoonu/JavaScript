const products = [
  { id: 0, price: 77000, title: "Blossom Dress" },
  { id: 1, price: 55000, title: "SpringField Shirt" },
  { id: 2, price: 66000, title: "Black Monastery" },
];

//  array
// const fruits = ["사과", "딸기"];
// console.log(fruits[0]);
// console.log(fruits[1]);

const fruits = ["사과", "딸기", "수박", "바나나"];
fruits.forEach((item) => {
  //   console.log(item);
});
//  object
const person = {
  name: "홍길동",
  job: "학생",
};
const person1 = {
  name: "성춘향",
  job: "학생",
};
// console.log(person.name); // 객체접근

// 객체 배열
const persons = [person, person1];
//console.log(persons[0].name);
persons.forEach((p) => {
  //   console.log(`${p.name} : ${p.job}`);
});

products.forEach((item) => {
  //   console.log(`${item.id}, ${item.title}, ${item.price}`);
});

// card-title : 제품 title
// card-text : 가격

// 영역찾기
const cards = document.querySelectorAll(".card");

cards.forEach((card, idx) => {
  // .card-title 요소 찾기
  const title = card.querySelector(".card-title");
  // .card-text 요소 찾기.
  const price = title.nextElementSibling;

  title.textContent = products[idx].title;
  price.textContent = products[idx].price;
});
