function Person(name, age) {
  this.name = name;
  this.age = age;
  //   每个人都有唱歌这个方法;
  this.sing = function () {
    console.log("instance sing");
  };
}

// 每个函数都有 prototype 属性,它是一个原型对象,被所有实例对象共享
// 当访问对象的属性或方法时，先在当前实例对象查找，然后再去原型对象查找，并且原型对象被所有实例共享。
Person.prototype.sing = function () {
  console.log("prototype sing");
};
console.log(Person.prototype);

const stein = new Person("stein", 22);
console.log(stein);
stein.sing();
