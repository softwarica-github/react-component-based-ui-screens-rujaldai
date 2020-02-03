import React, { Component } from "react";
//import icon from "/material-ui/user"
//import Navbar from  'index.js';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBSelect } from 'mdbreact';
import {Form} from 'react-bootstrap';
import Axios from 'axios';

class Registration extends Component {
  constructor() {
    super();
    this.state = {
      options: [
        {
          text: "User",
          value: "1"
        },
        {
          text: "Option 2",
          value: "2"
        },
        {
          text: "Option 3",
          value: "3"
        }
      ]
    };
  }

  validatePassword = (event) => {
    if(this.state.password === event.target.value) {
      this.setState({password: event.target.value});
    }
  }

  submitForm = (event) => {
    event.preventDefault();
    var headers = {
      'Content-Type': 'application/json'
    }

    var data = {
      fullName: this.state.fullName,
      email: this.state.email,
      username: this.state.username,
      phone: this.state.phone,
      mobile: this.state.mobile,
      address1: this.state.address1,
      address2: this.state.address2,
      password: this.state.password
    }

    console.log(data);

    Axios.post("http//localhost:3023/register", data, headers)
    .then(function(response) {
        console.log(response);
        console.log("success");
    }, function(err) {
        console.err(err);
    })
  }

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6" style={{ margin: "0 auto" }}>
            <MDBCard>
              <MDBCardBody>
                <form onSubmit={this.submitForm}>
                  <p className="h4 text-center py-4">Register</p>
                  <div className="grey-text">
                    <MDBInput
                      label="Your name"
                      icon="user"
                      group
                      type="text"
                      value={this.state.fullName}
                      onChange={e => this.setState({fullName: e.target.value})}
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Your email"
                      value={this.state.email}
                      onChange={e => this.setState({email: e.target.value})}
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                    />
                    
                    <MDBInput
                      label="Phone no."
                      icon="envelope"
                      group
                      value={this.state.phone}
                      onChange={e => this.setState({phone: e.target.value})}
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Mobile no."
                      icon="envelope"
                      value={this.state.mobile}
                      onChange={e => {this.setState({mobile: e.target.value})}}
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />

                    <MDBInput
                      label="Address1"
                      icon="envelope"
                      group
                      value={this.state.address1}
                      onChange={e => this.setState({address1: e.target.value})}
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />

                    <MDBInput
                      label="Address 2"
                      icon="envelope"
                      value={this.state.address2}
                      onChange={e => this.setState({address2: e.target.value})}
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Your password"
                      icon="lock"
                      value={this.state.password}
                      group
                      type="password"
                      validate
                    />
                    <MDBInput
                      label="Your password"
                      icon="lock"
                      value={this.state.confirmPassword}
                      onChange={this.validatePassword}
                      group
                      type="password"
                      validate
                    />
                    <Form.Group style={{marginLeft: '2.5rem'}} controlId="exampleForm.ControlSelect1">
                      <Form.Label>Please select</Form.Label>
                      <Form.Control as="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Form.Control>
                    </Form.Group>
                  </div>
                  <div className="text-center py-4 mt-3">
                    <MDBBtn color="cyan" type="submit">
                      Register
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}


export default Registration;