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
      modal: false,
      pets:[],
      services:[],
      accessories:[]
    };
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  }
  componentWillMount(){
    if(localStorage.getItem("isAuthenticated")=== 'true'){
      this.state.name = localStorage.getItem("fullname");
    }
    var items =[
      {name:"Golden Retriber",type:"PET",price:"300$",desc:"Guess what ?? its a retriver.",
      image:"https://www.thesprucepets.com/thmb/daHAnhowPummm2Uqe1O5drHsp-8=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/golden-retriever-sitting-down-in-a-farm-837898820-5c7854ff46e0fb00011bf29a.jpg"},
      {name:"Japanese Spitz",type:"PET",price:"100$",desc:"Guess what ?? its a Spitz.",
      image:"https://www.thesprucepets.com/thmb/daHAnhowPummm2Uqe1O5drHsp-8=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/golden-retriever-sitting-down-in-a-farm-837898820-5c7854ff46e0fb00011bf29a.jpg"},
      {name:"Pet School",type:"SERVICE",price:"1000$",desc:"Guess what ?? lets train your pet.",
      image:"https://www.thesprucepets.com/thmb/daHAnhowPummm2Uqe1O5drHsp-8=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/golden-retriever-sitting-down-in-a-farm-837898820-5c7854ff46e0fb00011bf29a.jpg"},
      {name:"Pet Doctor",type:"SERVICE",price:"20$",desc:"Guess what ??Let's cure your pet.",
      image:"https://www.thesprucepets.com/thmb/daHAnhowPummm2Uqe1O5drHsp-8=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/golden-retriever-sitting-down-in-a-farm-837898820-5c7854ff46e0fb00011bf29a.jpg"},
      {name:"Wood Pet HouseE",type:"ACCESSORIES",price:"50$",desc:"Guess what ??It's our new puppy home.",
      image:"https://i.etsystatic.com/21705089/r/il/7050b5/2107524084/il_794xN.2107524084_g2yh.jpg"},
      {name:"Neck belt",type:"ACCESSORIES",price:"10$",desc:"Guess what ??let's chain your puupy.",
      image:"https://i.etsystatic.com/21705089/r/il/7050b5/2107524084/il_794xN.2107524084_g2yh.jpg"},
    ];

    for(var item in items){
      if(items[item].type === "PET"){
        this.state.pets.push(items[item]);
      }else if(items[item].type === "SERVICE"){
        this.state.services.push(items[item]);
      }else if(items[item].type === "ACCESSORIES"){
        this.state.accessories.push(items[item]);
      }
    }
    console.log(this.state.pets);
    console.log("/");
    console.log(this.state.services);
    console.log(this.state.accessories);
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
                src={this.state.pets[0].image}
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
              <strong>{this.state.pets[0].name}</strong>
            </h3>
            <p>{this.state.pets[0].desc} </p>
            <MDBBtn color="success" size="md" className="waves-light ">
              MORE
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
              <strong>{this.state.accessories[0].name}</strong>
            </h3>
            <p>
            {this.state.accessories[0].desc}
            </p>
            <MDBBtn
              color="pink"
              size="md"
              className="mb-lg-0 mb-4 waves-light"
            >
              MORE
            </MDBBtn>
          </MDBCol>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src={this.state.accessories[0].image}
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
                src={this.state.services[0].image}
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
              <strong>{this.state.services[0].name}</strong>
            </h3>
            <p>{this.state.services[0].desc}
            </p>
            <MDBBtn color="indigo" size="md" className="waves-light ">
              MORE
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