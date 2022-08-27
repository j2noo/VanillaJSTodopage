let animal = {
    eats: true
};
  
function Rabbit() {
    this.name = "토기입니다";
};


/* 디폴트 prototype
Rabbit.prototype = { constructor: Rabbit };
*/

let rabbit = new Rabbit();
console.log(Rabbit.prototype.constructor);
console.log(rabbit.__proto__.constructor);

//let rabbit2 = new rabbit.__proto__.constructor();
let rabbit2 = new rabbit.constructor();
console.log(rabbit.name);
console.log(rabbit2.name);

function Rabbit2() {}
Rabbit2.prototype = {
  eats: true
};

let rabbit3 = new Rabbit2();

ss

console.log( rabbit3.eats ); // ?