function Sum(props) {
  return <h1>
    {props.a} + {props.b} = {props.a + props.b}
  </h1>;
}

ReactDOM.render(<Sum a={'key'} b={'board'} />,
  document.getElementById('root')
);
