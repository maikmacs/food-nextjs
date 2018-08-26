import React, { Component } from 'react';
import Navbar from '../Navbar';
import { Container, Row, Col } from 'reactstrap';

import './styles.scss';

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Navbar />
        <Container>{children}</Container>
      </div>
    );
  }
}

export default Layout;
