import React, { Component } from 'react';
import { Link } from '../../../../../routes';

class RestaurantCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.store._id,
      name: props.store.name
    };
  }

  render() {
    return (
      <div>
        <Link route="restaurant" params={{ id: this.state.id }}>
          <span>{this.state.name}</span>
        </Link>
      </div>
    );
  }
}

export default RestaurantCard;
