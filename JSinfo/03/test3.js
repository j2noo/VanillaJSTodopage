let user = {
    firstName: "보라",
    sayHi() {
      let arrow = function(){
            console.log(this.firstName);
      }
      arrow();
    }
  };
  
user.sayHi(); // 보라
function MakeUser(name,age){
    this.name=name;
    this.age=age;
    this.sayHello = function(){
        console.log(this.name + " Hello~");
    };
}
let user1=new MakeUser("ASdasd",23123);
let user2=new MakeUser("jowoo",9);
user2.sayHello();