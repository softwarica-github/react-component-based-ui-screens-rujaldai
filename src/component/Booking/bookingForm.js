import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class BookingForm extends React.Component {

    constructor(props) {
        super(props);

        this.productType = props.type;
        this.state = {
            type :'',
            name:'',
            contact:'',
            address:'',
            user_id:'',
            product_id:'',
            product: [],
            invalidName: "none",
            invalidContact: "none",
            invalidAddress: "none",
            disableSubmit : false
        }
        console.log("inside booking form");
        console.log(props);
        // if(props.type === 'pets'){
        //     this.state.type = "PETS";
        // }else if(props.type === 'accessories'){
        //     this.state.type = "ACCESSORIES"
        // }else if (props.type === 'services'){
        //     this.state.type = "SERVICES"
        // }else{
        //     window.location.replace('/dashboard');
        // }
        // if(props.product){
        //     this.state.name = props.product.name;
        //     this.state.price = props.product.price;
        //     this.state.desc = props.product.desc;
        //     this.state.productId = props.product.id;
        // }
        this.state.product_id =  props.product.id;
        this.state.user_id =  props.product.user_id;
    };

    validateName = (event) => {
        this.setState({ invalidName: "none" });
        if (this.state.name.length < 3) {
          this.setState({
            invalidName: "block",
            invalidForm: true
          });
        }
    }
    validateContact = (event) => {
        this.setState({ invalidContact: "none" });
        if (this.state.contact.length < 3) {
          this.setState({
            invalidContact: "block",
            invalidForm: true
          });
        }
    }

    validateAddress = (event) => {
        this.setState({ invalidAddress: "none" });
        if (this.state.address.length < 3) {
          this.setState({
            invalidAddress: "block",
            invalidForm: true
          });
        }
    }
    
    submitForm = (event) => {
        event.preventDefault();
        this.setState({
            disableSubmit : true, 
        });
        var data = {
                "name": this.state.name,
                "contact": this.state.contact,
                "address": this.state.address,
                "product_id": this.state.product_id,
                "user_id": this.state.user_id
        }
        console.log(data);
        const axios = require('axios');
        const { version } = require('axios/package');
        
        axios.post("http://localhost:3023/api/product/book/product", data)
        .then(function(response) {
            console.log(response);
            toast("Product booked successfully.",{autoClose: 3000});
            setTimeout(()=>{
                window.location.replace('/home');
            },3000);
        }, function(err) {
            console.log(err);
        })
    };    
    render() {

        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="12" lg="12" style={{ margin: "0 auto" }}>
                        <MDBCard>
                            <MDBCardBody>
                                <form onSubmit={this.submitForm}>
                                    <p className="h5 text-center mb-4">{this.props.name}</p>
                                    <div className="grey-text">
                                    <div>
x                                   </div>
                                        <MDBInput
                                            label="Name"
                                            icon="envelope"
                                            group
                                            type="text"
                                            onChange={e => this.setState({ name: e.target.value })}   validate
                                            onBlur={this.validateName}
                                            value={this.state.name}
                                            error="wrong"
                                            success="right"
                                        />
                                         <label
                                            style={{ display: this.state.invalidName, color: "red", marginLeft: "10%" }} >
                                            Invalid name.
                                        </label>
                                        <MDBInput
                                            label="Contact"
                                            icon="envelope"
                                            group
                                            type="text"
                                            onChange={e => this.setState({ contact: e.target.value })}   validate
                                            onBlur={this.validateContact}
                                            value={this.state.contact}
                                            error="wrong"
                                            success="right"
                                        />
                                         <label
                                            style={{ display: this.state.invalidContact, color: "red", marginLeft: "10%" }} >
                                            Invalid contact details.
                                        </label>
                                        <MDBInput
                                            label="Address"
                                            icon="envelope"
                                            group
                                            type="text"
                                            onChange={e => this.setState({ address: e.target.value })}   validate
                                            onBlur={this.validateAddress}
                                            value={this.state.address}
                                            error="wrong"
                                            success="right"
                                        />
                                         <label
                                            style={{ display: this.state.invalidAddress, color: "red", marginLeft: "10%" }} >
                                            Invalid address details.
                                        </label>
                                    </div>
                                    <div className="text-center" >
                                        <MDBBtn type="submit" disabled = {this.state.disableSubmit}>Submit</MDBBtn>
                                    </div>
                                </form>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    };
}

export default BookingForm;