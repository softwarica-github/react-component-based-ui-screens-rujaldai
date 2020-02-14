import React from "react";
import { MDBModal, MDBModalBody, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import ProductForm from "../ProductForm/ProductForm";
import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modalEdit: false,
      serviceList:[],
      loaded : false,
      serviceDisplay:[],
      service :[]
    }
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }


  toggleEdit = function(product){
    console.log("test");
    console.log(product);
    this.state.service = product;
    this.setState({
      modalEdit: !this.state.modalEdit
    });
  }

  
  removePet = function(service){
    console.log(service);
  
    const axios = require('axios');
    const { version } = require('axios/package');
    axios.defaults.headers.common['Authorization'] = 'Bearer '+localStorage.getItem('userToken');
    axios.defaults.headers.common['Content-Type'] = 'application/json';
   
    axios.post("http://localhost:3023/api/product/"+service.id,null)
    .then(function(response) {
      toast("Product deleted successfully.",{autoClose: 1000});
      setTimeout(()=>{
        window.location.replace('/services') ;
      },1000);
    });
  
  }

  componentDidMount(){
    var user_id = localStorage.getItem('user_id');
    var online = localStorage.getItem('isAuthenticated') === 'true';
    fetch("http://localhost:3023/api/product/"+user_id+"/all")
    .then(response => {
      return response.json();
    }).then(data =>{
        console.log(data.products);
        let serviceDisplay = data.products.map((service)=> {
          if(service.type === 'SERVICES' && (service.user_id+'' === user_id+'')){
            return(
              <div style={{margin: '59px'}}>
              <MDBRow >
                <MDBCol lg="5" xl="4"  >
                  <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                    <img style={{maxHeight : '200px', width:'100%', height :'100%'}}
                      className="img-fluid"
                      src={service.image}
                      alt=""
                    />
                    <a href="#!">
                      <MDBMask overlay="white-slight" />
                    </a>
                  </MDBView>
                </MDBCol>
                <MDBCol  lg="7" xl="8">
                  <h3 style={{textAlign : 'left'}} className="font-weight-bold mb-3 p-0">
                    <strong>{service.name}</strong>
                  </h3>
                  <p style={{textAlign : 'left'}} className="dark-grey-text">
                    <strong>Price : </strong>Rs. {service.price} 
                  </p>
                <p style={{textAlign : 'left'}} className="dark-grey-text">
                <strong>Description: </strong>{service.desc}
                </p>
                  
                <MDBBtn style={{display: online ? 'none' : 'inline-block'}} color="primary" size="md">
                      Book Now
                  </MDBBtn>
                <a >              
                  <span onClick ={() => this.toggleEdit(service)} style={{textAlign: 'left', color: 'blue', paddingRight :'30px'}}>
                    Edit
                  </span>            
                </a>
                <a >              
                  <span onClick={() => this.removePet(service)}  style={{textAlign: 'left', color: 'blue', paddingRight :'30px'}} >
                    Remove
                  </span>
                </a>
                </MDBCol>
              </MDBRow>
  
              </div>
              )
          }
        });
        this.setState({serviceDisplay: serviceDisplay})
       
    }, function(err) {
        console.log(err);
    });
  }
  

  render() {
    return (
      <MDBCard className="text-center">
        <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            Available Services
        </h2>
          <MDBBtn onClick={this.toggle}>Add new Service</MDBBtn>
          <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
            <MDBModalBody>
              <ProductForm name="Services" type="services" />
            </MDBModalBody>
          </MDBModal>
          <MDBModal isOpen= {this.state.modalEdit} toggle={() =>this.toggleEdit('')}>
            <MDBModalBody>
            <ProductForm name="Edit Service" type="services" case="edit" product={this.state.service} />
            </MDBModalBody>
          </MDBModal>
           {this.state.serviceDisplay}
        </MDBCardBody>
      </MDBCard>
    );
  }
}

export default Services;