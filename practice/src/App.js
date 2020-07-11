import React, { Component, useEffect, useState } from 'react';

class Parent extends Component {
  state = {
    displayChild: true
  }
  changeState = () => {
    this.setState({ displayChild: !this.state.displayChild })
  }
  render() {
    if (this.state.displayChild) {
      return (
        <div>
          <div id='id'>{`displayChild value: ${this.state.displayChild}`}</div>
          <br />
          <button onClick={this.changeState}>change state value of displayChild</button>
          <Child />
        </div>
      );
    }
    else if (this.state.displayChild === false) {
      return (
        <div>
          <div id='id'>{`displayChild value: ${this.state.displayChild}`}</div>
          <br />
          <button onClick={this.changeState}>change state value of displayChild</button>
        </div>
      );
    }
  }
}
function Child() {

  const [dummyField, setdummyField] = useState(true);
  useEffect(() => {
    console.log("componentDidMount() and componentDidUpdate() as useEffect() text!");
    return () => { console.log('componentWillUnmount() as useEffect() text!') }
  }, [dummyField]);
  const changeState = () => {
    setdummyField(!dummyField);
  }
  return (
    <div>
      <div id='id'>{`dummyField value: ${dummyField}`}</div>
      <br />
      <button onClick={changeState}>change state value of dummyField</button>
    </div>
  );
}
export default Parent
