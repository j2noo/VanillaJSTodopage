function makeCounter(){
    let cnt=0;
    return function() {
        return cnt++;
    }
}
let f=makeCounter();
console.log(f());
console.log(f());
console.log(f());
console.log(f());



function m(){
    let cnt=0;
    let a="abd";
    function f1(){
        return a+="붙여";
    }
    return f1;
}
let cpy=m();
console.log(cpy());console.log(cpy());console.log(cpy());
console.log(m()());console.log(m()());console.log(m()());
//이거랑은 다른게, 이거는 m함수의 렉시컬 환경에 cnt변수가 존재함


