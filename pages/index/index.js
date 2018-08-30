import React, { Component } from 'react';
import { Link, Router } from '../../routes';

import Layout from '../../components/Layout';
import SearchAdress from '../../components/SearchAdress';

class index extends Component {
  render() {
    return (
      <Layout>
        <div>Index</div>
        <Link route="restaurants">Lista de Restaurantes</Link>
        <SearchAdress />
      </Layout>
    );
  }
}

export default index;
