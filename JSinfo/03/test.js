let obj={
    name : "jonwoo",
    age : 10,
    age2 : 9,
    3 : "3",
    2 : "2",
};


console.log(obj);

function makeObj(name, age){
    return {
        name : name,
        age : age,
    };
}
function makeObj2(name, age){
    return {
        name,
        age,
    };
}
let obj2=makeObj2("jino",234);
console.log("name" in obj2);
for(prop in obj){
    console.log(obj[prop]);
}
for(let i=1; i<=100;i++){
    console.log(`예뻐${i}번`);
  }