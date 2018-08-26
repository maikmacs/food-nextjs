import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import api from '../services/api';

import Layout from '../components/Layout';

class signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'maik',
      last_name: 'macs',
      email: 'test@test.com',
      birth_date: '1990-06-19',
      password: 'test123',
      username: 'test',
      gender: 'male',
      phone: '123456789',
      password_confirm: 'test123'
    };
  }

  chekInput = event => {
    let { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  checkPassword = () => {
    return this.state.password === this.state.password_confirm;
  };

  submitForm = e => {
    e.preventDefault();

    if (this.checkPassword()) {
      api
        .createUser(this.state)
        .then(resp => {
          console.log(resp.data);
          //this.props.history.push('/login');
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      alert('Los Passwords no coinciden');
    }
  };
  render() {
    return (
      <Layout>
        <Form onSubmit={this.submitForm}>
          <FormGroup>
            <Label for={'name'}>Nombre</Label>
            <Input
              type="text"
              name={'name'}
              id={'name'}
              placeholder="Nombre"
              value={this.state.name}
            />
          </FormGroup>
          <FormGroup>
            <Label for={'last_name'}>Apellido</Label>
            <Input
              type="text"
              name={'last_name'}
              id={'last_name'}
              placeholder="Apellido"
              value={this.state.last_name}
            />
          </FormGroup>
          <FormGroup>
            <Label for={'email'}>Email</Label>
            <Input
              type="text"
              name={'email'}
              id={'email'}
              placeholder="Email"
              value={this.state.email}
            />
          </FormGroup>
          <FormGroup>
            <Label for={'birth_date'}>Fecha de Nacimiento</Label>
            <Input
              type="text"
              name={'birth_date'}
              id={'birth_date'}
              placeholder="Fecha de Nacimiento"
              value={this.state.birth_date}
            />
          </FormGroup>
          <FormGroup>
            <Label for={'phone'}>Telefono</Label>
            <Input
              type="text"
              name={'phone'}
              id={'name'}
              placeholder="Telefono"
              value={this.state.phone}
            />
          </FormGroup>
          <FormGroup>
            <Label for={'username'}>Usuario</Label>
            <Input
              type="test"
              name={'username'}
              id={'username'}
              placeholder="Usuario"
              value={this.state.username}
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
            />
          </FormGroup>
          <FormGroup>
            <Label for={'username'}>Confirmar Contraseña</Label>
            <Input
              type="password"
              name={'password_confirm'}
              id={'password_confirm'}
              placeholder="Confirmar Contraseña"
              value={this.state.password_confirm}
            />
          </FormGroup>

          <Button>Submit</Button>
        </Form>
      </Layout>
    );
  }
}

export default signup;
