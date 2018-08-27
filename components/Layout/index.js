import React, { Component } from 'react';
import Navbar from '../Navbar';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

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

export default connect(state => state)(Layout);
