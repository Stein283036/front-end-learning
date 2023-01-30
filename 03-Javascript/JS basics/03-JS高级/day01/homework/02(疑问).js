f1();
console.log(c);
console.log(b);
console.log(a); // Uncaught ReferenceError ReferenceError: a is not defined
function f1() {
  // var a = 9; b = 9; c = 9;
  // b 和 c 变量提升到全局作用域
  var a = (b = c = 9);
  console.log(a);
  console.log(b);
  console.log(c);
}
