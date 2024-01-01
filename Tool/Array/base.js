/**
 * 删除某数组中的某个元素
 * 暂时只支持下标删除
 */
function delElement(arr, index) {
  return arr.slice(index - 1, index);
}
