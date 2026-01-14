//TODO: 다음 클래스들을 구현하세요

// 1. Stack<T>: push, pop, peek, isEmpty, size
// 2. Queue<T>: enqueue, dequeue, front, isEmpty, size
// 3. LinkedList<T>: append, prepend, delete, find, toArray
// Stack
class Stack<T>{
    private arr ?: T[]
    push<K extends T>(value: K){
        if(!this.arr){
            this.arr = []
        }
        this.arr.push(value)
    }
    pop<K extends T | undefined>(): T | undefined {
        if(!this.arr){
            this.arr = []
        }
        return this.arr.pop();
    }
    peek<K extends T>(): T | undefined {
        if(!this.arr){
            this.arr = []
        }
        const x = this.arr.length - 1
        return this.arr[x]
    }
    // get 속성 처럼 취급
    get size() : number {
        if(!this.arr){
            this.arr = []
        }
        return this.arr.length;
    }
}

class Queue<T>{
    private queue ?: T[];
    enqueue<K extends T>(value : K){
        if(!this.queue){
            this.queue = [];
        }
        this.queue.push(value);
    }
    dequeue<K extends T>(){
        if(!this.queue){
            this.queue = [];
            return ;
        }
        return this.queue.shift();
    }
    front<K extends T>(){
        if(!this.queue){
            this.queue = [];
            return ;
        }
        return this.queue[0];
    }
}
class LinkedList<T>{
    private list ?:T[];
    private copy ?:T[];
    append <K extends T >(value : K){
        if(!this.list){
            this.list = [];
        }
        this.list.push(value);
    }
    prepend <K extends T >(value : K){
        if(!this.list){
            this.list = [];
        }
        if(this.copy||!this.copy)
            this.copy = [];
        this.copy.push(value);
        for(let i=0;i<this.list.length;i++){
            this.copy.push(list[i])
        }
    }
}
// 테스트
const stack = new Stack<number>();
stack.push(1);
stack.push(2);
console.log(stack.pop());  // 2
console.log(stack.peek()); // 1
console.log(stack.size);   // 1

const queue = new Queue<string>();
queue.enqueue("a");
queue.enqueue("b");
console.log(queue.dequeue()); // "a"
console.log(queue.front());   // "b"

// const list = new LinkedList<number>();
// list.append(1);
// list.append(2);
// list.prepend(0);
// console.log(list.toArray()); // [0, 1, 2]
// list.delete(1);
// console.log(list.toArray()); // [0, 2]