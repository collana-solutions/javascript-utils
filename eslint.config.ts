import collanaEslintConfig from "@collana-solutions/eslint-config";

// The explicit type keeps the emitted declaration from naming the config types by their path inside the pnpm store
// (TS2742). getConfig returns the typescript-eslint config type, which is not assignable to Linter.Config of ESLint 10.
const config: ReturnType<typeof collanaEslintConfig.configs.flat.getConfig> = [
  ...collanaEslintConfig.configs.flat.getConfig({
    ...collanaEslintConfig.configs.flat.defaults.typescript,
    jest: true,
    jsdocRequireJsdoc: true,
  }),
  {
    files: ["src/lib/*.spec.ts"],
    rules: { "max-lines": ["off"] },
  },
  // The package supports Node 18 (engines), and Array#toReversed() needs Node 20 (ES2023).
  {
    rules: { "unicorn/no-array-reverse": ["off"] },
  },
  // Kept identical to the release playbook template it comes from, so updates can be copied over as they are.
  {
    ignores: ["scripts/generate-dependabot-changeset.mjs"],
  },
];

export default config;
