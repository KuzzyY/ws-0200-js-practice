/**
 *  4.1 文字列の長さを返却するメソッドを実装してください
 *
 */

 function length(str) {
  console.log(str .length);
}
length('good');

/**
 *  4.2 文字列のながさが偶数の場合にtrueを返却するメソッドを実装してください
 *
 */

 function lengthIsEven(str) {
  console.log(str .length);
  if (str .length % 2 === 0) {
    console.log('true');
  } else {
    console.log('false');
  }
}
lengthIsEven('good');

/**
 *  4.3 文字列の先頭一文字目を返却するメソッドを実装してください
 *
 */


 function firstChar(str) {
  console.log(str.slice(0, 1));
}
firstChar('good');

/**
 *  4.4 文字列の末尾一文字目を返却するメソッドを実装してください
 *
 */

 function lastChar(str) {
  console.log(str.slice(-1));
}
lastChar('good');

/**
 *  4.5 文字列と二つの数字a, bを渡すとa文字目から, b文字目まで
 *  を返却するメソッドを実装してください
 *
 */

 function substring(str, a, b) {
  console.log(str.slice(a, b));
}
substring('good', 1, 3);

/**
 *  4.6 引数に与えられた二つの引数のうち、一つ目の引数の文字列に二つ目の引数の文字列が
 *  含まれることを確認するメソッドを実装してください
 *
 *  example:
 *      "workplace", "work" => true
 *      "work", "workplace" => false
 *      "hogehoge", "" => true
 *      "hogegeho", "fugafuga" => false
 * */

 function isInclude(a, b) {
  if (a .includes(b)) {
    console.log('true');
  } else {
    console.log('false');
  }
}
isInclude('anytime', 'any');

/**
 *  4.7 引数で渡された文字列を一文字ずつ表示するメソッドを実装してください
 *
 * example:
 *   'library'
 *    出力 => 'l'
 *           'i'
 *           'b'
 *           'r'
 *           'a'
 *           'r'
 *           'y'
 *
 */

 function printByChar(str) {
  console.log(str .split(''));
}
printByChar('good');


module.exports = {
  length,
  lengthIsEven,
  firstChar,
  lastChar,
  substring,
  isInclude,
  printByChar
}
