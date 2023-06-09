import { useEffect, useState } from "react";
import Button from "../components/Button";

function CounterPage() {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count is {count}</h1>
      <Button onClick={handleClick}>Increment</Button>
    </div>
  );
}

export default CounterPage;
