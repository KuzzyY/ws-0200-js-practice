/**
 *  3.1 0~10までを表示するメソッドを実装してください
 *
 */

function printOneToTen() {
  for (let i = -1; i < 10; i++) {
    console.log(i + 1);

    if (i === 10) {
      return;
    }
  }
}
printOneToTen();

/**
 *  3.2 0~10までの数字を数字の大きい順に表示するメソッドを実装してください
 * */

function printOneToTenDesc() {
  for (let i = 0; i < 10; i++) {
    console.log(10 - i);
  }
  console.log(0);
}
printOneToTenDesc();

/**
 *  3.3 while文を使って0~10までの数字を小さい順番に表示するメソッドを実装してください
 *
 */

function printOneToTenWhile() {
  // 再代入可能な変数let
  let x = -1;

  // xが10より小さい場合
  while (x < 10) {
    // xに1を足して再代入する
    x += 1;
    // xを出力する
    console.log(x);
  }
}
printOneToTenWhile();

/**
 *  3.4 while文を使って0~10までの数字を大きい順番に表示するメソッドを実装してください
 *
 */

function printOneToTenWhileDesc() {
  let x = 11;

  // xが0より大きい場合(0を含めて処理)
  while (x > 0) {
    x -= 1;

    console.log(x);
  }
}
printOneToTenWhileDesc();

module.exports = {
  printOneToTen,
  printOneToTenDesc,
  printOneToTenWhile,
  printOneToTenWhileDesc,
};
