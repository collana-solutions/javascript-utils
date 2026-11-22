// Turns the coverage totals of the last Jest run (the json-summary reporter in jest.config.ts) into
// code-coverage-results.md, which the CI Post Comment workflow posts on the pull request.
import { readFileSync, writeFileSync } from "node:fs";

const { total } = JSON.parse(readFileSync("coverage/coverage-summary.json", "utf8"));

const metrics = [
  ["Lines", total.lines],
  ["Statements", total.statements],
  ["Functions", total.functions],
  ["Branches", total.branches],
];

const lines = [
  "### Code coverage",
  "",
  "| Metric | Coverage |",
  "| ------ | -------- |",
  ...metrics.map(([name, metric]) => `| ${name} | **${metric.pct}%** (${metric.covered} / ${metric.total}) |`),
  "",
];

writeFileSync("code-coverage-results.md", lines.join("\n"));
