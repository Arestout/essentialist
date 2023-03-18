const getReversedString = (str: string) => str.split('').reverse().join('');
const normalizeString = (str: string) => str.toLocaleLowerCase().split(' ').join('');

export function palindromeChecker(phrase: string) {
  const reversedPhrase = getReversedString(phrase);

  return normalizeString(phrase) === normalizeString(reversedPhrase);
}
