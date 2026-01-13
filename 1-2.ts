// 에러 1
const user: {
    name :string,
    age : number,
    email ?: string 
}= {
  name: "Kim",
  age: 25,
};
user.email = "kim@test.com";

// 에러 2
function double(value : number) {
  return value * 2;
}

// 에러 3
const numbers : (string | number)[] = [1, 2, 3]; // 타입 강제
numbers.push("four");

// 에러 4
function greet(name: string, age?: number) { // ? 추가 , 필수를 먼저써야함 (age-name > 에러 발생)
  return `Hello,${name}. You are${age} years old.`;
}
greet("Kim");

// 에러 5
const config = {
  port: 3000,
  host: "localhost"
};
config.port = "3001";