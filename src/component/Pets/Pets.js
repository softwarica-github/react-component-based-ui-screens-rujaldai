import React from "react";
import { MDBModal, MDBModalBody, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import ProductForm from "../ProductForm/ProductForm";
import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Pets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modalEdit: false,
      petList:[],
      test: 'hello',
      loaded : false,
      petDisplay:[],
      pet :[]
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
    this.state.pet = product;
    this.setState({
      modalEdit: !this.state.modalEdit
    });
  }

  
  removePet = function(pet){
    console.log(pet);
  
    const axios = require('axios');
    const { version } = require('axios/package');
    axios.defaults.headers.common['Authorization'] = 'Bearer '+localStorage.getItem('userToken');
    axios.defaults.headers.common['Content-Type'] = 'application/json';
   
    axios.post("http://localhost:3023/api/product/"+pet.id,null)
    .then(function(response) {
      toast("Product deleted successfully.",{autoClose: 1000});
      setTimeout(()=>{
        window.location.replace('/pets') ;
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
        let petDisplay = data.products.map((pet)=> {
          if(pet.type === 'PETS'){
            return(
              <div style={{margin: '59px'}}>
              <MDBRow >
                <MDBCol lg="5" xl="4"  >
                  <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                    <img style={{maxHeight : '200px', width:'100%', height :'100%'}}
                      className="img-fluid"
                      src={pet.image}
                      alt=""
                    />
                    <a href="#!">
                      <MDBMask overlay="white-slight" />
                    </a>
                  </MDBView>
                </MDBCol>
                <MDBCol  lg="7" xl="8">
                  <h3 style={{textAlign : 'left'}} className="font-weight-bold mb-3 p-0">
                    <strong>{pet.name}</strong>
                  </h3>
                  <p style={{textAlign : 'left'}} className="dark-grey-text">
                    <strong>Price : </strong>Rs. {pet.price} 
                  </p>
                <p style={{textAlign : 'left'}} className="dark-grey-text">
                <strong>Description: </strong>{pet.desc}
                </p>
                <MDBBtn style={{display: online ? 'none' : 'inline-block'}} color="primary" size="md">
                      Book Now
                  </MDBBtn>
                <a >              
                  <span onClick ={() => this.toggleEdit(pet)} style={{textAlign: 'left', color: 'blue', paddingRight :'30px'}}>
                    Edit
                  </span>            
                </a>
                <a >              
                  <span onClick={() => this.removePet(pet)}  style={{textAlign: 'left', color: 'blue', paddingRight :'30px'}} >
                    Remove
                  </span>
                </a>
                </MDBCol>
              </MDBRow>
  
              </div>
              )
          }
        });
        this.setState({petDisplay: petDisplay})
       
       
    }, function(err) {
        console.log(err);
    });
  }
  

  render() {
    return (
      <MDBCard className="text-center">
        <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            Available Pets
        </h2>
          <MDBBtn onClick={this.toggle}>Add new Pets</MDBBtn>
          <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
            <MDBModalBody>
              <ProductForm name="Pets" type="pets" />
            </MDBModalBody>
          </MDBModal>
          <MDBModal isOpen= {this.state.modalEdit} toggle={() =>this.toggleEdit('')}>
            <MDBModalBody>
            <ProductForm name="Edit Pet" type="pets" case="edit" product={this.state.pet} />
            </MDBModalBody>
          </MDBModal>
           {this.state.petDisplay}
        </MDBCardBody>
      </MDBCard>
    );
  }
}

export default Pets;