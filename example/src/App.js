import React from 'react'

import { useMyHook } from 'use-lazyload'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
