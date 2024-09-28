DISCLAIMER: I've built this for myself. Feel free to use only if you know what your are doing, at your own responsibility.

## What's this?

This app allows you to transform a BIP39 seed phrase into a
"scrambled" seed phrase, that is, a bunch of words containing
random characters that doesn't look like a seed phrase. You only
need to input a password, which will be used to encode each word.
You can then write down your seed phrase and store it following
the same recommended good practices that apply for standard seed
phrases, with an additional layer of security, and making sure you
backup your password safely somewhere else.

## Setup

### Install & Run

Install dependencies.

```bash
pnpm install
```

Serve with hot reload at <http://localhost:5173>.

```bash
pnpm run dev
```

### Lint

```bash
pnpm run lint
```

### Typecheck

```bash
pnpm run typecheck
```

### Build

```bash
pnpm run build
```

### Test

```bash
pnpm run test
```

View and interact with your tests via UI.

```bash
pnpm run test:ui
```

## License

This project is licensed under the MIT License.
