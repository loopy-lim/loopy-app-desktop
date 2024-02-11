import { useState } from 'react'
import { Button } from './ui/button'

function Versions() {
  const [versions] = useState(window.electron.process.versions)

  return (
    <ul className="w-full flex justify-center">
      <li className="electron-version">Electron v{versions.electron}</li>
      <li className="chrome-version">Chromium v{versions.chrome}</li>
      <li className="node-version">Node v{versions.node}</li>
      <Button onClick={() => alert('aaaa')}>alert</Button>
    </ul>
  )
}

export default Versions
