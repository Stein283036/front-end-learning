/* 引用类型
Object 是内置的构造函数，用于创建普通对象

 */
let user1 = new Object({
  name: "stein",
  age: 22,
});

console.log(user1);
console.log(user1.constructor); // ƒ Object()
console.log(typeof user1);

// 创建对象的简写语法
let user2 = {
  name: "tommy",
  age: 22,
  walk() {
    console.log("walk");
  },
};
console.log(user2);

// Object.keys 静态方法获取对象中所有属性
let keys = Object.keys(user2);
console.log(keys); // ['name', 'age', 'walk']
// Object.values 静态方法获取对象中所有属性值
let values = Object.values(user2);
console.log(values); // ['tommy', 22, ƒ]

let user3 = {};
Object.assign(user3, user2);
console.log(user3); // {name: 'tommy', age: 22, walk: ƒ}
