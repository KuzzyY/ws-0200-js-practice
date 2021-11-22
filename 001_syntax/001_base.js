/**
 *  1.1 Hello Worldという文字を出力するメソッドを定義してください
 *
 */
function helloWorld() {
  console.log('Hello World');
}
helloWorld();

/**
 *  1.2 const を使って"hoge"という文字列を定義した変数を定義し、それを出力する関数を定義してください
 *
 */
 function displayConst() {
  const Hoge = 'hoge';
  console.log(Hoge);
}
displayConst();

/**
 *  1.3 let を使って"hoge"という文字列を定義した変数を定義し、それを出力する関数を定義してください
 *
 */
function displayLet() {
  let Hoge = 'hoge';
  console.log(Hoge);
}
displayLet();

/**
 *  1.4 引数に渡した変数
 * を表示するメソッドを実装してください
 *
 */
 function displayArgument(arg) {
  return arg;
}
console.log(displayArgument('sampleArg'));

/**
 *  1.5 渡された二つの引数の合計を返却するメソッドを実装してください
 *
 */
// function sumTwoArgs(a, b) {
//   return a + b;
// }
// console.log(sumTwoArgs(1, 2));

function sumTwoArgs(a, b) {
  console.log(a + b);
}
sumTwoArgs(1,2);

/**
 *  1.6 渡された二つの引数の差を返却するメソッドを実装してください
 *
 */
function subtractTwoArgs(a, b) {
  return a - b;
}
console.log(subtractTwoArgs(1, 2));



/**
 *  1.7 渡された二つの引数の商を返却するメソッドを実装してください。0での割り算はnullを返却してください。
 *
 */
 function quotientTwoArgs(a, b) {
  if (a && b !== 0){
    console.log(a / b);
  } else {
    console.log('null');
  }
}
quotientTwoArgs(1,3);



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
console.log(remainderTwoArgs(5));

/**
 *  1.10 渡された引数が2の倍数であることを確認するメソッドを実装してください
 *
 */
 function isEven(a) {
  if (a % 2 === 0) {
    console.log('2の倍数である');
  } else {
    console.log('2の倍数ではない');
  }
}
isEven(6);


/**
 *  1.11 渡された二つの文字列を連結するメソッドを実装してください
 *
 */
 function concatString(a, b) {
  console.log(a + b);
}
console.log(concatString('hot', 'dog'));


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
  concatString
}
