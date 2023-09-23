let myArr = [1,2,3,4]
myArr.push(5)
console.log(myArr)
myArr.pop()
console.log(myArr)
myArr.shift()
console.log(myArr)
myArr.unshift(0)
console.log(myArr)

let arr1 = ['a','b'];
let arr2 = ['c','d']

let arr3 = arr1.concat(arr2);
console.log(arr3);

let arr4 = arr3.join("-");
console.log(arr4)

let arr5 = arr3.slice(1, 3)
console.log(arr5)

let arr6 = arr3.indexOf('c'); //2
console.log(arr6);

console.log(arr3);
console.log(arr3.includes('c'));//true

let arrOne = [1,3,6,8]
arrOne.find((n) => n % 2 ===0)
console.log(arrOne.find((n) => n % 2 ===0)) //6
arrOne.findIndex((n) => n % 2 !==0)
console.log(arrOne.findIndex((n) => n % 2 !==0))//0
arrOne.map((n) => n * 2)
console.log(arrOne.map((n) => n * 2)) //[2,6,12,16]
arrOne.filter((n) => n % 2 ===0)
console.log(arrOne.filter((n) => n % 2 ===0))//6,8

let arrTwo = [3,6,8,9]
arrTwo.reduce((acc, cur) => acc + cur)
console.log(arrTwo.reduce((acc, cur) => acc + cur))//26
arrTwo.every((x) => x < 6)
console.log(arrTwo.every((x) => x < 6))//False
arrTwo.some((n) => n > 6)
console.log(arrTwo.some((n) => n > 6))// true
arrTwo.reverse();
console.log(arrTwo);
arrTwo.at(-2);
console.log(arrTwo.at(-2))//6


