class User {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    showInfo(){
        console.log(`name : ${this.name}, age : ${this.age}`);
    }
    get age(){  //여기
      return this._age; //여기 같아서 무한재귀구나.
    }
    set age(value){
      if(value<0){
        console.log("거짓말 ㄴㄴ");
        return;
      }
      this._age=value;
    }
}


let user1= new User("jinwoo", 24);

user1.showInfo();
console.log(user1.age,user1._age)
console.log(Object.getOwnPropertyNames(User));

let User2 = class {
  sayHi() {
    console.log("안녕하세요.");
  }
};

let user2= new User2();
user2.sayHi();

class User3 {
  sayHi() {
    console.log("안녕하세요.");
  }
}
let user3= new User3();
user3.sayHi();
  