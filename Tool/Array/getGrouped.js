/**
 * 数组属性分类，将数组的某一个属性进行分组
 */

const array = [
  {
    type: "number",
  },
  {
    type: "string",
  },
  {
    type: "number",
  },
  {
    type: "boolean",
  },
  {
    type: "number",
  },
];

const groupedArray = array.reduce((result, item) => {
  if (!result[item.type]) {
    result[item.type] = [];
  }
  result[item.type].push(item);
  return result;
}, {});
