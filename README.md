# use-lazyload

> 

[![NPM](https://img.shields.io/npm/v/use-lazyload.svg)](https://www.npmjs.com/package/use-lazyload)

## Install

```bash
npm install --save use-lazyload
```

## Usage

```tsx
import * as React from 'react';

import { useLazyload } from 'use-lazyload';

const options: IObserverOptions = {
  root: null,
  rootMargin: "0px",
  thresholds: [0.0],
};

const onIntersectCallback = async () => {
  //...fetch items
}

const Example = () => {
  const [element, setElement] = useLazyload(onIntersectCallback, options);
  return (
    <div>
      {...items.map(
        //...
      )}
      {
        <div ref={setElement}>{isLoading}</div>
      }
    </div>
  )
}
```

## [Example](https://github.com/BKJang/use-lazyload/tree/master/example)

```bash
cd example
npm install
npm run start
```

## License

MIT © [BKJang](https://github.com/BKJang)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
