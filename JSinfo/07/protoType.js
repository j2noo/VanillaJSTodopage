
let animal= {
    eat : "grass",
    walk(){
        console.log("걷는다");
    },
};
let cow = {
    age : 3,
};
let blackCow = {
    color : "black",
};

cow.__proto__ = animal;
blackCow.__proto__ = cow;

cow.walk=()=>console.log("소가걷네");


cow.walk();
