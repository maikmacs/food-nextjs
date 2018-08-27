import React, { Component } from 'react';

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
        <span>{this.state.name}</span>
      </div>
    );
  }
}

export default RestaurantCard;
