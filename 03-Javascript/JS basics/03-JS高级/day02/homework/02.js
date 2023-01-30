/* 
给一个数字数组，该数组中有很多数字0，将不为0的数据存入到一个新的数组中

let arr = [2, 1, 0, 3, 4, 0, 2, 6, 0, 5, 4, 6, 0, 1, 0, 2];
 */

let nums = [2, 1, 0, 3, 4, 0, 2, 6, 0, 5, 4, 6, 0, 1, 0, 2];

// nums.forEach((num) => {});

let numsWithoutZero = nums.filter((num) => {
  return num !== 0;
});
console.log(numsWithoutZero);
