let animal = {
    eats: true
};

let rabbit = {
    __proto__ : animal,
}
console.log(rabbit.eats); //true

console.log(rabbit.__proto__ === animal); //true

rabbit.__proto__ = {};