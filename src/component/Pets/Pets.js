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
      petList:[],
      test: 'hello',
      loaded : false,
      petDisplay:[]
    }
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  componentDidMount(){
    var pets= [];
    var user_id = localStorage.getItem('user_id');
    fetch("http://localhost:3023/api/product/"+user_id+"/all")
    .then(response => {
      return response.json();
    }).then(data =>{
        // toast("Product fetched successfully.",{autoClose: 3000});
        // for(var item in response.data.products){
        //   pets.push(response.data.products[item]);
        // }
        // for(var item in pets){
        //   this.state.petList.push(pets[item]);
        // }
        console.log(data.products);
        let petDisplay = data.products.map((pet)=> {
          return(
            <MDBRow>
              <MDBCol lg="5" xl="4">
                <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                  <img
                    className="img-fluid"
                    src={pet.image}
                    alt=""
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" />
                  </a>
                </MDBView>
              </MDBCol>
              <MDBCol lg="7" xl="8">
                <h3 className="font-weight-bold mb-3 p-0">
                  <strong>Platinum</strong>
                </h3>
                <p className="dark-grey-text">
                  {pet.desc}
              </p>
                <MDBBtn color="primary" size="md">
                  Book Now
              </MDBBtn>
              </MDBCol>
            </MDBRow>
            )
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
          <p className="text-center w-responsive mx-auto mb-5">
            ALL  TOGETHER THREE TYPES OF ROOMS ARE AVAILABLE HERE!!!
        </p>
        {this.state.petDisplay}
        </MDBCardBody>
      </MDBCard>
    );
  }
}

export default Pets;