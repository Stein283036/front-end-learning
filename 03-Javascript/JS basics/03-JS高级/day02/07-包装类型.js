/* 包装类型(即基本数据类型对应的包装类)
在 JavaScript 中的字符串、数值、布尔具有对象的使用特征，如具有属性和方法
之所以具有对象特征的原因是字符串、数值、布尔类型数据是 JavaScript 底层使用 Object 构造函数“包装”来的，被称为包装类型。

String 是内置的构造函数，用于创建字符串

1. 推荐使用字面量方式声明字符串，而不是 String 构造函数
// 以下的字符串操作在开发中有需求在使用
2. 实例属性 length 用来获取字符串的度长 常用
3. 实例方法 split 用来将字符串拆分成数组 常用
4. 实例方法 toUpperCase 用于将字母转换成大写 常用
5. 实例方法 toLowerCase 用于将字母转换成小写 常用
6. 实例方法 slice 用于字符串截取 常用
7. 实例方法 indexOf  检测是否包含某字符 常用
8. 实例方法 startsWith 检测是否以某字符开头 常用
9. 实例方法 endsWith 检测是否以某字符结尾 常用
10. 实例方法 replace 用于替换字符串，支持正则匹配 常用
11. 实例方法  padStart 固定长度字符开始位置打补丁
12. 实例方法  padEnd 固定长度字符结束位置打补丁
13. 实例方法 match 用于查找字符串，支持正则匹配 常用
 */

// 使用字面量创建字符串
let str1 = "hello world";
console.log(typeof str1); // string
let str1EndsWith = str1.endsWith("world"); // string类型的变量调用方法时,底层会进行类型包装,将它包装成String的对象
console.log(str1.length);

let num1 = 12.345;
let num1Fixed = num1.toFixed(2); // Returns a string representing a number in fixed-point notation.
console.log(num1Fixed);

// 使用构造函数创建字符串
let str2 = new String("hello world");
console.log(typeof str2); // object
console.log(str2);

console.log(str1.constructor === str2.constructor); // true
console.log(str1 instanceof String); // false
console.log(str2 instanceof String); // true

// 使用构造函数创建数值
// 推荐使用字面量方式声明数值，而不是 Number 构造函数
let num2 = new Number("12.34");
let num3 = 12.34;
console.log(num2);
console.log(num2 == num3); // true
console.log(num2 === num3); // false
console.log(typeof num2); // object
console.log(typeof num3); // number

// 使用构造函数创建布尔值
// 推荐使用字面量方式声明布尔值，而不是 Boolean 构造函数
let b1 = new Boolean(10 > 5);
let b2 = 10 > 5;
console.log(b1); // Boolean (true)
console.log(b2);
console.log(b1.constructor === b2.constructor);

// // 无论是引用类型或是包装包类型(甚至基本数据类型也有)都包含两个公共的方法 toString 和 valueOf
// let num4 = 10;
// console.log(num4.valueOf());

// let user = {
//   address: "美加印象",
//   phone: "17710450421",
// };
