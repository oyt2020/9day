type JsonValue =
    | string
    | number
    | boolean
    | null
    | JsonValue[]
    | { [key: string]: JsonValue };


//TODO: 다음 함수들을 구현하세요
// 유니온 타입 : 여러 타입 중 하나가 될 수 있다.


// 1. stringify: JsonValue를 문자열로 변환
function stringify(value: JsonValue): string {
    if(typeof value === "string")
        return `"${value}"`;
    if(value === null)
        return 'null';
    if(typeof value === "boolean" || typeof value === "number")
        return String(value);
    if(Array.isArray(value)){
        const res = value.map((v)=>stringify(v)).join(",");
        return `[${res}]`;
    }
    if(typeof value === "object"){
        const res = Object.entries(value)
            .map(([k,v]) => `"${k}" : ${stringify(v)}`)
            .join(",");
        return `{${res}}`;
    }

    return "";
    //TODO
}

// 2. getType: JsonValue의 타입을 문자열로 반환
function getType(value: JsonValue): string {

    if(value === null)
        return "null"
    if(Array.isArray(value))
        return "array";
    if(typeof value === "string")
        return typeof value;
    if(typeof value === "number")
        return typeof value;
    if(typeof value === "boolean")
        return typeof value;
    if(typeof value === "object")
        return typeof value;

    return "object";

}

// 3. deepClone: JsonValue를 깊은 복사
function deepClone(value: JsonValue): JsonValue {
    return structuredClone(value)
}

// 테스트
console.log(stringify("hello"));       // "hello"
console.log(stringify(42));            // "42"
console.log(stringify([1, 2, 3]));     // "[1,2,3]"
console.log(stringify({ a: 1 }));      // '{"a":1}'

console.log(getType("hello"));   // "string"
console.log(getType(1))
console.log(getType(true))
console.log(getType([1, 2]));          // "array"
console.log(getType({ a: 1 }));        // "object"
console.log(getType(null));            // "null"