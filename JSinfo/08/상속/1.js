class Animal {
    constructor(name) {
        this.name = name;
        this.age=1;
    }

    run(speed) {
        this.speed=speed;
        console.log(this.name + "run! with"+this.speed);
    }
}
class Rabbit extends Animal {
    constructor(name,color){
        super("sss");
        this.name=name;
        this.color=color;
    }
    hide(time){
        this.time=time;
        console.log(this.time+"초 동안 숨네"+this.age+ "살 토기새기끼");
    }
    run(speed){
        super.run(speed);
        this.hide(200);
    }
    static jump(high) {
        console.log(`${high}만큼뛰어라개같은${this.color}색토끼야`);
    }
}


let rabbit = new Rabbit("유재","black");
console.log(rabbit);
Rabbit.jump(21313);
