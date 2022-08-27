let a=10;
console.log(window.a);  //전역 객체
console.log(window.innerHeight); //window 제어 메서드
//document.body.style.backgroundColor = "blue";

/* setInterval(()=>{
    setTimeout(() => {
        document.body.style.backgroundColor = "blue";
    }, 100);
    setTimeout(() => {
        document.body.style.backgroundColor = "red";
    }, 100);

},200);


setInterval(()=>{
    document.body.style.backgroundColor = "blue";
    setTimeout(() => {
        document.body.style.backgroundColor = "red";
    }, 100);

},200); */

console.log(navigator);
console.log(location.href);
location.href="https://ko.javascript.info/browser-environment";


console