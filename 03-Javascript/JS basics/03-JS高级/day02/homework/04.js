/* （二维数组，逻辑，偏难）
let arr = [
    	[23, 66, 33, 16],
    	[19, 21, 49, 66, 123, 36],
    	[78, 37, 89, 86]
]
求该数组的平均值，最大值，最小值，

*/
let arr = [
  [23, 66, 33, 16],
  [19, 21, 49, 66, 123, 36],
  [78, 37, 89, 86],
];
let sum = 0;
let avg = 0;
let max = arr[0][0];
let min = arr[0][0];
let count = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    count++;
    const num = arr[i][j];
    sum += num;
    if (num > max) {
      max = num;
    } else if (num < min) {
      min = num;
    }
  }
}

console.log("max: " + max);
console.log("min: " + min);
console.log("sum: " + sum);
console.log("avg: " + (sum / count));
