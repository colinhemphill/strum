# Strum Design

![Strum logo](./assets/StrumLogo-DarkMode.svg#gh-dark-mode-only)
![Strum logo](./assets/StrumLogo-LightMode.svg#gh-light-mode-only)

A React component and style system made with [Vanilla Extract](https://vanilla-extract.style/).

<p>
  <a aria-label="NPM version" href="https://www.npmjs.com/package/@strum/react">
    <img
      alt="A badge with the version number of the NPM package"
      src="https://img.shields.io/npm/v/@strum/react?style=for-the-badge"
    />
  </a>
  <a aria-label="License" href="/LICENSE">
    <img
      alt="A badge displaying the MIT license for this software"
      src="https://img.shields.io/npm/l/@strum/react?style=for-the-badge"
    />
  </a>
</p>

## Getting Started

See [strum.design](https://strum.design) for details on how to use Strum.

## Changelog

See the [@strum/react changelog](./packages/strum-react/CHANGELOG.md)

## Development

### Project Monorepo

This project uses [Turborepo](https://turborepo.org/), and is broken up into the following workspaces:

- `docs`: a [Next.js](https://nextjs.org) app for documenting the design system (maps to [strum.design](https://strum.design))
- `@strum/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@strum/react`: the main component library and Vanilla Extract styles
- `@strum/tsconfig`: `tsconfig.json`s used throughout the monorepo

### Build

To build all apps and packages, run the following command:

```
cd strum
yarn build
```

### Develop

To develop all apps and packages, run the following command:

```
cd strum
yarn dev
```

### Test

To run the jest suite:

```
cd strum
yarn test
```
