// 1. 비동기 맵 함수
async function asyncMap<T, U>(
    items: T[],
    callback: (item: T, index: number) => Promise<U>
): Promise<U[]> {
    const promises = items.map((item,index)=>callback(item,index));
        return await Promise.all(promises);
    //TODO
}

interface EventMap {
    click: { x: number; y: number };
    keydown: { key: string; code: string };
    submit: { data: Record<string, string> };
}

class TypedEventEmitter<T extends Record<string, any>> {
    private listeners : { [K in keyof T] ?: ((arg: T[K])=> void)[]} = {};

    on<K extends keyof T>(eventName:K, handler:(event: T[K])=>void):void{
        if(!this.listeners[eventName]){
            this.listeners[eventName]=[];
        }
        this.listeners[eventName].push(handler);
    }
    emit<K extends keyof T>(eventName : K, payload:T[K]):void{
        const handlers = this.listeners[eventName];
        if(handlers){
            handlers.forEach(handler => handler(payload));
        }
    }
}

// 테스트
const emitter = new TypedEventEmitter<EventMap>();

emitter.on("click", (event) => {
    console.log(event.x, event.y);  // 타입 추론됨
});

emitter.emit("keydown", { key: "Enter", code: "Enter" });
emitter.emit("click", { x: 100, y: 200 });