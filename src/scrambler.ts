export const ALPHABET = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(97 + i)
);

export const shiftArray = <T extends unknown>(
  arr: T[],
  positions: number
): T[] => {
  const shift = positions % arr.length; // Handle shifts larger than the array length
  return arr.slice(shift).concat(arr.slice(0, shift));
};

export const scrambleWithPassword = (word: string, password: string) => {
  let extendedPassword = password;
  while (extendedPassword.length < word.length) {
    extendedPassword = extendedPassword.concat(password);
  }
  extendedPassword = extendedPassword.slice(0, word.length);

  const scrambledWord = word
    .split("")
    .map((char, i) => {
      const shiftBy = ALPHABET.findIndex((c) => c === char);
      const shiftedAlphabet = shiftArray(ALPHABET, shiftBy);
      const newCharIndex = ALPHABET.findIndex(
        (c) => c === extendedPassword.charAt(i)
      );

      return shiftedAlphabet[newCharIndex];
    })
    .join("");
  return scrambledWord;
};
