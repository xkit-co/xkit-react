import * as React from 'react'
import { App as XkitCatalog, createXkit } from '@xkit-co/xkit-catalog-react.js'

const xkit = createXkit('kozlovzxc.xkit.co')

export const App = () => (
  <div>
    <h1>Xkit React</h1>
    <XkitCatalog xkit={xkit} />
  </div>
)
