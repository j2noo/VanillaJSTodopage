class User {
    constructor(age){
        this.age=age;
    }

    get age(){ 
      return this._age;
    }
    set age(value){
      this._age=value;
    }
}

let user1= new User(24);
user1.age=1234;

console.log(user1.age,user1._age)
console.log(Object.getOwnPropertyNames(user1.__proto__));
console.log(Object.keys(user1));
console.log(Object.getOwnPropertyDescriptor(user1.prototype, 'age'));