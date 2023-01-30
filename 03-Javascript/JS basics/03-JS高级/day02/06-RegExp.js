/* RegExp
RegExp: 内置的构造函数，用于创建正则表达式 Regular Expression
推荐使用字面量定义正则表达式，而不是 RegExp 构造函数
RegExp 静态属性 1、2、$3、... 获取正则分组单元
 */

// let re = /^\w{4}$/;
let re = /^\d{4}$/;
let ret1 = re.test('aaaa');
console.log(ret1);