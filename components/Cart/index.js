import React from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem, Badge, Button } from 'reactstrap';
import PaypalButton from '../PaypalButton';

const Cart = props => {
  const { total, items } = props;

  return (
    <span>
      <ListGroup>
        {items.map((item, index) => (
          <ListGroupItem className="justify-content-between" key={index}>
            <Badge pill> {item.qty}</Badge> {item.name} ${item.price}
          </ListGroupItem>
        ))}
        <ListGroupItem active tag="a" action>
          Total: {total}
        </ListGroupItem>
        <ListGroupItem active tag="a" action>
          {total > 0 ? <PaypalButton total={total} items={items} /> : null}
        </ListGroupItem>
      </ListGroup>
    </span>
  );
};

const mapStateToProps = store => ({
  total: store.cart.total,
  items: store.cart.items,
  cart: store.cart
});

export default connect(
  mapStateToProps,
  {}
)(Cart);
