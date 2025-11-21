// async (params) => {};

// async function name(params) {}
async function logName() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) => response.json());
}

const todo = await logName(); // await == async가 붙은 함수를 호출할때 써야한다.
console.log(todo);
