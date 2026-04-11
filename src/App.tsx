import { useState } from "react";
import Button from "./components/ui/Button";
import Header from "./components/layouts/Header";

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Header />
      <Button onClick={handleClick}>123</Button>
    </>
  );
};

export default App;
