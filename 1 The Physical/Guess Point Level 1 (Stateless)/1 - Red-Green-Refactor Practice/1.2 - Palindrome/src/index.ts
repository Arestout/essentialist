export function palindromeChecker(word: string) {
  const reversedWord = word.split('').reverse().join('');

  return word === reversedWord;
}
