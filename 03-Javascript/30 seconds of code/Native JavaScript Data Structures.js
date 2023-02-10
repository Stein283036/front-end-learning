// https://www.30secondsofcode.org/articles/s/js-native-data-structures

/* 
Arrays
An array is a linear data structure that represents a collection of elements. 
In JavaScript, arrays don't have a fixed size, while their contents can be of any valid type, even arrays themselves. 
Arrays are probably the most commonly used data structure and come with a plethora of methods that allow easy manipulation and transformation of their contents.
 */
const nums = [1, 2, -1, -2]
const chars = Array.from('programming')
// console.log(nums)
// console.log(chars)
nums.push(6)
nums.push(4, 9)
chars.unshift('I', 'love')
// 通过 数组的 length 属性获取数组的长度
console.log(nums.length)
console.log(nums[nums.length - 1])
console.log(chars)
// slice 返回一个数组的部分 如果 start 为 undefined 那么索引从 0 开始 start 和 end 都可以使用负数索引
console.log(nums.slice(1, 3))
// 数组 nums 中每个元素平方后返回新的数组
console.log(
  nums.map((num, index) => {
    console.log(num, index) // num 是每次迭代数组的元素 index 是每次迭代元素的索引
    return num << 1
  })
)
// 使用 filter 过滤数组中的奇数 即只返回偶数组成的新数组
console.log(nums.filter((num) => num % 2 === 0))
// 使用 reduce 对数组求和
console.log(nums.reduce((acc, num) => acc + num, 0))
// 使用 reverse 数组 该方法会就地修改原数组 而不是返回新的数组 恰恰相反 reverse 返回指向原数组的引用
console.log(nums.reverse())
console.log(chars.reverse())
// 使用 join 拼接数组中的元素
console.log(chars.join(''))

/* 
Sets
A set is a linear data structure that represents an ordered collection of unique values. 
Sets in JavaScript can store any valid type of value, however each value can only occur once based on value equality checking.
 */
const nums2 = new Set([1, 2, 3, 3])
console.log(nums2) // Set(3) { 1, 2, 3 }
// console.log(typeof nums2)
nums2.add(4, 5, 2)
console.log(nums2.size)
console.log(nums2.delete(3))
console.log(nums2.has(3))
console.log(nums2.has(2))
// Set 的 keys 和 values 方法返回的都是可以迭代的值的集合
console.log(nums2.keys())
console.log(nums2.values())
console.log(...nums2)
nums2.clear()
console.log(nums2.size)

/* 
Maps
A map is an associative data structure that represents a keyed collection of elements. 
Each key in a JavaScript Map has to be unique and either a primitive value or an object, whereas the values of the map can be of any valid type.
*/
const workers = new Map()
// 添加键值对
workers.set('worker1', { name: 'stein', age: 22, gender: 'male' })
workers.set('worker2', { name: 'tommy', age: 23, gender: 'male' })
workers.set('worker3', { name: 'anna', age: 18, gender: 'female' })
console.log(workers)
// 根据 key 获得 value 如果 key 不存在则返回 undefined
console.log(workers.get('worker1'))
// 判断 map 中是否有指定的 key
console.log(workers.has('worker3'))
console.log(workers.has('worker4'))
// 返回 map 的 key 迭代器
console.log(workers.keys())
// 返回 map 的 value 迭代器
console.log(workers.values())
workers.clear()
console.log(workers.size)
