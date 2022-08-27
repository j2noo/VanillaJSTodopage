class User {
    constructor(name){
        this.name = name;
    }
    checkThis = this.name;

}

let user1 = new User("jinwoo");
console.log(user1);