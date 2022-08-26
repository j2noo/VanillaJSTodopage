class Coffee{
    constructor(power) {
        this._power=power;
    }
    _water=0;
    get water() {
        return this._water;
    }
    set water(value){
        this._water=value;
    }
    get power() {
        return this._power;
    }
}
let coffee = new Coffee(123);
coffee.water=123123;
console.log(coffee._water, coffee.water);
console.log(coffee.power);

class User {
    constructor(){
        this.fieldName="jinwo";
        
    }
    #name3 = "private";
    name2="ss";
    sayHi() {
      let fieldName = "name";
      console.log(`Hello, ${this[fieldName]}`);
      console.log(`Hello, ${this.#name3}`);
      console.log(Object.getOwnPropertyDescriptor(user1,this.#name3));
      console.log("@@"+Object.getOwnPropertyDescriptor(this,"#name3"));
      console.log(Object.getOwnPropertyNames(User));
      console.log(this);
    }
  }
let user1 = new User();

user1.sayHi();
console.log(Object.getOwnPropertyDescriptor(user1,"name2"));