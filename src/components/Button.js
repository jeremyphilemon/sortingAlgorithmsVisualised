import React, { Component } from 'react';

class Button extends Component {
  render() {
    return(
      <a className="button is-light" onClick={this.props.clickFn}><i data-feather={this.props.icon}/></a>
    );
  }
}

export default Button;