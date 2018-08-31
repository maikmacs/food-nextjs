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
import './styles.scss';
//import isAuthenticated from '../../utils/isAuthenticated';

class NavbarHeader extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      logged: true
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  _navbarLogged = () => (
    <Nav className="ml-auto" navbar>
      <NavItem>
        <span>Usuario</span>
      </NavItem>
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
            Food
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {this.logged ? this._navbar() : this._navbarLogged()}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarHeader;
