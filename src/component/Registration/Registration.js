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
      invalidPassword: "none",
      invalidFullname: "none",
      invalidAddress1: "none",
      invalidEmail: "none",
      invalidPhone: "none",
      invalidMobile: "none",  
      formInvalid: true,
      fullName:'',
      email:'',
      phone:'',
      mobile:'',
      address1:'',
      address2:'',
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
    console.log(this.state.password +", "+event.target.value)
    if(this.state.password === event.target.value) {
      this.setState({
        invalidPassword: "none",
        formInvalid: false
    });
    }else{
      this.setState({
        invalidPassword: "block",
        formInvalid: true
      });
    }
  }

  validateFullname = (event) => {
    console.log(this.state.fullName);
    if(this.testingRegex("^[a-zA-Z]+ [a-zA-Z]+$",this.state.fullName)){
      console.log(this.testingRegex("^[a-zA-Z]+ [a-zA-Z]+$",this.state.fullName));
      this.setState({
        invalidFullname: "none",
        formInvalid: false
      });
    }else{
      this.setState({
        invalidFullname: "block",
        formInvalid: true
      });
    }
  }


  validateAddress1 = (event) => {
    console.log(this.state.address1);
    if(this.state.address1.length > 0){
      this.setState({
        invalidAddress1: "none",
        formInvalid: false
      });
    }else{
      this.setState({
        invalidAddress1: "block",
        formInvalid: true
      });
    }
  }

  testingRegex(pattern, input){
    const condition = new RegExp(pattern);
    return condition.test(input);  
  }
  
  validateEmail = (event) => {
    if (!this.testingRegex("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$",this.state.email)) {
      this.setState({
        invalidEmail: "block",
        formInvalid: true
      });
    }else{
      this.setState({
        invalidEmail: "none",
        formInvalid: false
      });
    } 
  }
  
  validatePhone = (event) => {
    if (this.testingRegex("^[1-9][0-9]{6}$",this.state.phone) ||
    this.testingRegex("[0][1-9][0-9]{7}$",this.state.phone)) {
      this.setState({
        invalidPhone: "none",
        formInvalid: false
      });
    }else{
      this.setState({
        invalidPhone: "block",
        formInvalid: true
      });
    } 
  }
  
  validateMobile = (event) => {
    if (!this.testingRegex("^[9][7-8][0-9][0-9]{6}$",this.state.mobile)) {
      this.setState({
        invalidMobile: "block",
        formInvalid: true
      });
    }else{
      this.setState({
        invalidMobile: "none",
        formInvalid: false});
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

    Axios.post("http://localhost:3023/api/user/registration", data, headers)
    .then(function(response) {
        console.log(response);
        console.log("success");
    }, function(err) {
        console.log(err);
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
                      onInput= {this.validateFullname}
                      validate
                      error="wrong"
                      success="right"
                    />
                    <label 
                      style={{display :this.state.invalidFullname, color: "red", marginLeft:"10%"}} >
                      Please, enter fullname.
                    </label>
                      <MDBInput
                      label="Your email"
                      value={this.state.email}
                      onChange={e => this.setState({email: e.target.value})}
                      onInput = {this.validateEmail}
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <label 
                      style={{display :this.state.invalidEmail, color: "red", marginLeft:"10%"}} >
                      Please, enter valid email.
                    </label>                    
                    <MDBInput
                      label="Phone no."
                      icon="envelope"
                      group
                      value={this.state.phone}
                      onChange={e => this.setState({phone: e.target.value})}
                      onInput={this.validatePhone}
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <label 
                      style={{display :this.state.invalidPhone, color: "red", marginLeft:"10%"}} >
                      Invalid phone number.
                    </label>
                    <MDBInput
                      label="Mobile no."
                      icon="envelope"
                      value={this.state.mobile}
                      onChange={e => {this.setState({mobile: e.target.value})}}
                      onInput= {this.validateMobile}
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <label 
                      style={{display :this.state.invalidMobile, color: "red", marginLeft:"10%"}} >
                      Invalid mobile number.
                    </label>
                    <MDBInput
                      label="Address1"
                      icon="envelope"
                      group
                      value={this.state.address1}
                      onChange={e => this.setState({address1: e.target.value})}
                      onInput={this.validateAddress1}
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <label 
                      style={{display :this.state.invalidAddress1, color: "red", marginLeft:"10%"}} >
                      Please, enter valid address.
                    </label>

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
                      onChange={e => this.setState({password: e.target.value})}
                      group
                      type="password"
                      validate
                    />
                    <MDBInput
                      label="Confirm your password"
                      icon="lock"
                      value={this.state.confirmPassword}
                      onInput={this.validatePassword}
                      group
                      type="password"
                      validate
                    />
                    <label 
                      style={{display :this.state.invalidPassword, color: "red", marginLeft:"10%"}} >
                      Invalid password details.
                    </label>

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
                    <MDBBtn color="cyan" type="submit" disabled ={this.state.formInvalid} onclick="this.register">
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