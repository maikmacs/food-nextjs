import React, { Component } from 'react';

import { Link, Router } from '../../routes';

class Logout extends Component {
  componentDidMount = () => {
    localStorage.removeItem('food_token');
    Router.push('/');
  };

  render() {
    return <div />;
  }
}

export default Logout;
