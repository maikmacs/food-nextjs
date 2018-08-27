import React, { Component } from 'react';
import { connect } from 'react-redux';

import Layout from '../../components/Layout';

import RestaurantsList from './Components/RestaurantsList';

class Restaurants extends Component {
  render() {
    return (
      <Layout>
        <h1>LISTA</h1>
        <RestaurantsList />
      </Layout>
    );
  }
}

export default Restaurants;
