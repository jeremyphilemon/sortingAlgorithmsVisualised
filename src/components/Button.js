import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {'i': this.props.i, 'j': this.props.j, 'clickFn': this.props.clickFn};
  }

  componentDidMount() {
    
  }

  componentDidUpdate() {

  }

  render() {
    return(
      <a className="button is-success" onClick={this.state.clickFn}><i data-feather="arrow-right"/></a>
    );
  }
}

export default Button;