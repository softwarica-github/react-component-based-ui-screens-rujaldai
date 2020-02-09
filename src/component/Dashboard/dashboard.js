import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import Axios from 'axios';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      modal: false
    };
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  }
  componentDidMount(){
    if(localStorage.getItem("isAuthenticated")=== 'true'){
      this.state.name = localStorage.getItem("fullname");
    }
  }
   render() {
    return (
      <div>
          <MDBCard >
      <MDBCardBody>
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          {this.state.name}
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
          Welcome, to your dashboad. Feel free to add services to your products.
        </p>
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://www.thesprucepets.com/thmb/daHAnhowPummm2Uqe1O5drHsp-8=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/golden-retriever-sitting-down-in-a-farm-837898820-5c7854ff46e0fb00011bf29a.jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <a href="#!" className="green-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="utensils" className="pr-2" />
                PETS
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Golden Retriver</strong>
            </h3>
            <p>
            The Golden Retriever is a medium-large gun dog that retrieves shot waterfowl, such as ducks and upland
             game birds, during hunting and shooting parties. The name "retriever" refers to the breed's ability to retrieve shot game undamaged due to their soft mouth.
              Golden retrievers have an instinctive love of water, and are easy to train to basic or advanced obedience standards.
               They are a long-coated breed, with a dense inner coat that provides them with adequate warmth in the outdoors, 
               and an outer coat that lies flat against their bodies and repels water.
            </p>
            <MDBBtn color="success" size="md" className="waves-light ">
              Read more
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="7">
            <a href="#!" className="pink-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="image" className="pr-2" />
                ACCESSORIES
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Wood Pet House</strong>
            </h3>
            <p>
              Wood pet house is a small pet house for small dogs like pugs or it can be used even for cats.
              It come along with a pet sofa and is well furnished. 
            </p>
            <MDBBtn
              color="pink"
              size="md"
              className="mb-lg-0 mb-4 waves-light"
            >
              Read more
            </MDBBtn>
          </MDBCol>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://i.etsystatic.com/21705089/r/il/7050b5/2107524084/il_794xN.2107524084_g2yh.jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://theonlinedogtrainer.com/wp-content/uploads/2014/08/What-you-dont-learn-at-puppy-training-classes.jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <a href="#!" className="indigo-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="suitcase" className="pr-2" />
                SERVICES
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Puppy School</strong>
            </h3>
            <p>
            We provide a safe environment that will see you and your dog or puppy thrive together under 
            the skilled guidance of our friendly, professional training team.
            </p>
          
            <MDBBtn color="indigo" size="md" className="waves-light ">
              Read more
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
      </div>
    );
  }
};

export default Dashboard;