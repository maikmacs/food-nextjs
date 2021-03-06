import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from 'react-redux';

import { loginRequest } from '../../redux/actions/auth';

import Layout from '../../components/Layout';

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
    this.props.loginRequest(this.state);
  };

  render() {
    return (
      <Layout>
        <div className="centerDiv">
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
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  loginRequest: payload => dispatch(loginRequest(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(login);
