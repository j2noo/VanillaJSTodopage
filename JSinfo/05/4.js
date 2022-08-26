let user = {
    firstName: "John",
    sayHi() {
      console.log(`Hello, ${this.firstName}!`);
    }
  };
  
  setTimeout(user.sayHi, 1000); // Hello, undefined!
  let newF=user.sayHi.bind(user);
  setTimeout(newF, 1000); // Hello, undefined!

  newF();

  function f() {
    console.log( this ); // ?
  }
  f();
  let user2 = {
    g: f.bind(null)
  };
  
  user2.g();