import React, { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>{this.props.title}</h1>;
  }
}

export default MyComponent;