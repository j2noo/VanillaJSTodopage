function f1(){
    console.log("호출해주셔서감사합니다");
}

console.log(typeof(Math)); //object
console.log(typeof(null)); //object
console.log(typeof f1);//undefined ?? function??
console.log(0 == false); //true
console.log(!!"2332");//false

let myF=function(a,b){
    return a**b;
};
console.log(myF(2,10));
console.log(myF);
function ask(question, yesF, noF){
    let ans=confirm(question);
    if(ans) yesF();
    else noF();
}
function showYes(){
    alert("니가오케이랫다");
}
function showNo(){
    alert("니가싫다매");
}
ask("점심먹을래",showYes,showNo);
ask("점심?", 
    () => {alert('yyy')}, 
    () => {alert('nn')});

let age=prompt("몇살?");
let helloF;
if(age>20){
    helloF=function(){ // if 블록 내에서 함수 선언문을 이용하여 함수를
        //선언할 경우 블록 밖에서 사용할 수 없음
        alert('성인이네');
    };
}
else {
    helloF=function(){
        alert('잼민이네');
    };
}
helloF();

let