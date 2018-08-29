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
              <main>
                <Row>
                  <Col>
                    <img src={restaurant.picture} alt={restaurant.name} />
                  </Col>
                  <Col>
                    <h2>{restaurant.name}</h2>
                    <p>{restaurant.description}</p>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Row>
                      {restaurant.products.map((products, index) => (
                        <Col sm="6">
                          <Card key={index}>
                            <CardImg
                              top
                              width="100%"
                              src={products.picture}
                              alt="Card image cap"
                            />
                            <CardBody>
                              <CardTitle>{products.name}</CardTitle>
                              <CardSubtitle>$ {products.price}</CardSubtitle>
                              <Button>Agregar</Button>
                            </CardBody>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </Col>
                  <Col>CART</Col>
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
