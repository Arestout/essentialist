const getReversedString = (str: string) => str.split('').reverse().join('');

export function palindromeChecker(phrase: string) {
  const reversedPhrase = getReversedString(phrase);

  return phrase.toLocaleLowerCase().split(' ').join('') === reversedPhrase.toLocaleLowerCase().split(' ').join('');
}
