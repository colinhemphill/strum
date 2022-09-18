# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2022-08-18

## Added

- `<Badge />` component
- `<Checkbox />` component
- `<RadioGroup />` and `<RadioItem />` components
- `<Card />` and related layout components
- New `error` prop on the `<Select />` component
- New `borderRadius` prop on the `<Button />` component

## Changed

- Dependency upgrades
- Add `onChange` prop for `<Select />` component for consistent prop names between components
  - Does not deprecate the primitive's `onValueChange` prop

## Fixed

- Accessibility improvement: distinct focus state on form elements with an error present

## [1.0.2] - 2022-09-13

## Changed

- Dependency upgrades

## [1.0.1] - 2022-09-11

### Fixed

- Reworked the `<StrumProvider> />` script without a hard render block

[1.0.1]: https://github.com/colinhemphill/strum/releases/tag/v1.0.1

### Added

- Repo and build system init
- `<Alert />` component
- `<Avatar />` component
- `<Box />` component
- `<Button />` component
- `<Container />` component
- `<Heading />` component
- `<Input />` component
- `<Nav />` component
- `<Select />` component
- `<Skeleton />` component
- `<Spinner />` component
- `<Stack />` component
- `<StrumProvider />` component
- `<Text />` component
- `<Tooltip />` component
- `<VisuallyHidden />` component
- Base styles, tokens, theme contract vars, and sprinkles

[1.0.0]: https://github.com/colinhemphill/strum/releases/tag/v1.0.0
