/* Array
Array是内置的构造函数,用于创建数组

创建数组的两种方式:
01-通过Array构造器创建
02-通过数组字面量 [] 创建

数组的内存分配在内存中同普通对象一样,其中的数据内存分配在堆中进行,分配完成后返回第一个元素的首地址给栈内存,
然后栈内存的变量持有堆中数组的首地址,因此数组名其实就是数组第一个元素的首地址
 */

let arr1 = new Array(1, 2, 3, 4);
console.log(arr1);

let arr2 = ["a", "b", "c", "d"];
console.log(arr2);

let arr3 = arr2;
arr2[0] = "A";
console.log(arr3[0]);
