import React, { Component } from 'react';
import Link from '../../routes';
import { connect } from 'react-redux';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_RESTAURANT = gql`
  query RESTAURANT($id: ID!) {
    singleStore(id: $id) {
      _id
      name
      description
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

import Layout from '../../components/Layout';

class Restaurant extends Component {
  static async getInitialProps({ query }) {
    const id = query.id;
    return { id };
  }

  render() {
    return (
      <Layout>
        <Query query={GET_RESTAURANT} variables={{ id: this.props.id }}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading..</h4>;
            if (error) return <h4>No Hay Casa</h4>;
            let restaurant = data.singleStore;
            console.log(restaurant);
            return (
              <div>
                <h2>{restaurant.name}</h2>
                <div>{JSON.stringify(restaurant, 2, null)}</div>
              </div>
            );
          }}
        </Query>
      </Layout>
    );
  }
}

export default Restaurant;
