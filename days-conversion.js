'use strict';
// 要素の取得
const yourDate = document.getElementById("your-date");
const sunameriButton = document.getElementById("sunameri");
const includeOrNot = document.getElementById("form");
const daysAfter = document.getElementById("days");

// ボタンを押したら
sunameriButton.onclick = function () {
  // 入力欄 1を取得「日付」
  const inputYourDateValue = yourDate.value;
  // 入力欄 2を取得「〇日後」
  const inputDayAfter = daysAfter.value;
  const num = parseInt(inputDayAfter);

  // 加算
  const date = new Date(inputYourDateValue);
  date.setDate(date.getDate() + num);

  // 起点になる日の選択
  let radioList = includeOrNot.choice;
  let include = radioList.value;
  if (include === "include") { 
    date.setDate(date.getDate() - 1);
    } else {
    // document.getElementById("choices").innerText = include;
  }  

// スナメリの回答
  const answer = date.toLocaleDateString(); // 例)2017/5/18
  const output = `${inputDayAfter}日後は「${answer} 」です。`;
  document.getElementById("output-message").innerText = output;
};


/*
let year = 2020.; 
let month = 2;
let day = 3;

let dt = new Date("year/month/day");
document.getElementById("startPoint").innerText = dt;

/*
function updateParagraph(){
  let now = new Date();
  let days = (now.getTime)
}

/*let today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1;
let date = today.getDate();
let youbi = today.getDay();
let youbis = new Array("日","月","火","水","木","金","土");
let todayYoubi = youbis[ youbi ];
let message = `今日は ${year} 年 ${month} 月 ${date} 日 (${todayYoubi}) です`;
document.getElementById("today").innerHTML = message;
*/