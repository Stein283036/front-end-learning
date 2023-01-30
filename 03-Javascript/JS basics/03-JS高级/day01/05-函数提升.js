/* 函数提升
含义: 函数可以在声明之前就被调用 - 开发中的确会使用到,但是最好还是先声明在调用

函数表达式不存在提升的现象
 */

foo();
// 具名函数提升存在函数提升现象
function foo() {
  console.log("i am foo");
}

// bar(); // Uncaught TypeError TypeError: bar is not a function
// 匿名函数不存在函数提升现象 因为bar是一个变量,预解析var bar,因此会报bar is not a function

var bar = function () {
  console.log("i am bar");
};
console.log(typeof bar); // function
// console.log(var1);

// 预解析: 代码执行前,解析器会先将 var声明(不是赋值)的变量(只定义不赋值) 和 function 函数进行解析, 提升解析
// 到当前作用域的开始,函数的预解析优先变量的预解析
let var1 = "var1";

console.log(typeof var2); // function

var var2 = "var2";
function var2() {
  console.log("var2");
}
