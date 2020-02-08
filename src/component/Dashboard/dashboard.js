import React, { Component } from "react";
import { Link } from 'react-router-dom';
//import icon from 'material-ui/'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBModal, MDBModalBody, MDBModalHeader } from 'mdbreact';
import Axios from 'axios';

class Dashboard extends Component {
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

   render() {
    return (
      <div>
        <MDBRow>
          <MDBCol md="12" lg="12" style={{ margin: "0 auto" }}>
            <MDBCard>
              <MDBCardBody>
                  <p>this is dash board</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
};

export default Dashboard;