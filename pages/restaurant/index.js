import React, { Component } from 'react';
import {
  Card,
  Row,
  Col,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
  Button
} from 'reactstrap';

import { AddToCart } from 'react-redux-shopping-cart';
import Cart from '../../components/Cart';

import Link from '../../routes';
import { connect } from 'react-redux';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import './styles.scss';

const GET_RESTAURANT = gql`
  query RESTAURANT($id: ID!) {
    singleStore(id: $id) {
      _id
      name
      description
      adress
      picture
      phone
      schedule
      type {
        name
        description
      }
      products {
        _id
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
            //console.log(restaurant);
            return (
              <main>
                <div className="restaurantHeader">
                  <Row>
                    <Col md="3">
                      <img src={restaurant.picture} alt={restaurant.name} />
                    </Col>
                    <Col>
                      <h2>{restaurant.name}</h2>
                      <p>{restaurant.description}</p>
                      <p>{restaurant.adress}</p>
                      <p>{restaurant.phone}</p>
                      <p>{restaurant.schedule}</p>
                    </Col>
                  </Row>
                </div>
                <Row>
                  <Col>
                    <Row>
                      {restaurant.products.map((products, index) => {
                        const item = {
                          id: products._id,
                          name: products.name,
                          price: products.price,
                          qty: 1
                        };
                        return (
                          <Col sm="6" key={index}>
                            <Card>
                              <CardImg
                                top
                                width="100%"
                                src={products.picture}
                                alt="Card image cap"
                              />
                              <CardBody>
                                <CardTitle>{products.name}</CardTitle>
                                <CardSubtitle>$ {products.price}</CardSubtitle>
                                <AddToCart item={item} />
                              </CardBody>
                            </Card>
                          </Col>
                        );
                      })}
                    </Row>
                  </Col>
                  <Col>
                    <Cart />
                  </Col>
                </Row>
              </main>
            );
          }}
        </Query>
      </Layout>
    );
  }
}

export default Restaurant;
