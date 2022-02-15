/**
 *  1.1 Hello Worldという文字を出力するメソッドを定義してください
 *
 */
function helloWorld() {
  console.log("Hello World");
}

/**
 *  1.2 const を使って"hoge"という文字列を定義した変数を定義し、それを出力する関数を定義してください
 *
 */
function displayConst() {
  const hoge = "hoge";
  console.log(hoge);
}

/**
 *  1.3 let を使って"hoge"という文字列を定義した変数を定義し、それを出力する関数を定義してください
 *
 */
function displayLet() {
  let hoge = "hoge";
  console.log(hoge);
}

/**
 *  1.4 引数に渡した変数を表示するメソッドを実装してください
 *
 */
function displayArgument(arg) {
  const display = arg;
  console.log(display);
}
// displayArgument('test');

/**
 *  1.5 渡された二つの引数の合計を返却するメソッドを実装してください
 *
 */
function sumTwoArgs(a, b) {
  return a + b;
}
console.log(sumTwoArgs(1, 2));

/**
 *  1.6 渡された二つの引数の差を返却するメソッドを実装してください
 *
 */
function subtractTwoArgs(a, b) {
  return a - b;
}
console.log(subtractTwoArgs(3, 1));

/**
 *  1.7 渡された二つの引数の商を返却するメソッドを実装してください。0での割り算はnullを返却してください。
 *
 */
function quotientTwoArgs(a, b) {
  if (b !== 0) {
    return ~~(a / b);
  } else {
    return null;
  }
}
console.log(quotientTwoArgs(8, 4));

/**
 *  1.8 渡された二つの引数の積を返却するメソッドを実装してください
 *
 */
function productTwoArgs(a, b) {
  return a * b;
}
console.log(productTwoArgs(2, 4));

/**
 *  1.9 渡された引数の2で割ったあまりを返却するメソッドを実装してください
 *
 */
function remainderTwoArgs(a) {
  return a % 2;
}
console.log(remainderTwoArgs(8));

/**
 *  1.10 渡された引数が2の倍数であることを確認するメソッドを実装してください
 *
 */
function isEven(a) {
  if (a % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(5));

/**
 *  1.11 渡された二つの文字列を連結するメソッドを実装してください
 *
 */
function concatString(a, b) {
  return a + b;
}
console.log(concatString('te', 'st'));

module.exports = {
  helloWorld,
  displayConst,
  displayLet,
  displayArgument,
  sumTwoArgs,
  subtractTwoArgs,
  quotientTwoArgs,
  productTwoArgs,
  remainderTwoArgs,
  isEven,
  concatString,
};
