// 利用递归求n的阶乘;
//利用递归函数求1~n的阶乘 1 * 2 * 3 * 4 * ..n

function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

let ret = factorial(4);
console.log(ret);