let animal = {
    walk () {
        console.log("walk");
        this.isWalk=1;
    },
    imMom : "@",
}
let cow={
    age : 1,
    __proto__ : animal,
}

cow.walk();
console.log(animal.isWalk);

console.log(Object.keys(cow));  
for(let prop in cow){
    if(cow.hasOwnProperty(prop)){
        console.log("내꺼야"+prop);
    }
    else{
        console.log("엄마꺼야야"+prop);
    }
}

console.log(animal.__proto__.__proto__);