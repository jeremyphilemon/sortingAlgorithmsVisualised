import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {'i': this.props.i, 'j': this.props.j, 'clickFn': this.props.clickFn, 'icon': this.props.icon};
  }

  componentDidMount() {
    
  }

  componentDidUpdate() {

  }

  render() {
    return(
      <a className="button is-light" onClick={this.state.clickFn}><i data-feather={this.state.icon}/></a>
    );
  }
}

export default Button;