/**
 *  6.1 下記データを持ったオブジェクトを返す関数を実装してください。
 *
 *  name: 'Bob'
 *  age: 32
 *  gender: 'male'
 *
 */

function getPersonObject() {
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
  const dataA = {
    person,
  };

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
  const nameNumber = {
    [persons]: 1,
    [persons]: 3,
    [persons]: 5,
    [persons]: 7,
  };

  return nameNumber;
}
// console.log(assignNumber(["Bob", "Mary", "Ann", "Mike"]));

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

 function isDuplicate(array) {
  const duplicate = {
    array,
  };
  if (array == array in duplicate) {
    return true;
  } else {
    return false;
  }
}
// console.log(isDuplicate([2, 2, 2, 2]));

module.exports = {
  getPersonObject,
  mutateObject,
  assignNumber,
  isDuplicate,
};
