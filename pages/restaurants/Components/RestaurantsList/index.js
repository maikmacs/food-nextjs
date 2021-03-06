import React, { Component } from 'react';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import RestaurantCard from './RestaurantCard';

const GET_RESTAURANTS = gql`
  query {
    allStores {
      _id
      name
      description
      picture
      type {
        name
        description
      }
      products {
        name
        price
        picture
        description
      }
    }
  }
`;

class RestaurantList extends Component {
  renderRestaurants = () => (
    <Query query={GET_RESTAURANTS}>
      {({ loading, error, data }) => {
        if (loading) return <h4>Loading...</h4>;
        // if (error) {
        //   console.log(error);
        // }
        return (
          <div className="row ">
            {data.allStores.map((store, index) => (
              <div className="col-md-3 col-lg-3" key={index}>
                <RestaurantCard store={store} />
              </div>
            ))}
          </div>
        );
      }}
    </Query>
  );
  render() {
    return this.renderRestaurants();
  }
}

export default RestaurantList;
