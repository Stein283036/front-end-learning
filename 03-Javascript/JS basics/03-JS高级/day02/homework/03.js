// 给一个数组，将数组中重复的数据去除，保存到新数组中

let strs = ["a", "b", "a", "c", "d", "a", "d", "b", "c", "d", "e"];
let uniqueStrs = [];

strs.forEach((str) => {
  if (uniqueStrs.indexOf(str) === -1) {
    uniqueStrs.push(str);
  }
});

console.log(uniqueStrs);
