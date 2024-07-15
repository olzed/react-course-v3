import { useState } from 'react';
import { useEffect } from 'react';

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <RandomComponent />}
    </div>
    )
};

const RandomComponent = () => {
  useEffect(() => {
    const someFunc = () => {
    
    }
    window.addEventListener('scroll', someFunc);
    return () => window.removeEventListener('scroll', someFunc);
  },[]);
  return <h1>Hello</h1>;
}
export default CleanupFunction;
