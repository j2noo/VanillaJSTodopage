let arr = [1, 2, 3];
let arrCopy = [...arr];

let obj = {
     a: 1, b: 2, c: 3,
     age : {
        min : 12,
        max : 123,
     }
    };
let objCopy = { ...obj };
console.log(obj);
console.log(objCopy);
obj.a=123213;
obj.age.min=9999;
console.log(obj);
console.log(objCopy);