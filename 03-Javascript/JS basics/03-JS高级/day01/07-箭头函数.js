/* 箭头函数 通常箭头函数经常用在回调函数上(函数的形参位置),作为匿名函数使用
箭头函数属于表达式函数，因此不存在函数提升, 
箭头函数只有一个参数时可以省略圆括号()
箭头函数只有一行代码时,可以省略{},并自动作为返回值返回
箭头函数中没有 arguments，只能使用 ... 动态获取实参
涉及到this的使用，不建议用箭头函数, 箭头函数本质上并不存在this
事实上,箭头函数中的this指向的是上级作用域的this
 */

// foo(); // error
let foo = () => "i am arrow foo";
foo();

let calSum = (num1, num2) => num1 + num2;
let sum = calSum(1, 5);
console.log(sum);

// setInterval(() => {
//   console.log("handler");
// }, 1000);

// setInterval(function () {
//   //   console.log(this);
// });

function func1() {
  // 函数中的this指向调用者
  console.log(this);
}

function func2() {
  func1();
}

func2();

let user = {
  name: "stein",
  func: function () {
    console.log(this); // {name: 'stein', func: ƒ}
  },
};

user.func();
