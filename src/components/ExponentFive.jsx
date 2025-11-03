function ExponentFive(props) {
  const result =
    props.count * props.count * props.count * props.count * props.count;
  return <p>n⁵ = {result}</p>;
}

export default ExponentFive;
