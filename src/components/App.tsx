import { MainTable } from "./MainTable";

const PasswordInput = () => {
  return (
    <div>
      <label
        htmlFor="password"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Pick Your Password
      </label>
      <div className="mt-2">
        <input
          id="password"
          name="password"
          type="password"
          placeholder="abracadabra"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="relative bg-white">
      <div className="h-screen sm:pb-40 sm:pt-12 lg:pb-48 lg:pt-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 flex flex-row flex-1">
          <div className="flex flex-col flex-1 mx-20">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Simple Mnemonic Scrambler
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              This app allows you to transform BIP39 seed phrase into a
              "scrambled" seed phrase, that is, a bunch of words containing
              random characters that doesn't look like a seed phrase. You only
              need to input a password, which will be used to encode each word.
              You can then write down your seed phrase and store it following
              the same recommended good practices that apply for standard seed
              phrases, with an additional layer of security, and making sure you
              backup your password safely somewhere else.
            </p>
            <div className="mr-20 my-20">
              <PasswordInput />
            </div>
          </div>
          <div className="my-10 flex flex-1">
            <div className="mt-10 md:mt-0 lg:mx-auto lg:w-full lg:max-w-7xl">
              <MainTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
