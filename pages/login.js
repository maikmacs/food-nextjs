import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Router from 'next/router';
import api from '../services/api';

import Layout from '../components/Layout';

class login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: 'test@test.com',
      password: 'test123'
    };
  }

  chekInput = event => {
    let { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  submitForm = e => {
    e.preventDefault();
    api
      .loginUser(this.state)
      .then(resp => {
        //localStorage.setItem('food_token', resp.data.token);
        console.log(resp.data.token);
        // this.props.history.push('/');
      })
      .catch(err => {
        console.log(err.response.data);
      });
  };

  render() {
    return (
      <Layout>
        <Form onSubmit={this.submitForm}>
          <FormGroup>
            <Label for={'email'}>Email</Label>
            <Input
              type="text"
              name={'email'}
              id={'email'}
              placeholder="Email"
              value={this.state.email}
              onChange={this.chekInput}
            />
          </FormGroup>
          <FormGroup>
            <Label for={'password'}>Contraseña</Label>
            <Input
              type="password"
              name={'password'}
              id={'password'}
              placeholder="Contraseña"
              value={this.state.password}
              onChange={this.chekInput}
            />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </Layout>
    );
  }
}

export default login;
