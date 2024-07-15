import { useState } from "react";

const UseStateBasics = () => {
  //const value = useState('hello')[0];

  const [count, setCount] = useState(0);
  const [name, setName] = React.useState()

  const handleClick = () => {
    setCount('pan');
  }

  return (
    <div>
      <h4>You clicked {count} times</h4>
      <button type="button" className="btn" onClick={handleClick}>Click</button>
    </div>
  )
};

export default UseStateBasics;
