let obj={
    name : "ww",
    age : {
        min : 12,
        max : 19,
        avg : this,
    },
};
console.log(obj);

let obj2={
    name : "w213w",
    age() {
        return this;
    }
};
console.log(obj2.age().age().age().age().age());


let obj4={
    name : "metestOBJECT",
    age(){
        return this;
    },
};

let obj3={
    name : "me",
    age : this,
};
console.log(obj3===obj3.age);
console.log(obj3.age);


let map = new Map();
map.set(obj2, 1);
map.set('orange', 2);
map.set('meat', 4);

let ob = Object.fromEntries(map.entries()); // 맵을 일반 객체로 변환 (*)
// 맵이 객체가 되었습니다!
// obj = { banana: 1, orange: 2, meat: 4 }

console.log(ob); // 2


function unique(arr) {
    return new Set(arr);
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  console.log( unique(values) ); // 얼럿
  

  function aclean(arr) {
    let map = new Map();
  
    for (let word of arr) {
      // 단어를 글자 단위로 쪼갠 후, 알파벳 순으로 정렬한 다음에 다시 합칩니다.
      let sorted = word.toLowerCase().split('').sort().join(''); // (*)
      map.set(sorted, word);
    }
  
    return (map.values());
  }
  
  let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  
  console.log( aclean(arr) );