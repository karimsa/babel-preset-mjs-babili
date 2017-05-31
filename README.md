# babel-preset-mjs-babili

Babel preset to minify mjs code.

## Features

| Restriction | Solution |
| ----------- | -------- |
| Sequence expressions are not supported by mjs. | `log(),log()` -> `[log(),log()].pop()` |

## Usage

This preset should be hit after babili, which should be hit
after babel-preset-mjs.

`.babelrc`:

```json
{
  "presets": [
    "mjs-babili",
    "mjs"
  ]
}
```

## License

Licensed under [MIT](LICENSED.md) license.

Copyright (C) 2017 Karim Alibhai.