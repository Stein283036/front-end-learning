var a = 25;

function abc() {
  // 函数内部访问变量a会优先在当前作用域寻找变量,而a是var声明的,存在作用域提升,即允许先访问在声明
  console.log(a); // undefined
  var a = 10;
}

abc();
