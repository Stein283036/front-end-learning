/* 字符串：
	let str = '132642343739373635384628633124';
	求这个字符串里面出现最多的字符是哪个，出现了几次

	既要统计字符，又要统计字符的次数
	{
        1 : 3,
        2 : 6,
        3 : 6,
	}
*/
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;
let count7 = 0;
let count8 = 0;
let count9 = 0;
let strs = "132642343739373635384628633124";
for (let index = 0; index < strs.length; index++) {
  const str = strs[index];
  if (str === "1") {
    count1++;
  } else if (str === "2") {
    count2++;
  } else if (str === "3") {
    count3++;
  } else if (str === "4") {
    count4++;
  } else if (str === "5") {
    count5++;
  } else if (str === "6") {
    count6++;
  } else if (str === "7") {
    count7++;
  } else if (str === "8") {
    count8++;
  } else if (str === "9") {
    count9++;
  }
}

console.log(count1);
console.log(count2);
console.log(count3);
console.log(count4);
console.log(count5);
console.log(count6);
console.log(count7);
console.log(count8);
console.log(count9);