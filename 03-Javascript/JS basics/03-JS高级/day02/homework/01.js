/* 
给一个字符串数组，将数组中的每一个数据拼接在一起，

let arr = [张三,李四,王五];

每个数据之间用 | 符合拼接。 如： 张三|李四|王五
 */

let ret = "";
let arr = ["张三", "李四", "王五"];
arr.forEach((item, index) => {
  if (index === arr.length - 1) {
    ret += item;
    return;
  }
  ret += item + "|";
});
console.log(ret);
