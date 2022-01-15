/**
 *  6.1 下記データを持ったオブジェクトを返す関数を実装してください。
 *
 *  name: 'Bob'
 *  age: 32
 *  gender: 'male'
 *
 */

function getPersonObject() {
  // オブジェクトprofileを定義
  const profile = {
    name: "Bob",
    age: 32,
    gender: "male",
  };
  return profile;
}
// console.log(getPersonObject());

/**
 *  6.2 下記データAが引数で与えられた場合にデータBに書き換える関数を実装してください。
 *
 *  Data A:
 *    name: 'Bob'
 *    age: 32
 *    gender: 'male'
 *  Data B:
 *    name: 'Mary'
 *    age: 37
 *    gender: 'female'
 *
 */

function mutateObject(person) {
  // dataAオブジェクトに引数personを定義
  const dataA = {
    person,
  };

  // console.log(dataA);

  // ピリオド演算子でdataAをdataBのオブジェクトに書き換え
  dataA.dataB = { name: "Mary", age: 37, gender: "female" };
  return dataA.dataB;
}
// console.log(mutateObject({ name: "bob", age: 32, gender: "male" }));

/**
 *  6.3 下記引数で渡される配列にランダムな1 ~10の数字を割り振り、オブジェクトとして返す
 *      関数を実装してください
 *
 *    [
 *      'Bob',
 *      'Mary',
 *      'Ann',
 *      'Mike'
 *    ]
 *
 *   output:
 *     {
 *       Bob: [Random Number],
 *       Mary: [Random Number],
 *       Ann: [Random Number],
 *       Mike: [Random Number]
 *     }
 *
 */

function assignNumber(persons) {
  // 空のオブジェクトを作成
  const obj = {};

  // 配列personsを１つずつ取得するfor文
  for (let i = 0; i < persons.length; i++) {
    // 1-10までのランダムな整数を作成
    const num = Math.floor(Math.random() * 10) + 1;

    // 配列personsの中身を一つずつとってくる
    const key = persons[i];

    // keyとvalueを追加（key: value）
    obj[key] = num;
  }

  // for文内でkeyとvalueを追加したobjを返す
  return obj;
}
console.log(assignNumber(["Bob", "Mary", "Ann", "Mike"]));

/**
 *  6.4 配列に重複した要素があれば、true、そうでなければfalseを返す関数を実装してください
 *      但し、オブジェクトを使って実装すること
 *
 *  example:
 *    [1, 2, 3] => false
 *    [1, 2, 2, 3] => true
 *    [] => false
 *
 */

// function isDuplicate(array) {
//   const duplicate = {
//     array,
//   };
//   if (array == array in duplicate) {
//     return true;
//   } else {
//     return false;
//   }
// }
// // console.log(isDuplicate([2, 2, 2, 2]));

function isDuplicate(array) {
  const str = new Set(array);
  return str.size !== array.length;
}
// console.log(isDuplicate([1, 2, 3]));

module.exports = {
  getPersonObject,
  mutateObject,
  assignNumber,
  isDuplicate,
};
