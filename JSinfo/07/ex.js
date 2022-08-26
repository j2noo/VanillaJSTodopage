function Rabbit() {
    this.name = "토기입니다";
};
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

console.log(Rabbit.prototype.constructor);
console.log(rabbit.__proto__.constructor);

let rabbit2 = new rabbit.constructor();
console.log(rabbit2)