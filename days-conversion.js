'use strict';
// 要素の取得
const yourDate = document.getElementById("your-date"); // 入力欄 1
const includeOrNot = document.getElementById("form");// 選択肢
const daysAfter = document.getElementById("days");// 入力欄 2
const sunameriButton = document.getElementById("sunameri");

// ボタンを押したら
sunameriButton.onclick = function () {
  // 入力欄 1 の値を取得「日付」
  const inputYourDateValue = yourDate.value;
  // 入力欄 2 の値を取得「〇日後」
  const inputDayAfter = daysAfter.value;
  const num = parseInt(inputDayAfter);

  // 加算
  const date = new Date(inputYourDateValue);
  date.setDate(date.getDate() + num);

  // 減算（起点になる日の選択）
  let radioList = includeOrNot.choice;
  let include = radioList.value;
  if (include === "include") {
    date.setDate(date.getDate() - 1);
  } else {
  }

  // スナメリの回答
  const answer = date.toLocaleDateString(); // 例)2017/5/18
  const output = `${inputDayAfter}日後は「${answer} 」です。`;
  document.getElementById("output-message").innerText = output;
  document.getElementById("output-message").classList.add("voice");
};