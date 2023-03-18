export function palindromeChecker(phrase: string) {
  const reversedPhrase = phrase.split('').reverse().join('');

  return phrase.toLocaleLowerCase().split(' ').join('') === reversedPhrase.toLocaleLowerCase().split(' ').join('');
}
