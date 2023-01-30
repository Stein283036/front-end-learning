/* 闭包
闭包是一种比较特殊的函数，使用闭包能够访问函数作用域中的变量。从代码形式上看闭包是一个做为返回值的函数
 */

function foo() {
  let i = 0;
  function bar() {
    console.log(++i);
  }
  return bar;
}

// 接收foo函数的返回值 - 闭包函数
let bar = foo();
bar();
