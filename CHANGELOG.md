## v1.0.1（2021-2-28）

### :bug: Bug Fix

#### `@rollup/plugin-babel` の `extensions` オプション指定漏れ対処
`extensions` は Babel でトランスパイルする対象ファイルの拡張子を指定するオプションです。デフォルトでは TypeScript が対象外なので、TypeScript をトランスパイルするために `.ts` を含めるべきです。
