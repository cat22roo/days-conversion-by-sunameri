'use strict';
// 要素の取得
const yourDate = document.getElementById("your-date"); // 入力欄 1（日付）
const includeOrNot = document.getElementById("form"); // 選択肢（含める/含めない）
const daysAfter = document.getElementById("days"); // 入力欄 2（〇日後）
const sunameriButton = document.getElementById("sunameri"); // 「スナメリさんに聞く」ボタン
const voiceArea = document.getElementById("output-message"); // 回答エリア
const resetBtn = document.getElementById("reset"); // リセットボタン
resetBtn.style.display = "none"; // デフォルトはリセットボタン非表示

// 「スナメリさんに聞く」ボタンを押したら
sunameriButton.onclick = function () {
  // 入力欄 1 の値を取得「日付」
  const inputYourDateValue = yourDate.value;
  // 入力欄 2 の値を取得「〇日後」
  const inputDayAfter = daysAfter.value;
  const num = parseInt(inputDayAfter);

  // 加算
  const date = new Date(inputYourDateValue);
  date.setDate(date.getDate() + num);

  // 減算（起点になる日が含まれる場合）
  const radioList = includeOrNot.choice;
  const include = radioList.value;
  if (include === "include") {
    date.setDate(date.getDate() - 1);
  } else {
      ;  // 何もしない
  }

  // 0 の場合は、アラート表示し処理を中断
  if (num === 0) {
    alert("0 は数える意味がありません");
    return;
  }

  // 回答がカラの場合は、アラートを表示して処理を終了
  if (inputYourDateValue === "" || include === "" || inputDayAfter === "") {
    alert("正しく入力できていません");
    return;
  }

  // スナメリの回答
  const answer = date.toLocaleDateString(); // 例)2017/5/18
  const output = `${inputDayAfter}日後は「${answer} 」です。`;
  voiceArea.innerText = ''; // 一度カラにする
  const header = document.createElement('h1');
  header.innerText = output;
  voiceArea.classList.add("voice");
  voiceArea.appendChild(header);
  resetBtn.style.display = "block"; // リセットボタン表示

  // リセットボタンの処理
  resetBtn.onclick = function () {
    voiceArea.appendChild(header).remove();
    voiceArea.classList.remove("voice"); // スナメリの回答を削除
    resetBtn.style.display = "none"; // リセットボタン非表示
  };
};