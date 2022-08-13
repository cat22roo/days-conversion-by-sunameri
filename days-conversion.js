'use strict';
const yourYear = document.getElementById("your-year");
const yourMonth = document.getElementById("your-month");
const yourDate = document.getElementById("your-date");
const sunameriButton = document.getElementById("sunameri");
const includeOrNot = document.getElementById("form");
const daysAfter = document.getElementById("days");

sunameriButton.onclick = function () {
  const inputYearValue = yourYear.value;
  const inputMonthValue = yourMonth.value;
  const inputDateValue = yourDate.value;
  const inputDayAfter = daysAfter.value;
  const output = `入力された内容は「${inputYearValue} 年 ${inputMonthValue} 月 ${inputDateValue} 日 の ${inputDayAfter} 日後」です。`;
  document.getElementById("output-message").innerText = output;
  let radioList = includeOrNot.choice;
  let include = radioList.value;
  if (include === "") { // 未選択状態
    } else {
    document.getElementById("choices").innerText = include;
  }
};




/*
let year = 2020.; 
let month = 2;
let day = 3;

let yourYear = 2020.; 
let yourMonth = 2;
let yourDay = 3;

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
