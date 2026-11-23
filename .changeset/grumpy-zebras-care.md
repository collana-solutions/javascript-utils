---
"@collana-solutions/javascript-utils": patch
---

Internal cleanups without behavior changes: `parseBool` uses `replaceAll` with the same pattern, and `trimEnd` keeps its search index inside the loop. The doc comment of `CacheProvider` links to `Csag.Abstractions`.
