let range={
    from : 15,
    to : 20,
};

range[Symbol.iterator]=function(){
    //Symbol.iterator는 이터레이터 객체르 반환해야한다.
    return {
        current : this.from,
        last : this.to,

        next(){
            if(this.current<=this.last){
                return {
                    done : false,
                    value : this.current++
                };
            }
            else{
                return {
                    done : true,
                };
            }
        }

    }
}

for(let i of range){
    console.log(i);
}

let obj={
    name : "Ww",
    age : this.name,
}
console.log(obj);
let map=new Map();
map.set("name", "jinwoop");
map.set("true","false");
map.set(obj,"itsOBj");
console.log(map);

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
  ]);
  
console.log(recipeMap);  