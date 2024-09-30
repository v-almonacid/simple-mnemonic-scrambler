import { wordlists } from "bip39";
import { scrambleWithPassword } from "scrambler";
import { classNames } from "utils";

const WORDS = wordlists.english;

// const randomWordGenerator = (len: number): string => {
//   const output: string = [...Array(len)]
//     .map(() =>
//       String.fromCharCode("a".charCodeAt(0) + Math.floor(Math.random() * 26))
//     )
//     .join("");
//   return output;
// };

export const MainTable = ({ password }: { password: string }) => {
  return (
    <div className="overflow-auto">
      <div className="flex flex-col flex-1 font-mono">
        {WORDS.map((word, i) => (
          <div
            className={classNames(
              "flex flex-row divide-y",
              i % 2 === 0 && "font-bold"
            )}
            key={word}
          >
            <div className="basis-1/12 p-2">{i}</div>
            <div className="basis-5/12 p-2">{word}</div>
            <div className="basis-6/12 p-2">
              {scrambleWithPassword(word, password)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
