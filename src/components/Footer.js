import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return(
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <p>
              Made with <i className="feather-icon" data-feather="heart"/>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;