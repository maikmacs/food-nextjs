import React, { Component } from 'react';

import Layout from '../../components/Layout';

class CheckoutError extends Component {
  render() {
    return (
      <Layout>
        <div className="centerDiv">
          <h1>Error al pagar Pedido</h1>
        </div>
      </Layout>
    );
  }
}

export default CheckoutError;
