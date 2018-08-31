import {
  all,
  call,
  put,
  race,
  takeLatest,
  take,
  select
} from 'redux-saga/effects';

import { PAYPAL_SUCESS } from '../constants/paypal';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import client from '../../services/graphql';
import Router from 'next/router';

const addOrder = gql`
  mutation addOrder($inputOrder: addOrders!) {
    addOrders(data: $inputOrder) {
      _id
    }
  }
`;

export function* paypalSucess(action) {
  const { payload } = action;
  console.log(payload);
  client.mutate({
    mutation: addOrders,
    variables: {
      store: '5b84d6887d45fd29a5a7c964',
      user: '5b845e194b07ed002ff5c53e',
      products: ['5b84d5fa7d45fd29a5a7c95f', '5b84d6117d45fd29a5a7c960'],
      adress: 'Adress 123',
      total: 120,
      status_order: 'in_work',
      status_pay: 'PAY'
    },
    update: (proxy, { data: { createOrder } }) => {
      // Read the data from our cache for this query.
      const data = proxy.readQuery({ query: addOrder });
      console.log(data);

      // Add our todo from the mutation to the end.
      //data.todos.push(createOrder);

      // Write our data back to the cache.
      //proxy.writeQuery({ query: TodoAppQuery, data });
    }
  });

  console.log('paypalSucess  SAGA', payload);
}

export default function* paypalSAGA() {
  yield all([takeLatest(PAYPAL_SUCESS, paypalSucess)]);
}
