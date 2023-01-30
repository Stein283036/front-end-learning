/* Array的常用方法
1. 推荐使用字面量方式声明数组，而不是 Array 构造函数
2. 实例方法 forEach 用于遍历数组，替代 for 循环
3. 实例方法 filter 过滤数组单元值，生成新数组
4. 实例方法 map 迭代原数组，生成新数组
5. 实例方法 join 数组单元素拼接成字符串
6. 实例方法 concat  合并两个数组，生成新数组
7. 实例方法 sort 对原数组单元值排序
8. 实例方法 splice 删除或替换原数组单元
9. 实例方法 indexOf 检索数组单元值
10. 实例方法 reverse 反转数组
11. 静态方法 from 伪数组转成数组
 */

// forEach
let arr1 = [1, 2, 3, 4, 5];
arr1.forEach((num, index, array) => {
  console.log(num);
  console.log(index);
  console.log(array);
});

// filter
// let arr1Filter = arr1.filter((value, index, array) => {
//   console.log("value" + value);
//   console.log("index: " + index);
//   console.log("array" + array);
//   // 只返回偶数
//   return value % 2 === 0;
// });
// console.log(arr1Filter);

// concat
// let arr2 = [6, 7, 8, 9, 10];
// // let arr3 = arr1.concat(6, 7, 8, 9, 10);
// let arr3 = arr1.concat(arr2);
// console.log(arr3);

// 其它方法在这里不再演示了,开发中用到的时候在学习

// join
// let arr = ["h", "e", "l", "l", "o"];
// // let arrJoin = arr.join("-");
// let arrJoin = arr.join("");
// console.log(arrJoin); // h-e-l-l-o

// reverse
// let arr = ["h", "e", "l", "l", "o"];
// let arrReverse = arr.reverse();
// console.log(arrReverse);

// indexOf
// let fruits = ["Apple", "Banana"];
// let pos = fruits.indexOf("Banana");
// console.log(pos);

// sort
// let arr = [19, 5, 20, 19, 99];
// let arrSort = arr.sort((a, b) => {
//   return a - b;
// });
// console.log(arrSort);

// Array.isArray()
// let arr = [1, 2, 3];
// let arrIsArr = Array.isArray(arr);
// console.log(arrIsArr);
