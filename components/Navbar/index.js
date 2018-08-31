import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { Link, Router } from '../../routes';
import jwt_decode from 'jwt-decode';

import './styles.scss';

class NavbarHeader extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      logged: true,
      email: ''
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentDidMount = () => {
    const token = localStorage.getItem('food_token');

    if (token) {
      var payload = jwt_decode(token);
      this.setState({
        email: payload.email
      });
    }

    this.setState({
      logged: token === null ? false : true
    });
  };

  _navbar = () => (
    <Nav className="ml-auto" navbar>
      <Link route="login">
        <NavItem>
          <Button color="primary">Iniciar Sesión</Button>
        </NavItem>
      </Link>
      <Link route="signup">
        <NavItem>
          <Button color="secondary">Regístrarse</Button>
        </NavItem>
      </Link>
    </Nav>
  );

  _navbarLogged = () => (
    <Nav className="ml-auto" navbar>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Hola {this.state.email}
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem
            onClick={() => {
              Router.pushRoute('/logout ');
            }}
          >
            Logout
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </Nav>
  );

  render() {
    return (
      <div>
        <Navbar light expand="md">
          <NavbarBrand
            onClick={() => {
              Router.pushRoute('/ ');
            }}
          >
            Food {this.state.logged}
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {this.state.logged == false ? this._navbar() : this._navbarLogged()}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarHeader;
