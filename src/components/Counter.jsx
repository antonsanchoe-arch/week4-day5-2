function Counter(props) {
  return (
    <div>
      <h2>Counter: {props.count}</h2>
      <button onClick={props.decrease}>-</button>
      <button onClick={props.increase}>+</button>
    </div>
  );
}

export default Counter;
