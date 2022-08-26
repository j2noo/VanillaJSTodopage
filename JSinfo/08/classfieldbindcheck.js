class Button {
    constructor(value) {
      this.value = value;
    }
    click = () => {
      console.log(this);
    }
    click2() {
        console.log(this);
    }
    a=213;
  }
  
  let button = new Button("안녕하세요.");
  
  setTimeout(button.click, 1000); // 안녕하세요.
  setTimeout(button.click2, 1000); // uindefine.

let obj = {
    value : 111,
    click : () => {
        console.log(this+"@");
    },
    click2() {
        console.log(this);
    }
}

setTimeout(obj.click, 1000); // 안
setTimeout(obj.click2, 1000); // 

console.log("ZZZ"+button.click2);
console.log("ZZZ"+Button.prototype.click2);
console.log("ZZZ"+button.a);
console.log("ZZZ"+Button.prototype.a);