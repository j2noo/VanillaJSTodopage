let obj={
    name : "jonwoo",
    showName : () => console.log(this.name),
    showName2() {
        let f = () =>console.log(this.name);
        return f;
    },
    showName3() {
        console.log(this.name);
    }

}

obj.showName();
let ff=obj.showName2();
ff();
obj.showName3();

let descriptor = Object.getOwnPropertyDescriptor(obj, "name");
console.log(descriptor);
Object.defineProperty(obj,"name", {writable : false});
console.log(Object.getOwnPropertyDescriptor(obj, "name"));

obj.name="gkgk";
console.log(obj.name); //변경이 안되네?