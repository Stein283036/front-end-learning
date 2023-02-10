// https://www.30secondsofcode.org/articles/s/javascript-for-in-for-of-foreach

/* 
for...in is used to iterate over all enumerable properties of an object, including inherited enumerable properties. 
This iteration statement can be used with arrays strings or plain objects, but not with Map or Set objects.
 */
for (let index in ['apple', 'banana', 'orange']) {
  console.log(index) // 0 1 2
}

for (let item in ['a', 'b', 'c']) {
  console.log(item) // 0 1 2
}

for (let item in { a: 1, b: 2, c: 3 }) {
  console.log(item) // a b c
}

for (let item in new Set(['a', 'b', 'c'])) {
  console.log(item) // undefined (no enumerable properties)
}

/* 
for...of is used to iterate over iterable objects, iterating over their values instead of their properties. 
This iteration statement can be used with arrays, strings, Map or Set objects, but not with plain objects.
 */
for (let item of ['a', 'b', 'c']) {
  console.log(item)
}

for (let item of 'animal') {
  console.log(item)
}

for (let item of new Set(['apple', 'banana', 'rabbit'])) {
  console.log(item)
}

// for (let item of { age: 22, name: 'stein' }) {
//   console.log(item) // TypeError 普通对象是不可以迭代的
// }

/* 
Finally, forEach() is a method of the Array prototype, which allows you to iterate over the elements of an array. 
While forEach() only iterates over arrays, it can access both the value and the index of each element while iterating.
 */
;['I', 'love', 'programming'].forEach((value) => {
  console.log(value)
})
;['I', 'love', 'programming'].forEach((value, index) => {
  console.log(value, index)
})
