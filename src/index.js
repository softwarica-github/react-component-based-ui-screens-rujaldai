//import React from "react";
import ReactDOM from "react-dom";
import React, { Component } from 'react';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
//import { Nav, Container, Row, Col, Card } from "react-bootstrap";

import Login from "./component/Login/Login";
import Registration from "./component/Registration/Registration";
import Food from "./component/Accessories/Accessories";
import Room from "./component/Pets/Pets";
import Book from './component/Order/Order';
import Home from './component/home/home';

import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBRow, Container
} from "mdbreact";
import { Col } from "reactstrap";
//import { BrowserRouter as Router} from 'react-router-dom';

class Navbar extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <Container style={{paddingRight: '0px', paddingLeft: '0px'}}>
        <Router >
          <MDBNavbar color="elegant-color-dark" dark expand="xl">
            <MDBNavbarBrand>
              <strong className="white-text">PetCare</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav left>
                <MDBNavItem active>
                  <MDBNavLink as={Link} to="/home">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink as={Link} to="/blogs">Blogs</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <div className="d-none d-md-inline">Services</div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="dropdown-default">
                      <Link style={{paddingTop:'0px'}} to="/pets"><MDBDropdownItem>Pets</MDBDropdownItem></Link>
                      <Link to="/accessories" ><MDBDropdownItem>Accessories</MDBDropdownItem></Link>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBNavLink className="waves-effect waves-light" to="#!">
                    <MDBIcon fab icon="twitter" />
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink className="waves-effect waves-light" to="#!">
                    <MDBIcon fab icon="google-plus-g" />
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <span>User</span><MDBIcon icon="user" />
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="dropdown-default">
                      <Link to="/register"><MDBDropdownItem >Register</MDBDropdownItem></Link>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
          <MDBRow style={{marginTop:'20px'}}> </MDBRow>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Registration} />
            <Route exact path="/pets" component={Food} />
            <Route exact path="/accessories" component={Room} />
            <Route exact path="/blog" component={Book} />
          </Switch>
        </Router>
      </Container>
    );

  }

}

export default Navbar;

ReactDOM.render(<Navbar />, document.getElementById("root"));
