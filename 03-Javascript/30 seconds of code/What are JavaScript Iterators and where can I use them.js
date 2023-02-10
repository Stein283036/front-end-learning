// https://www.30secondsofcode.org/articles/s/javascript-iterators

// JavaScript iterators were introduced in ES6 and they are used to loop over a sequence of values,
// usually some sort of collection. By definition, an iterator must implement a next() function, that
// returns an object in the form of { value, done } where value is the next value in the iteration
// sequence and done is a boolean determining if the sequence has already been consumed.

class LinkedList {
  constructor(data) {
    this.data = data
  }

  // 找头结点
  firstItem() {
    return this.data.find((i) => i.head)
  }

  findById(id) {
    return this.data.find((i) => i.id === id)
  }

  [Symbol.iterator]() {
    let item = { next: this.firstItem().id }
    return {
      next: () => {
        item = this.findById(item.next)
        if (item) {
          return { value: item.value, done: false }
        }
        return { value: undefined, done: true }
      },
    }
  }
}

const myList = new LinkedList([
  { id: 'a10', value: 'First', next: 'a13', head: true },
  { id: 'a11', value: 'Last', next: null, head: false },
  { id: 'a12', value: 'Third', next: 'a11', head: false },
  { id: 'a13', value: 'Second', next: 'a12', head: false },
])

for (const item of myList) {
  console.log(item)
}

class SpecialList {
  constructor(data) {
    this.data = data
  }

  [Symbol.iterator]() {
    return this.data[Symbol.iterator]()
  }

  // 使用已有函数作为迭代器 迭代器本质上就是个函数
  values() {
    return this.data
      .filter((item) => item.complete)
      .map((item) => item.value)
      [Symbol.iterator]()
  }
}

const myList2 = new SpecialList([
  { complete: true, value: 'Lorem ipsum' },
  { complete: true, value: 'dolor sit amet' },
  { complete: false },
  { complete: true, value: 'adipiscing elit' },
])

for (const item of myList2) {
  console.log(item)
}

for (const item of myList2.values()) {
  console.log(item);
}
