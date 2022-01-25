/**
 *  継承
 *
 *  Animalクラスを継承するDog, Duck, Chikenクラスを実装してください
 *  main関数は編集不要です。
 *
 *  Dogクラス
 *    typeフィールド: dog
 *    barkメソッド: wang, wang! を標準出力
 *  Duckクラス
 *    typeフィールド: duck
 *    barkメソッド: quack, quack! を標準出力
 *  Chickenクラス
 *    typeフィールド: chicken
 *    barkメソッド: cock-a-doodle-do! を標準出力
 *
 */

class Animal {
  type = "animal";

  breeth() {
    console.log("breezing");
  }

  who() {
    console.log(this.type);
  }

  bark() {
    throw Error("not implemented");
  }
}

/* ↓ ↓ ↓ こちらに実装 */
class Dog extends Animal {

  constructor(type) {
    // typeフィールド: dog
    super(type);

    this.type = type;
  }
  
  // barkメソッド: wang, wang! を標準出力
  bark() {
    // return "wang, wang!";
    console.log("wang, wang!");
  }

}

class Duck extends Animal {
  constructor(type) {
    super(type);
    this.type = type;
  }

  bark() {
    // return "wang, wang!";
    console.log("quack, quack!");
  }
}

class Chicken extends Animal {
  constructor(type) {
    super(type);
    this.type = type;
  }

  bark() {
    // return "wang, wang!";
    console.log("cock-a-doodle-do!");
  }
}
/* ↑ ↑ ↑ こちらに実装 */

function main() {
  const dog = new Dog();
  const duck = new Duck();
  const chicken = new Chicken();

  dog.who();
  duck.who();
  chicken.who();

  dog.bark();
  duck.bark();
  chicken.bark();
}

module.exports = {
  main,
  Chicken,
  Dog,
  Duck,
};
