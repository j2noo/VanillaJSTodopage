class User {
    constructor(name) {
      this.name = name;
  
      this["show" + this.name] = () => {
        console.log(this.name);
      };
    }
  }
  
  let user1 = new User("jinwoo");
  user1.showjinwoo();
  user1["show"+user1.name]();