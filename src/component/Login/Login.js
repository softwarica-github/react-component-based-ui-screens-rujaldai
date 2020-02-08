import React, { Component } from "react";
import { Link } from 'react-router-dom';
//import icon from 'material-ui/'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBModal, MDBModalBody, MDBModalHeader } from 'mdbreact';
import Registration from '../Registration/Registration'; 
import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invalidEmail: 'none',
      invalidPassword: 'none',
      email: '',
      password: '',
      modal: false
    };
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  }

  testingRegex(pattern, input) {
    const condition = new RegExp(pattern);
    return condition.test(input);
  }

  validateEmail = (event) => {
    if (!this.testingRegex("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$", this.state.email)) {
      this.setState({ invalidEmail: "block" });
    } else {
      this.setState({ invalidEmail: "none" });
    }
  }

  validatePassword = (event) => {
    this.setState({ invalidPassword: "none" });
    if (this.state.password.length < 5) {
      this.setState({
        invalidPassword: "block",
        invalidForm: true
      });
    }
  }

  doLogin = (event) => {
    this.validateEmail();
    this.validatePassword();
    if (this.state.email !== '' || this.state.password !== '') {
      if (this.state.invalidEmail === 'block' || this.state.invalidPassword === 'block') {
        alert("login failed");
      } else {  
        var data ={
          username : this.state.email,
          password : this.state.password
        }
        var headers = {
          'Content-Type': 'application/json'
        }
        Axios.post("http://localhost:3023/api/user/login", data, headers)
        .then(function(response) {
          localStorage.setItem('isAuthenticated',true);
          localStorage.setItem('userToken',response.data.userToken);
          localStorage.setItem('fullname',response.data.fullname);
          localStorage.setItem('username',response.data.username);
          localStorage.setItem('address1',response.data.address1);
          localStorage.setItem('address2',response.data.address2);
          localStorage.setItem('mobile',response.data.mobile);
          localStorage.setItem('phone',response.data.phone);
          toast("User logged in successfully.",{autoClose: 3000});
          setTimeout(()=>{
            window.location.replace('/dashboard') ;
          },3000);
        }, function(err) {
            toast("Username or password incorrect.",{autoClose: 3000});
            localStorage.setItem('isAuthenticated',false);
            console.log(err);
        })
      }
    }

  }

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12" lg="12" style={{ margin: "0 auto" }}>
            <MDBCard>
              <MDBCardBody>
                <form>
                  <p className="h5 text-center mb-4">Sign in</p>
                  <div className="grey-text">
                    <MDBInput
                      label="Type your email"
                      icon="envelope"
                      group
                      type="email"
                      onChange={e => this.setState({ email: e.target.value })}
                      onBlur={this.validateEmail}
                      validate
                      error="wrong"
                      success="right"
                    />
                    <label
                      style={{ display: this.state.invalidEmail, color: "red", marginLeft: "10%" }} >
                      Please, enter valid email.
                    </label>
                    <MDBInput
                      label="Type your password"
                      icon="lock" MDBIcon icon="shield-alt"
                      onChange={e => this.setState({ password: e.target.value })}
                      onBlur={this.validatePassword}
                      group
                      type="password"
                      validate
                    />
                  </div>
                  <label
                    style={{ display: this.state.invalidPassword, color: "red", marginLeft: "10%" }} >
                    Password must be atleast 5 characters.
                  </label>
                  <MDBCol sm={6}>
                    <MDBBtn onClick={this.doLogin}>Login</MDBBtn>
                  </MDBCol>
                  <MDBCol>
                      <a onClick={this.toggle}> Do not have an account? <u>Register</u> </a>
                      <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                          <Registration />
                      </MDBModal>
                  </MDBCol>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
};

export default Login;