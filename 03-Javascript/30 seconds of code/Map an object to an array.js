// https://www.30secondsofcode.org/js/s/listify

// Maps an object to an object array, using the provided mapping function.

// Use Object.entries() to get an array of the object's key-value pairs.
// Use Array.prototype.reduce() to map the array to an object.
// Use mapFn to map the keys and values of the object and Array.prototype.push() to add the mapped values to the array.

const listify = (obj, mapFn) =>
  Object.entries(obj).reduce((acc, [key, value]) => {
    console.log(key, value) // John { age: 42 }
    acc.push(mapFn(key, value))
    return acc
  }, [])

const people = { John: { age: 42 }, Adam: { age: 39 } } // key -> John value -> {age: 42}

const objectArr = listify(people, (key, value) => ({ name: key, ...value }))
console.log(objectArr)
// [ { name: 'John', age: 42 }, { name: 'Adam', age: 39 } ]

for (const [key, value] of Object.entries(people)) {
  console.log(key, value) // John { age: 42 }
}
console.log('debug', Object.entries(people)) // debug [ [ 'John', { age: 42 } ], [ 'Adam', { age: 39 } ] ]

// 自己的练习
const people2 = {
  John: { age: 42 },
  Adam: { age: 39 },
}

const listify2 = (obj) =>
  Object.entries(obj).reduce((acc, [key, value]) => {
    // acc.push(mapFn(key, value))
    acc.push({ name: key, ...value })
    return acc
  }, [])
const objectArr2 = listify2(people2)
console.log(objectArr2)
// listify2(people2, (key, value) => ({ name: key, ...value }))

