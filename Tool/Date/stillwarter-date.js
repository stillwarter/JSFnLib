/***
 * 这个文件与时间日期有关
 */

/* 获取日期（年月日） */
function getdailydate() {
  let date = "";
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();
  date = `${year}-${month}-${day}`;
  return date;
}

/* 获取日期（本周日期） */
function getdateweek() {
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const day = new Date().getDate();
  const index = "7123456".charAt(new Date().getDay());

  const startday = day - index + 1;
  const enday = startday + 6;

  const startTime = `${year}年${month}月${startday}日 `;
  const endTime = `${year}年${month}月${enday}日`;

  return { startTime, endTime };
}

/* 获取日期-年月 */
function getdateym() {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  return `${year}年${month}月`;
}

/* 获取日期-星期 */
function getdatedayname() {
  return "7123456".charAt(new Date().getDay());
}


/* 时间戳转换为时间 */
export function timestampToTime(timestamp) {
  timestamp = timestamp ? timestamp : null;
  let date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  let Y = date.getFullYear() + "-";
  let M =
    (date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1) + "-";
  let D = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " ";
  let h =
    (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
  let m =
    (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
    ":";
  let s = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  return Y + M + D + h + m + s;
}
