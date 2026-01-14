// 배열의 첫 번째 요소 반환
function first<T>(arr: T[]): T | undefined {
    // 구현하세요
    return arr.shift()
}

// 배열의 마지막 요소 반환
function last<T>(arr: T[]): T | undefined {
    // 구현하세요
    return arr.pop()
}

// 배열을 n개씩 나누기
function chunk<T>(arr: T[], size: number): T[][] {
    // 구현하세요
    const x = arr.length
    let result: T[][] = []
    for (let i = 0 ; i<x;i+=size){
        result.push(arr.slice(i, i+size))
    }
    return result
}

// 두 배열 합치기 (타입 유지)
function concat<T, U>(arr1: T[], arr2: U[]): (T | U)[] {
    // 구현하세요
    return [...arr1,...arr2]
}

// 테스트
console.log(first([1, 2, 3]));           // 1
console.log(last(["a", "b", "c"]));      // "c"
console.log(chunk([1, 2, 3, 4, 5], 2));  // [[1, 2], [3, 4], [5]]
console.log(concat([1, 2], ["a", "b"])); // [1, 2, "a", "b"]