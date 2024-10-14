import { expect, test } from "vitest";
import { shiftArray, ALPHABET } from "scrambler";

const asciiLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

test("Alphabet handling", () => {
  ALPHABET.forEach((c, i) => expect(c).toBe(asciiLetters[i]));

  let shiftedAlphabet = shiftArray(ALPHABET, 1);

  expect(shiftedAlphabet[0]).toBe("b");
  expect(shiftedAlphabet[shiftedAlphabet.length - 1]).toBe("a");

  shiftedAlphabet = shiftArray(ALPHABET, 25);
  expect(shiftedAlphabet[0]).toBe("z");
  expect(shiftedAlphabet[shiftedAlphabet.length - 1]).toBe("y");
});
