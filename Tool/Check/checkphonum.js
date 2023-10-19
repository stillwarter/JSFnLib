/* 用户电话输入检测 */
function checkinput(number) {
  const tel = Number(number);
  const re = /^1[3,4,5,6,7,8,9][0-9]{9}$/;
  const result = re.test(tel);
  if (!result) {
    console.log("请输入正确的电话格式");
    return false;
  } else {
    return true;
  }
}
