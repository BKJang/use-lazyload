# use-lazyload

> custom hooks for lazyloding in react.

[![NPM](https://img.shields.io/npm/v/use-lazyload.svg)](https://www.npmjs.com/package/use-lazyload) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-lazyload
```

## Usage

```tsx
import * as React from 'react'

import { useMyHook } from 'use-lazyload'

const Example = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
```

## License

MIT © [BKJang](https://github.com/BKJang)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
