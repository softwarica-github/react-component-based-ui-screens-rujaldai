import React, {Component} from "react";
//import icon from 'material-ui/'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';


class Login extends Component {
  constructor(props){
      super(props);
      this.state= {
        invalidEmail : 'hidden',
        invalidPassword : 'hidden',
        email :'',
        password :''
      };   
  };

  testingRegex(pattern, input){
    const condition = new RegExp(pattern);
    return condition.test(input);  
  }
    
  validateEmail = (event) => {
    if (!this.testingRegex("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$",this.state.email)) {
      this.setState({invalidEmail: "visible"});
    }else{
      this.setState({invalidEmail: "hidden"});
    } 
  }

  validatePassword = (event) =>{
    this.setState({invalidPassword: "hidden"});
    if(this.state.password.length < 5){
      this.setState({invalidPassword: "visible"});
      this.setState({invalidForm : true});
    }
  }

  doLogin = (event) =>{
    this.validateEmail();
    this.validatePassword();
    if(this.state.email !== '' || this.state.password !== ''){
      if(this.state.invalidEmail === 'visible' || this.state.invalidPassword === 'visible'){
        alert("login failed");
      } else{
        alert("login in progress");
      }
    }
    
  }

  render() {
    return(
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
                      onChange={e => this.setState({email: e.target.value})}
                      onBlur = {this.validateEmail}
                      validate
                      error="wrong"
                      success="right"
                    />
                    <label 
                      style={{visibility :this.state.invalidEmail, color: "red", marginLeft:"10%"}} >
                      Please, enter valid email.
                    </label>
                    <MDBInput
                      label="Type your password"
                      icon="lock" MDBIcon icon="shield-alt"
                      onChange={e => this.setState({password: e.target.value})}
                      onBlur = {this.validatePassword}
                      group
                      type="password"
                      validate
                    />
                  </div>
                  <label 
                      style={{visibility :this.state.invalidPassword, color: "red", marginLeft:"10%"}} >
                      Password must be atleast 5 characters.
                  </label>
                  <div className="text-center">
                    <MDBBtn onClick = {this.doLogin}>Login</MDBBtn>
                  </div>
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