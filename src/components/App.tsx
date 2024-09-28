import { useState } from "react";
import { MainTable } from "./MainTable";
import { scrambleWithPassword } from "scrambler";

const PasswordInput = ({
  onSetPassword,
}: {
  onSetPassword: (s: string) => void;
}) => {
  const [password, setPassword] = useState<string>("");
  return (
    <div>
      <label
        htmlFor="password"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Pick Your Password
      </label>
      <div className="mt-2 flex flex-row">
        <input
          id="password"
          name="password"
          type="password"
          placeholder="abracadabra"
          className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          className="ml-2 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          onClick={() => onSetPassword(password)}
        >
          Encode
        </button>
      </div>
    </div>
  );
};

function App() {
  const [password, setPassword] = useState<string>("abracadabra");
  return (
    <div className="relative bg-white">
      <div className="h-screen sm:pb-40 sm:pt-12 lg:pb-48 lg:pt-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 flex flex-row flex-1">
          <div className="flex flex-col flex-1 mx-20">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Simple Mnemonic Scrambler
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              This app lets you transform a BIP39 seed phrase into a 'scrambled'
              version—a series of words mixed with random characters that don't
              resemble a typical seed phrase. Simply input a password, which
              will be used to encode each word. You can then write down your
              scrambled seed phrase and store it using the same recommended
              practices for standard seed phrases, adding an extra layer of
              security. Just remember to back up your password safely elsewhere.
            </p>
            <p className="mt-4 text-xl">
              <b>
                Bear in mind that this encoding method can be easily
                brute-forced. Use at your own responsibility.
              </b>
            </p>
            <div className="mr-20 my-10">
              <PasswordInput onSetPassword={setPassword} />
            </div>
          </div>
          <div className="my-10 flex flex-1">
            <div className="mt-10 md:mt-0 lg:mx-auto lg:w-full lg:max-w-7xl">
              <MainTable password={password} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
