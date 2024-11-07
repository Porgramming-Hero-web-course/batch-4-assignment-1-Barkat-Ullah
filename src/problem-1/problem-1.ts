// Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
function sumArray(nums: number[]): number {
  return nums.reduce((acc, num) => acc + num, 0);
}
console.log(sumArray([1, 2, 3, 4, 5]));
