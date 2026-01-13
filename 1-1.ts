const a = "hello";          // 타입: Hello 고정
let b = "hello";            // 타입: String
const c = [1, 2, 3];        // 타입: number 배열
const d = [1, "two", true]; // 타입:
const e = { x: 1, y: 2 };   // 타입: 객체로 인식, 안쪽 수정은 가능, 재할당을 막아줌.
const f = (x: number) => x * 2; // 타입: 화살표 함수, 함수 타입, 반환 타입: number 타입

function g() {
    return { id: 1, name: "Kim" };
}                           // 반환 타입: id는 number, name 는 String

const h = [1, 2, 3].map(x => x.toString()); // 타입: 문자열 배열

c.push(4);
console.log(c);

e.y = 1;
//e.z = 3; 에러 발생