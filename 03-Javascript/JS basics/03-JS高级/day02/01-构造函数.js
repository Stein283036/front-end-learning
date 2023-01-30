/* 构造函数
构造函数是专门用于创建对象的函数，如果一个函数使用 new 关键字调用，那么这个函数就是构造函数。
使用 new 关键字调用函数的行为被称为实例化
实例化构造函数时没有参数时可以省略 ()
构造函数的返回值即为新创建的对象
构造函数内部的 return 返回的值无效
注：实践中为了从视觉上区分构造函数和普通函数，习惯将构造函数的首字母大写。
 */

function Person(name = "stein", age = 22) {
  // This constructor function may be converted to a class declaration.ts(80002)
  // ts 语法对这里进行了优化,应该使用 class 声明
  console.log(this); // Person,this 此时指的就是正在被创建对象
  this.name = name;
  this.age = age;
  return this;
}

// class Person {
//   constructor(name = "stein", age = 22) {
//     // constructor Person(name?: string, age?: number): Person
//     // This constructor function may be converted to a class declaration.ts(80002)
//     // ts 语法对这里进行了优化,应该使用 class 声明
//     this.name = name;
//     this.age = age;
//   }
// }

let stein = new Person();
console.log(stein);
// instanceof 用于检测实例对象对应的构造函数
console.log(stein instanceof Person); // true
console.log(typeof Person); // function
// 引用数据类型: 数组 对象 函数
