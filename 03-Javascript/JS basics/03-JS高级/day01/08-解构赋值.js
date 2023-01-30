/* 解构赋值
解构赋值是一种快速为变量赋值的简洁语法，本质上仍然是为变量赋值，分为数组解构、对象解构两大类型
数组解构是讲变量值赋给和数组长度对应的多个变量
对象解构是讲对象的属性和方法赋给多个对应的变量
变量的数量大于单元值数量时，多余的变量将被赋值为  undefined
变量的数量小于单元值数量时，可以通过 ... 获取剩余单元值，但只能置于最末位
 */

let arr1 = ["a", "b", "c", "d", "e"];
let [a, b, c, d, e, f] = arr1;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f); // undefined

let arr2 = ["a", "b", "c", "d", "e"];
let [g, h, i, ...other] = arr2;
console.log(g);
console.log(h);
console.log(i);
console.log(other);

let user = {
  name: "stein",
  play: function () {
    console.log("play");
  },
};

let { name, play } = user;
console.log(name);
play();
