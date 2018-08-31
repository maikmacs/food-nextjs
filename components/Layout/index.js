import React, { Component } from 'react';
import Navbar from '../Navbar';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

import './styles.scss';

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <main>
        <Navbar />
        <Container>{children}</Container>
      </main>
    );
  }
}

export default connect(state => state)(Layout);
