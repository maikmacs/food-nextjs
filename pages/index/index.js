import React, { Component } from 'react';
import { Link, Router } from '../../routes';

import Layout from '../../components/Layout';
import SearchAdress from '../../components/SearchAdress';
import Navbar from '../../components/Navbar';

import './styles.scss';

class index extends Component {
  render() {
    return (
      <main className={'fullHeight'}>
        <Navbar />
        <div className="indexContainer">
          <div className="overlay" />
          <div className="centerDiv searchAdress">
            <SearchAdress />
            <Link route="restaurants">Lista de Restaurantes</Link>
          </div>
        </div>
      </main>
    );
  }
}

export default index;
