// https://www.30secondsofcode.org/articles/s/code-anatomy-chaining-reduce-for-loop

// For loops
// Any for loop can be used - read more about the different JavaScript loops.
// Less common nowadays, due to functional programming being more popular.
// Control over the iteration, such as skipping over elements or early returns.
// Resulting array needs to be declared beforehand, outside the loop.
// Uses Array.prototype.push() or the spread (...) operator to add elements.
// O(N) complexity, each element will be iterated over only once.
const files = ['foo.txt', '.bar', '   ', 'baz.foo']
let filePaths = []

for (const file of files) {
  fileName = file.trim()
  if (fileName) {
    filePaths.push(`~/cool-app/${fileName}`)
  }
}
console.log(filePaths) // [ '~/cool-app/foo.txt', '~/cool-app/.bar', '~/cool-app/baz.foo' ]

// Array reduce
// Uses Array.prototype.reduce() with an empty array as the initial value.
// More common nowadays, due to functional programming being more popular.
// Less control over the iteration, cannot skip elements or return early.
// Can be chained with other methods, if necessary.
// Uses Array.prototype.push() or the spread (...) operator to add elements.
// O(N) complexity, each element will be iterated over only once.
const files2 = ['foo.txt', '.bar', '   ', 'baz.foo']
const filePaths2 = files2.reduce((acc, file) => {
  if (file.trim()) {
    acc.push(`~/cool-app/${file.trim()}`)
  }
  return acc
}, [])

console.log(filePaths2) // [ '~/cool-app/foo.txt', '~/cool-app/.bar', '~/cool-app/baz.foo' ]

// Method chaining
// Uses Array.prototype.map() and Array.prototype.filter().
// More common nowadays, due to functional programming being more popular.
// Less control over the iteration, cannot skip elements or return early.
// Declarative, easier to read and refactor, chain can grow as necessary.
// Does not use Array.prototype.push() or the spread (...) operator.
// O(cN) complexity, c iterations per element, (c: length of the chain).
const files3 = ['foo.txt', '.bar', '   ', 'baz.foo']
// map 对原数组的每个元素执行操作 并返回一个新的数组 并不直接在原数组上进行修改
// const filePaths3 = files3.map((file) => file.trim())
// console.log(filePaths3);
// console.log(files3);
const filePaths3 = files3
  .map((file) => file.trim())
  .filter(Boolean)
  .map((fileName) => `~cool-app/${fileName}`)
console.log(filePaths3)

class LinkedList {
  constructor() {
    this.nodes = []
  }

  get size() {
    return this.nodes.length
  }

  get head() {
    return this.size ? this.nodes[0] : null
  }

  get tail() {
    return this.size ? this.nodes[this.size - 1] : null
  }

  insertAt(index, value) {
    const previousNode = this.nodes[index - 1] || null
    const nextNode = this.nodes[index] || null
    const node = { value, next: nextNode }

    if (previousNode) previousNode.next = node
    this.nodes.splice(index, 0, node)
  }

  insertFirst(value) {
    this.insertAt(0, value)
  }

  insertLast(value) {
    this.insertAt(this.size, value)
  }

  getAt(index) {
    return this.nodes[index]
  }

  removeAt(index) {
    const previousNode = this.nodes[index - 1]
    const nextNode = this.nodes[index + 1] || null

    if (previousNode) previousNode.next = nextNode

    return this.nodes.splice(index, 1)
  }

  clear() {
    this.nodes = []
  }

  reverse() {
    this.nodes = this.nodes.reduce(
      (acc, { value }) => [{ value, next: acc[0] || null }, ...acc],
      []
    )
  }

  *[Symbol.iterator]() {
    yield* this.nodes
  }
}
