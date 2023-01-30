/* 
继承是面向对象编程的另一个特征，通过继承进一步提升代码封装的程度，JavaScript 中大多是借助原型对象实现继承的特性。

 */

// 封装公共的特性
function Person() {
  this.arms = 2;
  this.legs = 2;
  this.eyes = 2;
  this.walk = function () {};
  this.sing = function () {};
  this.sleep = function () {};
}

// 封装中国人的行为特征
function Chinese() {
  // 中国人的特征
  //   this.arms = 2;
  //   this.legs = 2;
  //   this.eyes = 2;

  this.skin = "yellow";
  this.language = "中文";

  // 中国人的行为
  //   this.walk = function () {};
  //   this.sing = function () {};
  //   this.sleep = function () {};
}

// 封装日本人的行为特征
function Japanese() {
  // 日本人的特征
  //   this.arms = 2;
  //   this.legs = 2;
  //   this.eyes = 2;

  this.skin = "yellow";
  this.language = "日文";

  // 日本人的行为
  //   this.walk = function () {};
  //   this.sing = function () {};
  //   this.sleep = function () {};
}

// console.log(Chinese.prototype.constructor);

// 重新赋值 prototype
const person = new Person();
Chinese.prototype = person;
Chinese.prototype.constructor = Chinese;
// console.log(Chinese.prototype);
console.log(Chinese.prototype.constructor);

const chinese = new Chinese();
console.log(chinese);

Japanese.prototype = person;
Japanese.prototype.constructor = Japanese;
const japanese = new Japanese();
console.log(japanese);
