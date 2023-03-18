export function palindromeChecker(phrase: string) {
  const reversedPhrase = phrase.split('').reverse().join('');

  return phrase.toLocaleLowerCase() === reversedPhrase.toLocaleLowerCase();
}
