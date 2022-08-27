let id=Symbol("id");
let obj={
    name : "2",
    obj1 : {
        age : 2,
    }
};
console.log(obj);
console.log(123456789..toString(10));
console.log(`진우는 ${1+2}살`);


let arr=new Array();
let arr2=[123,234,345];
console.log(arr2.shift());
console.log(arr2);
for(let num of arr2){
    console.log(num); 
}
for(let i in arr2){
    console.log(arr2[i]);
}
console.log(arr2.toString());

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];
  
  let user = users.find((item,nam) => item.id == 1);
  
  console.log(user.name); // John