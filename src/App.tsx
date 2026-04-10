import { useState } from 'react'
import Button from "./components/ui/Button"

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <>
      <Button onClick={handleClick} label={"あいうえお"}></Button>
    </>
  )
}

export default App
