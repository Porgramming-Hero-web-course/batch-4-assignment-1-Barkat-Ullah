
function sumArray(nums: number[]): number {
  return nums.reduce((acc, num) => acc + num, 0);
}
console.log(sumArray([1, 2, 3, 4, 5]));
