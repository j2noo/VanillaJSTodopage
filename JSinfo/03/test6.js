let john = { 
    name: "John",
    213 : 213, 
};

let array = [ john ];

john = null; // 참조를 null로 덮어씀




// 위 객체는 john이라는 참조를 통해 접근할 수 있습니다.

// 그런데 참조를 null로 덮어쓰면 위 객체에 더 이상 도달이 가능하지 않게 되어

console.log(array[0]);

let wmap=new WeakMap();
let obj={
    "age" : 2.
}
wmap.set(obj,123);
console.log(wmap.get(obj));
obj=null;
console.log(wmap.get(obj));
let weakMap = new WeakMap();

let obj2 = {};

weakMap.set(obj2, "ok"); //정상적으로 동작합니다(객체 키).
console.log(weakMap.get(obj2));