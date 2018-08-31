import React, { Component } from 'react';

import Layout from '../../components/Layout';

class CheckoutSuccess extends Component {
  static async getInitialProps({ query }) {
    // const paypal = query.id;
    return { query };
  }
  render() {
    return (
      <Layout>
        <div className="centerDiv">
          <h1>Pedido Confirmado</h1>
          {JSON.stringify(this.props.paypal)}
        </div>
      </Layout>
    );
  }
}

export default CheckoutSuccess;
