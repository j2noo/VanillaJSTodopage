
var varA=2;
let letA=2;

console.log(varA);  //  2 
console.log(globalThis.varA); //2
//console.log(window.varA); //2
console.log(letA);      //2
console.log(globalThis.letA);  //undefined
//console.log(window.letA);  //undefined

let obj={
    me : this,
}

function sayHi() {
    let counter="hihi2" //함수 내의 변수와 프로퍼티는 완전별개다!!!
    console.log(counter);
  
    // 함수를 몇 번 호출했는지 세봅시다.
    sayHi.counter++;
  }
  sayHi.counter = 0; // 초깃값
  
  sayHi(); // Hi
  sayHi(); // Hi
  
  console.log( `호출 횟수: ${sayHi.counter}회` ); // 호출 횟수: 2회
q
  function makeCounter() {

    // let count = 0 대신 아래 메서드(프로퍼티)를 사용함
  
    function counter() {
      return makeCounter.count++;
    };
  
    makeCounter.count = 0;
  
    return counter;
  }
  
  let counter = makeCounter();
  console.log( counter() ); // 0
  console.log( counter() ); // 1
  let a=1;
  let b='1';
  console.log(a==b, a===b);