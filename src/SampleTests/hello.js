function Hello(props) {
  return <h1>Hello at {props.now}</h1>;
}

ReactDOM.render(<Hello now={new Date().toISOString()} />,
  document.getElementById('root')
);