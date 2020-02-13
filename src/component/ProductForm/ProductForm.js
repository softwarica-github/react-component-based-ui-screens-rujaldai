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
            productId:'',
            invalidName:'none',
            invalidPrice:'none',
            invalidDesc:'none',
            case: '',
            product: []
        }
        console.log(props);
        console.log(props.product);
        console.log(props.type);
        console.log(props.case);
        if(props.type === 'pets'){
            this.state.type = "PETS";
        }else if(props.type === 'accessories'){
            this.state.type = "ACCESSORIES"
        }else if (props.type === 'services'){SERVICES
            this.state.type = "SERVICES"
        }else{
            window.location.replace('/dashboard');
        }
        if(props.product){
            this.state.name = props.product.name;
            this.state.price = props.product.price;
            this.state.desc = props.product.desc;
            this.state.productId = props.product.id;
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


  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(img)
      });
    }
  };

    submitForm = (event) => {
        console.log(this.state.image);
        event.preventDefault();
        var data ={
            name : this.state.name,
            price: this.state.price,
            desc : this.state.desc,
            type : this.state.type,
            user_id: localStorage.getItem('user_id'),
            image: ''
        }
        var editProductId= '';
        if(this.state.productId){
            editProductId = this.state.productId;
        }
        var imgData = new FormData();
        var imagedata = document.querySelector('input[type="file"]').files[0];
        imgData.append("imageFile", imagedata);
        Axios.post("http://localhost:3023/api/upload", imgData)
        .then(function(response) {
            console.log(response);
            
            const headers = {
                'Authorization':'Bearer '+ localStorage.getItem('userToken'),
                'Content-Type': 'application/json',
            };
    
            data.image= 'http://localhost:3023/'+response.data.path;
            
            var token =localStorage.getItem('userToken');
            const axios = require('axios');
            const { version } = require('axios/package');
            axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
            axios.defaults.headers.common['Content-Type'] = 'application/json';
            
            if(editProductId === ''){
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
            }else{
                data.id = editProductId;
                console.log(data.id);
                axios.put("http://localhost:3023/api/product/update", data)
                .then(function(response) {
                    console.log(response);
                    toast("Product updated successfully.",{autoClose: 3000});
                    setTimeout(()=>{
                        window.location.replace(location);
                    },3000);
                }, function(err) {
                    console.log(err);
                })
            }}, function(err) {
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
                                    <img  style = {{maxWidth:'50%'}} src={this.state.image} />
                                    <input type="file" name="myImage" onChange={this.onImageChange} />
x                                   </div>
                                        <MDBInput
                                            label="Product name"
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
                                            label="Price per item"
                                            onChange={e => this.setState({ price: e.target.value })}   validate
                                            icon="lock" icon="shield-alt"
                                            onBlur={this.validatePrice}
                                            group
                                            type="text"
                                            value={this.state.price}
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
                                             onChange={e => this.setState({ desc: e.target.value })}
                                             onBlur={this.validateDesc}
                                             value={this.state.desc}
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