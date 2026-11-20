---
"@collana-solutions/javascript-utils": patch
---

The package is now published as `@collana-solutions/javascript-utils`. The API is unchanged, and 2.6.0 is available under the new name with the same content as `@neolution-ch/javascript-utils` 2.6.0. To migrate, replace the old package with the new one:

```shell
npm uninstall @neolution-ch/javascript-utils
npm install @collana-solutions/javascript-utils
```

Then change the imports:

```ts
import { newGuid } from "@collana-solutions/javascript-utils";
```

`@neolution-ch/javascript-utils` gets deprecated and receives no further releases. The package metadata now points to the repository README as its homepage.
