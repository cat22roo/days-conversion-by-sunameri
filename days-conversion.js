'use strict';
// 要素の取得
const yourDate = document.getElementById("your-date"); // 入力欄 1（日付）
const includeOrNot = document.getElementById("form"); // 選択肢 1（含む/含まない）
const days = document.getElementById("days"); // 入力欄 2（〇日）
const afterOrAgo = document.getElementById("after-ago"); // 選択肢 2（〇日前 / 〇日後）
const idx = afterOrAgo.selectedindex; // selectedで選択されている値の番号取得
const sunameriButton = document.getElementById("sunameri"); // スナメリさんに聞くボタン
const voiceArea = document.getElementById("output-message"); // 回答エリア
const resetBtn = document.getElementById("reset"); // リセットボタン
resetBtn.style.display = "none"; // デフォルトはリセットボタン非表示

// ボタンを押したら
sunameriButton.onclick = function () {
  // 入力欄 1 の値を取得「日付」
  const inputYourDateValue = yourDate.value;
  // 入力欄 2 の値を取得「〇日」
  const inputDay = days.value;
  const num = parseInt(inputDay);
  
  // 選択肢 2 の値が「後」selectedIndex[1]だったら、加算する
  if (idx === 1 ) {
  const date = new Date(inputYourDateValue);
  date.setDate(date.getDate() + num);
  // 選択肢 2 の値が「前」selectedIndex[0]だったら、減算する
  } else {
    date.setDate(date.getDate() - num);
}
const answer = date.toLocaleDateString(); // 例)2017/5/18
const output = `${inputDay}日後は「${answer} 」です。`;
console.log(output);

/**
  // 減算（起点になる日の選択）
  let radioList = includeOrNot.choice;
  let include = radioList.value;
  if (include === "include") {
    date.setDate(date.getDate() - 1);
  } else {
  }
  
  // 0 がキーボード入力できてしまうので、アラートを表示し処理中断
  if (num === 0) {
    alert("0 は数える意味がありません");
    return;
  }

  // 回答がカラの場合は、アラートを表示して処理を終了
  if (inputYourDateValue === "" || include === "" || inputDay === "") {
    alert("正しく入力できていません");
    return;
  }

  // スナメリの回答
  const answer = date.toLocaleDateString(); // 例)2017/5/18
  const output = `${inputDay}日後は「${answer} 」です。`;
  voiceArea.innerText = ''; // 一度カラにする
  const header = document.createElement('h1');
  header.innerText = output;
  voiceArea.classList.add("voice");
  voiceArea.appendChild(header);
  resetBtn.style.display = "block"; // リセットボタン表示

  // リセットボタンの処理
  resetBtn.onclick = function () {
    voiceArea.appendChild(header).remove();
    voiceArea.classList.remove("voice");
    resetBtn.style.display = "none";
  };
 */

};
