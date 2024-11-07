// Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

function removeDuplicates(arr:number[]) :number[]{
    const remove = arr.filter((number,idx) =>arr.indexOf(number) === idx)
    return remove
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));