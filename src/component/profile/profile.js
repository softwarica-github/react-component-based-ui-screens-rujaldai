import React, { Component } from "react";
import { Link } from 'react-router-dom';
//import icon from 'material-ui/'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBModal, MDBModalBody, MDBModalHeader, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import Axios from 'axios';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: localStorage.getItem("username"),
            fullname: localStorage.getItem("fullname"),
            mobile: localStorage.getItem("mobile"),
            phone: localStorage.getItem("phone"),
            address1: localStorage.getItem("address1"),
            address2: localStorage.getItem("address2"),
        };
    }


    render() {
    return (
        <div>
        <MDBRow>
            <MDBCol md="12" lg="12" style={{ margin: "0 auto" }}>
            <MDBCard>
                <MDBCardBody>
                    <strong>Merchant profile</strong> <br/>
                    <MDBTable>
                        <MDBTableBody>
                            <tr>
                            <td width="300px">Username</td>
                            <td>{this.state.username}</td>
                            </tr>
                            <tr>
                            <td>Name</td>
                            <td>{this.state.fullname }</td>
                            </tr>
                            <tr>
                            <td>Mobile Number</td>
                            <td>{this.state.mobile}</td>
                            </tr>
                            <tr>
                            <td>Phone Number</td>
                            <td>{this.state.phone}</td>
                            </tr>
                            <tr>
                            <td>Address</td>
                            <td>{this.state.address1}</td>
                            </tr>
                            <tr>
                            <td>Address (temp)</td>
                            <td>{this.state.address2}</td>
                            </tr>
                        </MDBTableBody>
                    </MDBTable>    
                </MDBCardBody>
            </MDBCard>
            </MDBCol>
        </MDBRow>
        </div>
    );
    }
};

export default Profile;