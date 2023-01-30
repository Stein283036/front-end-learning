// 求斐波那契数列：兔子序列
// 利用递归函数求斐波那契数列(兔子序列)  1、1、2、3、5、8、13、21...

function fabonacci(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num + fabonacci(num - 1);
}

let ret = fabonacci(5);
console.log(ret);
