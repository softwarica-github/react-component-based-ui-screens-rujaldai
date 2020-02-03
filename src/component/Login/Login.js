import React from "react";
//import icon from 'material-ui/'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

const Login = () => {
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
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Type your password"
                    icon="lock" MDBIcon icon="shield-alt"
                    group
                    type="password"
                    validate
                  />
                </div>
                <div className="text-center">
                  <MDBBtn>Login</MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;