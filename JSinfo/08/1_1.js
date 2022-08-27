class Obj  {
    name = "jinwoo";
    fname = "Park";

    get fullName() { //objfullpName 을 실행하면 실행되는 코드
        return this.fname + " " + this.name;
        // fullName프로퍼티는 함수가 아니지만, 접근자 프로퍼티는 함수이므로 this 사용가능
    }

    set fullName(value) { //obj.fullName = value 을 실행하면 실행되는 코드
        let arr=value.split(" ");
        this.fname=arr[0];
        this.name=arr[1];
        //[this.name, this.fname] = value.split(" ");
    }
};
let obj = new Obj();
console.log(obj.fullName); //함수가아닌데?
obj.fullName="Lee Yujae";
console.log(obj.fullName); 

console.log(Object.keys(obj));

console.log(obj);
