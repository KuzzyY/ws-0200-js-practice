/**
 *  3.1 0~10までを表示するメソッドを実装してください
 *
 */

 function printOneToTen() {
  // xを０とする変数を定義
  let x = 0;

  // xに１を足して出力
  console.log(x);
  console.log(x + 1);
  console.log(x + 2);
  console.log(x + 3);
  console.log(x + 4);
  console.log(x + 5);
  console.log(x + 6);
  console.log(x + 7);
  console.log(x + 8);
  console.log(x + 9);
  console.log(x + 10);
}
// printOneToTen();

/**
 *  3.2 0~10までの数字を数字の大きい順に表示するメソッドを実装してください
 * */

 function printOneToTenDesc() {
  // xを10とする変数を定義
  let x = 10;

  // xに１を足して出力
  console.log(x);
  console.log(x - 1);
  console.log(x - 2);
  console.log(x - 3);
  console.log(x - 4);
  console.log(x - 5);
  console.log(x - 6);
  console.log(x - 7);
  console.log(x - 8);
  console.log(x - 9);
  console.log(x - 10);
}
// printOneToTenDesc();

/**
 *  3.3 while文を使って0~10までの数字を小さい順番に表示するメソッドを実装してください
 *
 */

function printOneToTenWhile() {
  // xを０とする変数を定義
  let x = 0;

  // xが10以下の場合、xに１を足して出力し続ける
  while (x <= 10) {
    console.log(x);
    x += 1;
  }
}

/**
 *  3.4 while文を使って0~10までの数字を大きい順番に表示するメソッドを実装してください
 *
 */

function printOneToTenWhileDesc() {
  // xを10とする変数を定義
  let x = 10;

  // xが0以上の場合、xから１を引いて出力し続ける
  while (x >= 0) {
    console.log(x);
    x -= 1;
  }
}

module.exports = {
  printOneToTen,
  printOneToTenDesc,
  printOneToTenWhile,
  printOneToTenWhileDesc
}
