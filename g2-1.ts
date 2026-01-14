interface Collection<T> {
    add(item: T): void;
    remove(item: T): boolean;
    contains(item: T): boolean;
    size(): number;
    toArray(): T[];
}

// Set 기반 컬렉션 구현
class UniqueCollection<T> implements Collection<T> {
    // 구현하세요
    private se ?:Set<T>
    add(item: T): void {
        if(!this.se){
            this.se = new Set<T>();
        }
        this.se.add(item);
    }
    size():number{
        if(!this.se){
            this.se = new Set<T>();
        }
        return this.se.size;
    }
    contains(value : T) :boolean{
        if(!this.se){
            this.se = new Set<T>();
        }
        if(this.se.has(value)){
            return true;
        }
        else return false;
    }
    toArray():T[]{

        return Array.from(this.se ?? [])
    }
}

// 테스트
const collection = new UniqueCollection<number>();
collection.add(1);
collection.add(2);
collection.add(1);  // 중복 무시
console.log(collection.size());      // 2
console.log(collection.contains(1)); // true
console.log(collection.toArray());   // [1, 2]