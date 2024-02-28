// First - https://leetcode.com/problems/chunk-array/description/

// /**
//  * @param {Array} arr
//  * @param {number} size
//  * @return {Array}
//  */

// var chunk = function (arr, size) {
//   if (arr.length == 0) return [];

//   const result = [arr.slice(0, size)];
//   result.push(...chunk(arr.slice(size), size));

//   return result;
// };

// console.log(chunk([1, 9, 6, 3, 2], 1));
// console.log(chunk([1, 9, 6, 3, 2], 2));
// console.log(chunk([1, 9, 6, 3, 2], 3));
// console.log(chunk([1, 9, 6, 3, 2], 4));
// console.log(chunk([1, 9, 6, 3, 2], 5));

// ///////////////////////////////////////////////////////////

// Second - https://leetcode.com/problems/array-wrapper/

// /**
//  * @param {number[]} nums
//  * @return {void}
//  */
// var ArrayWrapper = function (nums) {
//   this.nums = nums;
// };

// /**
//  * @return {number}
//  */
// ArrayWrapper.prototype.valueOf = function () {
//   return this.nums.reduce((sum, num) => sum + num, 0);
// };

// /**
//  * @return {string}
//  */
// ArrayWrapper.prototype.toString = function () {
//   return `[${this.nums.join(",")}]`;
// };

// console.log(ArrayWrapper.valueOf([1, 2, 3, 4]));

// ///////////////////////////////////////////////////////////

// Third - https://leetcode.com/problems/array-prototype-last/

// /**
//  * @return {null|boolean|number|string|Array|Object}
//  */
// Array.prototype.last = function () {
//   if (this.length === 0) {
//     return -1;
//   } else {
//     return this[this.length - 1];
//   }
// };

// ///////////////////////////////////////////////////////////

// let add = function plus(arr) {
//   if (arr.length == 0) {
//     return arr;
//   } else if (arr.length == 1 && typeof arr[0] === "number") {
//     return arr[0];
//   } else if (
//     arr.length == 2 &&
//     typeof arr[0] === "number" &&
//     typeof arr[1] === "number"
//   ) {
//     return arr[0] + arr[1];
//   } else if (arr.length > 2) {
//     return "You must enter an array with two numbers!";
//   } else {
//     return "Something went wrong!";
//   }
// };

// console.log(add([1, 1]));
// console.log(add(["1", "1"]));
// console.log(add(["1", 1]));
// console.log(add([1]));
// console.log(add([1, 1, 1]));
