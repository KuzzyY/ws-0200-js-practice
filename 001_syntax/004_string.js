/**
 *  4.1 文字列の長さを返却するメソッドを実装してください
 *
 */

 function length(str) {
  // lengthプロパティを使って文字列の長さを取得
  return str.length;
}
// console.log(length("good"));

/**
 *  4.2 文字列のながさが偶数の場合にtrueを返却するメソッドを実装してください
 *
 */

 function lengthIsEven(str) {
  // 文字列の長さが偶数の場合、trueを返す
  if (str.length % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
// console.log(lengthIsEven("good"));

/**
 *  4.3 文字列の先頭一文字目を返却するメソッドを実装してください
 *
 */

 function firstChar(str) {

  // スライスメソッドで1文字目（0 to 1）を返す
  return str.slice(0,1);
}
// console.log(firstChar('good'));

/**
 *  4.4 文字列の末尾一文字目を返却するメソッドを実装してください
 *
 */

 function lastChar(str) {
  // スライスメソッドで最後の文字（-1）を返す
  return str.slice(-1);
}
// console.log(lastChar('good'));

/**
 *  4.5 文字列と二つの数字a, bを渡すとa文字目から, b文字目まで
 *  を返却するメソッドを実装してください
 *
 */

 function substring(str, a, b) {
   // aからbまでを引数として指定(aを含むため - になる?)
   
  return str.substring(-a, b);
}
// console.log(substring('good', 0, 3));

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

  // aの中にbが含まれる場合、true
  if (a.includes(b)) {
    return true;
  } else {
    return false;
  }
}
// console.log(isInclude('anytime', 'any'));

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

  // 引数の長さ分だけ、for文を実行
  // 配列の中身を1文字ずつ出力する
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}
// printByChar("good");


module.exports = {
  length,
  lengthIsEven,
  firstChar,
  lastChar,
  substring,
  isInclude,
  printByChar,
};
