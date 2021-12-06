/**
 *  5.1 配列の要素を全て表示するメソッドを実装してください
 *
 */

//  function printArray(array) {
//   const displayAll = array;
//   console.log(displayAll);
// }
// // printArray(['1','2','3','4','5','6']);

function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
// printArray(['1','2','3','4','5','6']);

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
  const listDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return listDays;
}
// console.log(getDays());

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
  const number = array;
  if (number.includes(num)) {
    return true;
  } else {
    return false;
  }
}
// console.log(findNum([1, 2, 3], 4));

/**
 *  5.4 配列に重複した要素があれば、true、そうでなければfalseを返す関数を実装してください
 *
 *  example:
 *    [1, 2, 3] => false
 *    [1, 2, 2, 3] => true
 *    [] => false
 *
 */

//  function isDuplicate(array) {
//   const duplicate = array;
//   if (duplicate.includes(duplicate)) {
//     return true;
//   } else {
//     return false;
//   }
// }
// // console.log(isDuplicate([1, 2, 2, 3]));

// function isDuplicate(array) {
//   if (array === array) {
//     return true;
//   } else {
//     return false;
//   }
// }
// // console.log(isDuplicate([1, 2, 2, 3]));

function isDuplicate(array) {
  if (array.includes(array)) {
    return true;
  } else {
    return false;
  }
}
// console.log(isDuplicate([1, 2, 2, 3]));

module.exports = {
  printArray,
  getDays,
  findNum,
  isDuplicate,
};
