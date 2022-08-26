let obj1={
    name : "jinwoo",
    age : 23,
}
let obj2={};

for(let prop in obj1){
    obj2[prop]=obj1[prop];
}
obj2.aged=123123;
console.log(obj1,obj2);
console.log(obj1==obj2);
let obj3={};
Object.assign(obj3,obj1,obj2);
console.log(obj3);
function deepClone(obj) {
    if(obj===null || obj!==Object)
        return obj;
    let cpy={};
    for(let prop in obj){
        cpy[prop]=deepClone(obj[prop]);
    }
    return cpy;
}
let obj4=deepClone(obj3);
console.log(obj4);