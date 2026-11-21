# javascript-utils

This is a collection of utilities that we have created to help with our development process. We have decided to open source these utilities in the hopes that they will be useful to others.

## Usage

To use these utilities, add the [@collana-solutions/javascript-utils](https://www.npmjs.com/package/@collana-solutions/javascript-utils) npm package to your project and use the desired functions in your source code.

```shell
npm install @collana-solutions/javascript-utils
```

```ts
import { newGuid } from "@collana-solutions/javascript-utils";
```

Versions up to 2.6.0 were published as `@neolution-ch/javascript-utils`. That name is deprecated and gets no new releases.

## Contributing

If you would like to contribute to this project, please submit a pull request.

### Guidelines

- Use a filename that fits what the utility is doing. If you introduce a new file, choose a name that fits your utility but is still generic enough to hold similar utilities that can be added later alongside your addition.
- Add tests to your utilities and strive to cover many different usage scenarios and parametrization and high code coverage.

### Development

The repository uses pnpm through Corepack (`corepack enable`), with the version pinned in `package.json`. `pnpm run prepare-pr` formats, lints, builds and tests in one go.

## Releases

Due to the nature of this project as a loosely connected collection of utilities, it's important to be strict about following [SemVer](https://semver.org/) to communicate possible breaking changes to the users of this library via version number.

Equally as important is to be precise about the changes made in each release, so users of this library can see easily where changes were made. Releases follow the [collana-solutions release playbook](https://github.com/collana-solutions/release-playbook) (Changesets, public npm variant):

1. Add a changeset to your PR with `pnpm changeset`: pick the SemVer bump and describe the change for the users of this library. CI fails without one.
2. Merging to `main` opens or updates a **chore: version packages** PR, which bumps the version and writes the [CHANGELOG.md](CHANGELOG.md).
3. Merging that PR publishes the package to npm through trusted publishing and creates the GitHub Release.

Dependabot PRs get a changeset generated automatically. A manual dependency bump does not, so add one yourself.
