/**
 *  2.1 引数から与えられた値が20以上であれば
 *    "成年です。"
 *    それ以外は "未成年です。”
 *    と出力するメソッドを実装してください
 *
 */
 function printMessageByAge(age) {
  if (age > 20) {
    console.log('成年です。');
  } else {
    console.log('未成年です。');
  }
}
printMessageByAge(10);

/**
 *  2.2 引数から与えられた時間が
 *    4時から12時より前であれば、 Good Morning
 *    12時から17時より前であれば、 Hello
 *    17時以降であれば、 Good Night
 *    と出力するメソッドを実装してください
 *
 */

 function greeding(hour) {
  if (4 > hour) {
    console.log('Good Night');
  } else if (4 <= hour && 12 > hour) {
    console.log('Good Morning');
  } else if (12 <= hour && 17 > hour) {
    console.log('Hello');
  } else if (17 <= hour && 24 >= hour) {
    console.log('Good Night');
  } else {
    console.log('null');
  }
}
greeding(12);

/**
 *  2.3 引数から与えられた数字に対応する曜日を返却するメソッドを実装してください
 *    0 ・・・Sunday
 *    1 ・・・Monday
 *    2 ・・・Tuesday
 *    3 ・・・Wednesday
 *    4 ・・・Thursday
 *    5 ・・・Friday
 *    6 ・・・Saturday
 *    と出力するメソッドを実装してください
 *
 */

//  const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//  console.log(day[0]);

// 途中のコード
function getDay(day) {
  const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  console.log(day[0]);
}
getDay(0);


module.exports = {
  printMessageByAge,
  greeding,
  getDay
}
