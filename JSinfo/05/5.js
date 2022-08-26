function f() {
    console.log( this ); // ?
  }
  
  let user = {
    g: f.bind(null) 
  };
  
  user.g();

  console.log(null)

  let id = Symbol("id");

let user = {
  name: "John",
  [id]: 123, // "id": 123은 안됨
  id : 2
};