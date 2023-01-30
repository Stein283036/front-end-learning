/* 作用域
作用域规定了变量能被访问的范围,即变量只能在合法的作用域被访问

作用域分为局部作用域和全局作用域
局部作用域: 函数作用域function{}＋块级作用域{}
全局作用域: 简单理解就是局部作用域以外定义的变量

函数作用域: 函数内部定义的变量只能在函数内部访问,因为函数内定义的变量在函数被调用进方法区时的时候,为变量分配的空间在
栈内存,函数出栈的时候,栈内存就被清空了,因此外部无法访问函数内的变量

块作用域: {} 中定义的变量,只能在 {} 中访问
 */

function func1() {
  let var1 = "var1";
  console.log(var1);
}

func1();

// console.log(var1); // Uncaught ReferenceError ReferenceError: var1 is not defined

{
  let var2 = "var2";
}

console.log(var2); // Uncaught ReferenceError(引用错误) ReferenceError: var2 is not defined
