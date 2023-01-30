/* let 和 var 的区别
let 定义的变量有作用域的问题, 而var定义的变量没有作用域的问题
const声明的变量也有作用域的问题
推荐使用 let 和 const 定义变量和常量

常量必须初始化且不允许被重新赋值, 常量值为对象时其属性和方法允许重新赋值
 */

const var1 = "var1"; // 'const' declarations must be initialized
// var1 = ""; // Uncaught TypeError TypeError: Assignment to constant variable

const user = {
  name: "stein",
  age: 22,
};

user.name = "tommy";
user.age = 18;
console.log(user);

var var2 = "var2";

{
  // var 定义的变量没有作用域的问题
  console.log(var2); // var2
}

// var 定义的变量允许先访问再声明,但是值为undefined
console.log(var3); // undefined
var var3 = "var3";

// 事实上,let声明的变量也会被预解析,但是语法规范,let必须先初始化才能被访问
// console.log(var4); // Uncaught ReferenceError ReferenceError: var4 is not defined

// console.log(var5);
let var5 = "var5"; // Uncaught ReferenceError ReferenceError: Cannot access 'var5' before initialization

let var6;
console.log(var6); // undefined