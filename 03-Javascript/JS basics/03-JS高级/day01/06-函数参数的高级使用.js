/* 函数参数的高级使用
函数形参默认值
动态参数
剩余参数
 */

function func1(var1 = "var1", var2 = "var2") {
  console.log(var1);
  console.log(var2);
}
func1();
func1("VAR1");
func1("VAR1", "VAR2");

function func2(var1) {
  console.log(var1);
}
// 如果调用函数不传实参,且形参也没有默认值,那么参数的默认为undefined
func2();

function func3() {
  // arguments是函数内置的伪数组变量,它包含了调用函数时传入的所有实参
  console.log(arguments); // Arguments(2) ['var1', 'var2', callee: ƒ, Symbol(Symbol.iterator): ƒ]
  for (let index = 0; index < arguments.length; index++) {
    const element = arguments[index];
    console.log(element);
  }
}
func3("var1", "var2");

function func4(baseURL, ...other) {
  console.log(baseURL);
  // ...是语法符号,置于函数形参的最后一个位置,用于获取多余的实参
  console.log(other); // ['get', 'post']
}
func4("http://google.com", "get", "post");
