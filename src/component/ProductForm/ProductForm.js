import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ProductForm extends React.Component {

    constructor(props) {
        super(props);

        this.productType = props.type;
        this.state = {
            type :'',
            name:'',
            price:'',
            desc:'',
            userId:'',
            invalidName:'none',
            invalidPrice:'none',
            invalidDesc:'none'
        }

        var location = props.type; 
        if(props.type === 'pets'){
            this.state.type = "PETS";
        }else if(props.type === 'accessories'){
            this.state.type = "ACCESSORIES"
        }else if (props.type === 'services'){SERVICES
            this.state.type = "SERVICES"
        }else{
            window.location.replace('/dashboard');
        }

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

    validateDesc = (event) => {
        this.setState({ invalidDesc: "none" });
        if (this.state.desc.length < 3) {
          this.setState({
            invalidDesc: "block",
            invalidForm: true
          });
        }
    }

    testingRegex(pattern, input) {
        const condition = new RegExp(pattern);
        return condition.test(input);
    }

    validatePrice = (event) => {
        this.setState({ invalidPrice: "none" });
        if (!this.testingRegex("^[0-9]+$", this.state.price)) {
            this.setState({
            invalidPrice: "block",
            invalidForm: true
          });
        }
    }

    submitForm = (event) => {
        event.preventDefault();
        const headers = {
            'Authorization':'Bearer '+ localStorage.getItem('userToken'),
            'Content-Type': 'application/json',
        };

        var data ={
            name : this.state.name,
            price: this.state.price,
            desc : this.state.desc,
            type : this.state.type,
            user_id: localStorage.getItem('user_id')
        }
        var token =localStorage.getItem('userToken');
        const axios = require('axios');
        const { version } = require('axios/package');

        console.log(`Axios version: ${version}`);

        axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
        axios.defaults.headers.common['Content-Type'] = 'application/json';
            
        axios.post("http://localhost:3023/api/product/add", data)
        .then(function(response) {
            console.log(response);
            toast("Product added successfully.",{autoClose: 3000});
            setTimeout(()=>{
                window.location.replace(location);
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
                                        <MDBInput
                                            label="Product name"
                                            icon="envelope"
                                            group
                                            type="text"
                                            onChange={e => this.setState({ name: e.target.value })}   validate
                                            onBlur={this.validateName}
                                            error="wrong"
                                            success="right"
                                        />
                                         <label
                                            style={{ display: this.state.invalidName, color: "red", marginLeft: "10%" }} >
                                            Invalid name.
                                        </label>
                                        <MDBInput
                                            label="Price per item"
                                            onChange={e => this.setState({ price: e.target.value })}   validate
                                            icon="lock" icon="shield-alt"
                                            onBlur={this.validatePrice}
                                            group
                                            type="text"
                                            validate
                                        />
                                        <label
                                            style={{ display: this.state.invalidPrice, color: "red", marginLeft: "10%" }} >
                                            Invalid price.
                                        </label>

                                        <MDBCol lg="12">
                                            <label>
                                                Details
                                            </label>

                                            <textarea
                                             className="form-control"
                                             onChange={e => this.setState({ desc: e.target.value })}   validate
                                             onBlur={this.validateDesc}
                                             style={{ marginLeft: '20px' }}
                                               rows="5" />
                                        </MDBCol>
                                        <label
                                            style={{ display: this.state.invalidDesc, color: "red", marginLeft: "10%" }} >
                                            Invalid description.
                                        </label>

                                    </div>
                                    <div className="text-center">
                                        <MDBBtn type="submit" >Submit</MDBBtn>
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

export default ProductForm;