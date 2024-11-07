// Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.
function countWordOccurrences(sentence: string, word: string): number {
  const lowerCaseWord = word.toLowerCase();

  // Split by non-word characters to handle spaces, punctuation, etc.
  const sentences = sentence.toLowerCase().split(/\W+/);
  
  const countDown = sentences.filter((word) => word === lowerCaseWord).length;
  return countDown;
}

console.log(
  countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript")
);
