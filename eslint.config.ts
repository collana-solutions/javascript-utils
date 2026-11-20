import neolutionEslintConfig from "@neolution-ch/eslint-config-neolution";
import type { Linter } from "eslint";

// The explicit type keeps the emitted declaration from naming eslint by its path inside the pnpm store (TS2742).
const config: Linter.Config[] = [
  ...neolutionEslintConfig.configs.flat.getConfig({
    ...neolutionEslintConfig.configs.flat.defaults.typescript,
    jest: true,
    jsdocRequireJsdoc: true,
  }),
  {
    files: ["src/lib/*.spec.ts"],
    rules: { "max-lines": ["off"] },
  },
  // Kept identical to the release playbook template it comes from, so updates can be copied over as they are.
  {
    ignores: ["scripts/generate-dependabot-changeset.mjs"],
  },
];

export default config;
