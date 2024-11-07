
function countWordOccurrences(sentence: string, word: string): number {
  const lowerCaseWord = word.toLowerCase();
  const sentences = sentence.toLowerCase().split(" ");
  const countDown = sentences.filter((word) => word === lowerCaseWord).length;
  return countDown;
}

// console.log(
//   countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript")
// );
