function Sum(props) {
  return <h1>
    {props.a} + {props.b} = {props.a + props.b}
  </h1>;
}
Sum.propTypes  = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

ReactDOM.render(<Sum a={'c'} b={2} />, 
  document.getElementById('root')
);
