class User{
    //name = null;

    constructor(name){
        this.name=name;
    }
    name2 = this.name;
    
    ["show"+this.name] (){
        console.log("ASSASAASSA");
    }

    ["이건"+"되냐"](){
        console.log("이건되고?");
    }
}

let user1 = new User("jinwoo");

console.log(user1);
user1.이건되냐(); //이건되고:?
//user1.showjinwoo();

user1["added"+user1.name] = () => {console.log("Addedfunc"+this.name)};
user1["added2"+user1.name] = function(){
    console.log("added2"+this.name);
}
user1.addedjinwoo();
user1.added2jinwoo();
