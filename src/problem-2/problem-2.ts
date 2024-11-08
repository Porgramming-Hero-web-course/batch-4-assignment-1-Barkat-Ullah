
function removeDuplicates(arr:number[]) :number[]{
    const remove = arr.filter((number,idx) =>arr.indexOf(number) === idx)
    return remove
}
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5,5,5]));