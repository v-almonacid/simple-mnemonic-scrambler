import { useState } from "react";
import { MainTable } from "./MainTable";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

const PasswordInput = ({
  onSetPassword,
}: {
  onSetPassword: (s: string) => void;
}) => {
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const isValidInput = /^[a-zA-Z]*$/.test(input);
    if (isValidInput) {
      setPassword(e.target.value.toLowerCase());
      setError("");
    } else {
      setError(
        "Your password can only contain letters. Don't use numbers or special characters"
      );
    }
  };

  const handleEncode = () => {
    if (!password) {
      setError("Your password is empty!");
      return;
    }
    onSetPassword(password);
  };

  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <div>
      <label
        htmlFor="password"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Pick Your Password
      </label>
      <div className="mt-2 flex flex-row">
        <div className="relative rounded-md w-full">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="abracadabra"
            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
            onChange={handleOnChange}
          />
          <div
            className="absolute inset-y-0 flex items-center right-0 pr-3 cursor-pointer"
            onClick={toggleShowPassword}
          >
            {showPassword ? (
              <EyeSlashIcon
                aria-hidden="true"
                className="h-5 w-5 text-gray-400"
              />
            ) : (
              <EyeIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
            )}
          </div>
        </div>
        <button
          type="button"
          className="ml-1 lg:ml-2 lg:mt-0 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          onClick={() => handleEncode()}
        >
          Encode
        </button>
      </div>
      {error && <div className="mt-2 text-red-500">{error}</div>}
    </div>
  );
};

function App() {
  const [password, setPassword] = useState<string>("abracadabra");
  return (
    <div className="relative bg-white">
      <div className="h-screen sm:pb-40 sm:pt-12 lg:pb-48 lg:pt-20">
        <div className="px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row flex-1 justify-center">
          <div className="flex flex-col flex-1 mx-8 lg:mx-20 mt-10 sm:mt-0">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Simple Mnemonic Scrambler
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              This app lets you transform a BIP39 seed phrase into a{" "}
              <a
                className="underline decoration-solid"
                href="https://en.wikipedia.org/wiki/Scrambler"
                target="_blank"
              >
                scrambled{" "}
              </a>
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
            <div className="lg:mr-20 my-10">
              <PasswordInput onSetPassword={setPassword} />
            </div>
          </div>
          <div className="my-10 flex flex-1 justify-center items-center lg:justify-start">
            <div className="lg:mt-10 lg:w-full lg:max-w-7xl">
              <MainTable password={password} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
