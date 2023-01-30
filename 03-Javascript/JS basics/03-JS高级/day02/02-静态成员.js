/* 静态成员
在 JavaScript 中底层函数本质上也是对象类型，因此允许直接为函数动态添加属性或方法，构造函数的属性和方法被称为静态成员。
 */

function Car(brand, price) {
  this.brand = brand;
  this.price = price;
  this.wash = function () {
    console.log("wash car");
  };
}

Car.color = "red";
Car.drive = function () {
  console.log("drive car");
  /* 
  ƒ Car(brand, price) {
    this.brand = brand;
    this.price = price;
    this.wash = function () {
      console.log("wash car");
    };
  }
  */
  console.log(this); // this: typeof Car
};

console.log(Car.color);
Car.drive();

let car = new Car("奔驰", 200000);
console.log(car);
console.log(typeof car); // object
console.log(car instanceof Car);
console.log(car.constructor);

// 在 JavaScript 内置了一些构造函数，绝大部的数据处理都是基于这些构造函数实现的，JavaScript 基础阶段学习的 Date 就是内置的构造函数。
let date = new Date();
console.log(date);
