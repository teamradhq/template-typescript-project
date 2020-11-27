# TypeScript Project Template

Fork this repo to create a new TypeScript project.

## Setup
```
npm install
yarn
```

## Structure

### `ts/src/index.ts`

Project entry point.

### `js/*`

JavaScript output files.

### `test/*`

Jest unit tests.

## Npm Scripts

### `build`

Output TS to `js` folder.

### `go`

Run `babel-node` on JS files.

### `develop:watch`

Run `nodemon` to `build` and `exec` on change.

### `lint` | `lint:watch`

Lint TS files.

### `test` | `test:watch`

Run jest tests.
