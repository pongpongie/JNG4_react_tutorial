import { useState } from "react";

function MyButton({ count, onClick }) {
  return (
    <div>
      <button onClick={onClick}>clicked {count} times</button>
    </div>
  );
}

export default function MyApp() {
  const [count, setCount] = useState(0);
  function onPressButton() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>Counters that updage Seperately</h1>
      <ul>
        <MyButton count={count} onClick={onPressButton} />
        <MyButton count={count} onClick={onPressButton} />
      </ul>
    </div>
  );
}
