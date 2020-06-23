// parent element
import React, { Component } from 'react';
class App extends Component {
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
        </div>)
    }
    else {
      return (
        <div>
          <div id='id'>{`displayChild value: ${this.state.displayChild}`}</div>
          <br />
          <button onClick={this.changeState}>change state value of displayChild</button>
        </div >)
    }
  }
}

export default App;

// child element
class Child extends Component {

  componentWillUnmount() {
    console.log('componentWillUnmount() text!');
  }

  render() {
    return (<div>Text inside Child!</div>);
  }
}



// import React, { Component, useEffect } from 'react';
// function Child() {
//   useEffect(() => {
//     return (() => { console.log('useEffect() text!') })
//   }, [])

//   return (<div>Text inside Child!</div>)
// }
