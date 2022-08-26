let hamster = {
   
    eat(food) {
      this.stomach.push(food);
    }
  };
  
  let speedy = {
    __proto__: hamster
  };
  
  let lazy = {
    __proto__: hamster
  };
  
  // 햄스터 speedy가 음식을 먹습니다.
  speedy.eat("apple");
  console.log( speedy.stomach ); // apple
  
  // 햄스터 lazy는 음식을 먹지 않았는데 배에 apple이 있다고 나오네요. 왜 그럴까요? lazy는 배가 비어있도록 고쳐주세요.
  console.log( lazy.stomach ); // apple