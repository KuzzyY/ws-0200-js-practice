/**
 *  5.1 配列の要素を全て表示するメソッドを実装してください
 *
 */

function printArray(array) {
  // for文：配列arrayの長さ分だけループさせる
  for (i = 0; i < array.length; i++) {
    // arrayの長さ分の引数arrayを取得
    console.log(array[i]);
  }
}
console.log(printArray("test"));

/**
 *  5.2 関数内で全ての曜日を配列として宣言して返却するメソッドを実装してください
 *
 *  example:
 *     [
 *       "Monday",
 *       "Tuesday",
 *       "Wednesday",
 *       "Thursday",
 *       "Friday",
 *       "Saturday",
 *       "Sunday",
 *      ]
 *
 */
function getDays() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  for (i = 0; i < days.length; i++) {
    console.log(days[i]);
  }
}
console.log(getDays());

/**
 *  5.3 配列に特定の数があった場合にtrue、そうでない場合にfalseを返す関数を実装してください
 *
 *  example:
 *    [1, 2, 3], 1 => true
 *    [1, 2, 3], 5 => false
 *    [], 5 => false
 *
 */

function findNum(array, num) {
  return array.includes(num);
}
console.log(findNum([1, 2, 3], 4));

/**
 *  5.4 配列に重複した要素があれば、true、そうでなければfalseを返す関数を実装してください
 *
 *  example:
 *    [1, 2, 3] => false
 *    [1, 2, 2, 3] => true
 *    [] => false
 *
 */

function isDuplicate(array) {
  // 配列arrayを展開
  for (i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
console.log(isDuplicate("1223"));

function isDuplicate(array) {
  // 配列arrayを展開
  for (i = 0; i < array.length; i++) {
    if (array[i] === array[i]) {
      return true;
    }
  }
}
console.log(isDuplicate("123"));

module.exports = {
  printArray,
  getDays,
  findNum,
  isDuplicate,
};
