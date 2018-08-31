import React, { Component } from 'react';
import { Link, Router } from '../../routes';

import Layout from '../../components/Layout';
import SearchAdress from '../../components/SearchAdress';
import Navbar from '../../components/Navbar';

import './styles.scss';

class index extends Component {
  render() {
    return (
      <main>
        <Navbar />
        <div className="indexContainer">
          <div>Index</div>
          <Link route="restaurants">Lista de Restaurantes</Link>
          <SearchAdress />
        </div>
      </main>
    );
  }
}

export default index;
