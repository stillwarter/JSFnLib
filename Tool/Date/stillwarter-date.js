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
