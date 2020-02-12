import ReactDOM from "react-dom";
import React, { Component } from 'react';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//import { Nav, Container, Row, Col, Card } from "react-bootstrap";

import Login from "./component/Login/Login";
import Registration from "./component/Registration/Registration";
import Accessories from "./component/Accessories/Accessories";
import Pets from "./component/Pets/Pets";
import Book from './component/Order/Order';
import Home from './component/home/home';
import Services from './component/services/Services';
import Dashboard from './component/Dashboard/dashboard';
import Profile from './component/profile/profile';

import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBRow, Container
} from "mdbreact";
import { Col } from "reactstrap";
//import { BrowserRouter as Router} from 'react-router-dom';
toast.configure({
  autoClose: 8000,
  draggable: false,
  //etc you get the idea
});

class Navbar extends Component {
  state = {
    isOpen: false,
    isAuthenticated : 'none',
    homeItem: 'block',
    name: ''
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  logout = () =>{
    localStorage.clear();
    this.setState({authItems : 'none'});
    this.setState({homeItem : 'block'});
    window.location.replace("/home"); 
  }

  componentDidMount(){
    if(localStorage.getItem("isAuthenticated")=== 'true'){
      this.setState({authItems : 'block'});
      this.setState({homeItem : 'none'}); 
      this.state.name = localStorage.getItem("fullname");
    }else{
      this.setState({authItems : 'none'});
      this.setState({homeItem : 'block'}); 
    }
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
                <MDBNavItem active  style={{ display: this.state.homeItem}}>
                  <MDBNavLink as={Link} to="/home">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem active  style={{ display: this.state.authItems}}>
                  <MDBNavLink as={Link} to="/dashboard">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink as={Link} to="/blogs">Blogs</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem >
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <div className="d-none d-md-inline">Services</div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="dropdown-default">
                      <MDBDropdownItem style={{ display: this.state.homeItem}}>
                        <Link to="/pets">Pets</Link>
                      </MDBDropdownItem>
                      <MDBDropdownItem style={{ display: this.state.homeItem}}>
                        <Link to="/accessories">Accessories</Link
                      ></MDBDropdownItem>
                      <MDBDropdownItem  style={{ display: this.state.authItems}}>
                        <Link to="/pets">My Pets</Link>
                      </MDBDropdownItem>
                      <MDBDropdownItem  style={{ display: this.state.authItems}}> 
                        <Link to="/accessories"> My Accessories</Link>
                      </MDBDropdownItem>
                      <MDBDropdownItem  style={{ display: this.state.authItems}}> 
                        <Link to="/services"> My Services</Link>
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem style={{ display: this.state.homeItem}}>
                  <MDBNavLink as={Link} to="/login">Login</MDBNavLink>
                </MDBNavItem>
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
                <MDBNavItem style={{ display: this.state.authItems}}>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                    <strong style ={{color: 'white'}}>Welcome, {this.state.name}</strong> 
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="dropdown-default" right>
                      <MDBDropdownItem ><Link to="/profile">Profile</Link></MDBDropdownItem>
                      <MDBDropdownItem onClick ={this.logout} ><p style={{marginLeft:'10px'}} >log out</p></MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem><MDBNavItem style={{ display: this.state.homeItem}}>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <span>User</span><MDBIcon icon="user" />
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="dropdown-default">
                      <MDBDropdownItem ><Link to="/register">Register</Link></MDBDropdownItem>
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
            <Route exact path="/pets" component={Pets} />
            <Route exact path="/accessories" component={Accessories} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/blog" component={Book} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </Router>
      </Container>
    );

  }

}

export default Navbar;

ReactDOM.render(<Navbar />, document.getElementById("root"));
