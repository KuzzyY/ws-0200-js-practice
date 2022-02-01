/**
 *  クラスの定義
 *
 *  ※※※ main関数は修正しないでください！！※※※
 *
 *  1. PersonクラスにインスタンスメソッドsayHi()を実装してください。
 *     sayHi()メソッドでは、 Hi!! という文字列を標準出力するように実装してください
 *  2. Personクラスにクラスメソッドdescribe()を実装してください
 *     describeメソッドでは、This is a Person class という文字列を表示するように実装してください
 *  3. Personクラスにname, age, bioフィールドを追加してください
 *     デフォルト値はname => '', age => 0, bio => ''
 *  4. Personクラスにコンストラクタを宣言して、name, age, bioフィールドを初期化できるようにしてください
 *  5. PersonクラスにisUnderageのゲッターを宣言してくだい。メソッドでは、ageが20歳未満であればtrue,
 *     そうでなければfalseを返すように実装してください
 *  6. 下記のmain関数が動くように、それぞれ実装をしてください。main関数の修正は不要です。
 *  　　1 ~ 5 が完了していれば、toStringのメソッドを実装するだけで大丈夫です。
 *     toStringは下記の内容の文字列が返却されることが期待値です。(先頭、末尾の空白は不要）
 *
 *      name: ichiro, age: 54, bio: I like to play baseball
 *
 */

class Person {
  // 1 インスタンスメソッドsayHi()を実装
  // クラスメソッド
  sayHi() {
    console.log("Hi!!");
  }

  // // 2 クラス（静的）メソッドdescribe()を実装
  static describe() {
    console.log("This is a Person class");
  }

  // // 3,4 コンストラクタを宣言して、name, age, bioフィールドを初期化
  constructor(name = "", age = 0, bio = "") {
    // 元のコード
    // if (name) {
    //   this.name = name;
    // } else {
    //   this.name = "";
    // }
    // if (age) {
    //   this.age = age;
    // } else {
    //   this.age = 0;
    // }
    // if (bio) {
    //   this.bio = bio;
    // } else {
    //   this.bio = "";
    // }

    // 引数に初期値を設定し、フィールドを初期化したコード
    this.name = name;
    this.age = age;
    this.bio = bio;

    // console.log(name, age, bio);
  }

  // // 5 ゲッターを宣言
  get isUnderage() {
    // console.log(this.age < 20);

    return this.age < 20;
  }

  // // 6 フィールドの文字列を返却
  toString() {
    // return name, age, bio;

    // 元の書き方
    // return "name: " + this.name + ", age: " + this.age + ", bio: " + this.bio;

    // テンプレート文字列を使った書き方
    return `name: ${this.name}, age: ${this.age}, bio: ${this.bio}`;

    // return constructor();
  }
}

// クラスをデバックする際は、インスタンス化→呼び出し
// const person = new Person(name, age, bio);

// let person = new Person();

// インスタンス化（実態化）
// const person = new Person("ichiro", 19, "I like to play baseball");

// person.sayHi();
// person.describe();
// console.log(person.isUnderage);
// console.log(person.toString());

// 最初に挫折した時のコード
// class Person {
//   // 1 メソッドsayHi()を実装
//   sayHi() {
//     console.log("Hi!!");
//   }

//   // 2 メソッドdescribe()を実装
//   describe() {
//     console.log("This is a Person class");
//   }

//   // 3,4 コンストラクタを宣言して、name, age, bioフィールドを初期化
//   constructor(name, age, bio) {
//     this.name = "";
//     this.age = 0;
//     this.bio = "";
//   }

//   // 5 ゲッターを宣言
//   get isUnderage() {
//     console.log(age <= 20);
//   }

//   // 6 フィールドの文字列を返却
//   toString() {
//     return this.name, this.age, this.bio;
//   }
// }

function main() {
  const person = new Person("ichiro", 54, "I like to play baseball");
  person.sayHi();
  Person.describe();
  person.isUnderage;

  person.bio = "I like to play basketball";
  return person.toString();
}

module.exports = {
  Person,
  main,
};
