//TODO: 오버로드 시그니처를 작성하세요

// 1. createElement 함수
// - ("div") => HTMLDivElement
// - ("span") => HTMLSpanElement
// - ("input") => HTMLInputElement
// - (string) => HTMLElement
//

function createElement(tag :"div"): HTMLDivElement;
function createElement(tag :"span"):HTMLSpanElement;
function createElement(tag: "input") : HTMLInputElement;

function createElement(tag: string): HTMLElement {
    if (tag === "div"){
        return new HTMLDivElement();
    }
    if(tag === "input")
        return new HTMLSpanElement();
    if(tag === "input")
        return new HTMLInputElement();

    return document.createElement(tag);
}


function fetch(url : string) : Promise<Response>;
function fetch(uri : string, options : RequestOptions) : Promise<Response>;
function fetch(request:Request) : Promise<Response>;

// 2. fetch 함수
// - (url: string) => Promise<Response>
// - (url: string, options: RequestOptions) => Promise<Response>
// - (request: Request) => Promise<Response>

interface RequestOptions {
    method?: string;
    headers?: Record<string, string>;
    body?: string;
}

//TODO: 오버로드 정의
// T : 제네릭 타입 , process 함수를 사용할 때 타입을 정하겠다 의미 > number이 오면 number string 이 오면 string 
function process<T>(item : T) : T;

function process<T>(items : T[]) : T[];

function process<T>(input: T|T[]): T | T[]{
    if (Array.isArray(input))
        return input;
    else return input;
}



// 3. 배열/단일 값 처리 함수
// - process(item: T) => T
// - process(items: T[]) => T[]

//TODO: 오버로드 정의