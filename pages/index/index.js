import React, { Component } from 'react';
import { Link, Router } from '../../routes';
import Layout from '../../components/Layout';

class index extends Component {
  render() {
    return (
      <Layout>
        <div>Index</div>
        <Link route="restaurants">Lista de Restaurantes</Link>
      </Layout>
    );
  }
}

export default index;
