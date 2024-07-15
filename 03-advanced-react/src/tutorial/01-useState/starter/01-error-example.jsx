const ErrorExample = () => {

  let count = 0;
  
  const handleClick = () => {
    count = count + 1
  }

  return (
    <div>
      <h2>useState error example</h2>
      <button className="btn" type="button" onclick={handleClick}>Increase</button>
    </div>
  );
};

export default ErrorExample;
