import React, { Component } from 'react';
import { Router } from '../../../../../routes';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';

class RestaurantCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.store._id,
      name: props.store.name,
      picture: props.store.picture,
      description: props.store.description,
      type: props.store.type.name
    };
  }

  render() {
    return (
      <div>
        <Card>
          <CardImg
            top
            width="100%"
            src={this.state.picture}
            alt={this.state.name}
          />
          <CardBody>
            <CardTitle>{this.state.name}</CardTitle>
            <CardSubtitle>{this.state.type}</CardSubtitle>
            <CardText>{this.state.description}</CardText>
            <Button
              onClick={() => {
                Router.pushRoute('restaurant', { id: this.state.id });
              }}
            >
              Button
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default RestaurantCard;
