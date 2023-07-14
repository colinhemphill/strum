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

## ARCHIVE INFORMATION

I had fun building Strum, but sadly Vanilla Extract didn't seem to take off the way I had hoped it would, and this particular library did not see any adoption. I'm not actively maintaining Strum and haven't heard any complaints, so I'm archiving it before somebody comes across it and decides to try it out.

fwiw I did ultimately cave and now I'm building pretty exclusively with Tailwind. I think [shadcn/ui](https://ui.shadcn.com/) isn't quite what I'm looking for in terms of its style, but the Radix-based components are a good starting point. I'll likely build out a personal library based on shad and may or may not share it depending on its completness.

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
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd strum
pnpm dev
```

### Test

To run the jest suite:

```
cd strum
pnpm test
```
