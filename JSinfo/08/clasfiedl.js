/* class User {
    name = prompt("이름을 알려주세요.", "보라");
  }
  
  let user = new User();
  alert(user.name); // 보라
  let user2 = new User();
  alert(user2.name);
 */
  class Button {

    a=1;
    constructor(value) {
      this.value = value;
    }
  
     click2 = function() {
      console.log(this.value+"화살표아님"); //애는 this undefined
    } 
    click = () => { console.log(this.value + this.a+"화살표");} 
    //애는 this가 buttonn

    age = this.value;
    [this.value] () {
      console.log("123123");
    }
  }
  
  let button = new Button("안녕하세요.");

  button.click();
  button.click2();

  setTimeout(button.click, 1000);  //1초후안녕하새ㅔ요
  setTimeout(button.click2, 1000); // undefined
  //console.log(button.value);
  console.log(button);
  //setTimeout(button.click.bind(button), 1000); // undefined

