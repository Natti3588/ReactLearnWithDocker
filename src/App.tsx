import { useState } from 'react'
import Button from "./components/ui/Button"

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <>
      <Button onClick={handleClick}>12345</Button>
    </>
  )
}

export default App
