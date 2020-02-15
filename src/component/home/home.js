import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import MerchantList from "../MerchantList/MerchantList";
import styles from '../mystyle/app.css'; 

class Home extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          products:[],
          pets: [],
          services : [],
          accessories:[],
          petDisplay :[],
          serviceDisplay :[],
          accDisplay :[]
        }
    }
    
    componentDidMount(){
        var products = [];
        var users =[];
        fetch("http://localhost:3023/api/product/all")
        .then(response => {
        return response.json();
        }).then(data =>{
            var products =  data.products;
            fetch("http://localhost:3023/api/user/all")
            .then(response => {
            return response.json();
            }).then(data =>{
                users =  data.users;
                for(var product in products){
                    for(var user in users){
                        if(products[product].user_id+'' === users[user].id+''){
                            products[product].merchant_name = users[user].fullname;
                        }
                    }
                }
                for(var product in products){
                    if(products[product].type === "PETS"){
                        this.state.pets.push(products[product]);
                      }else if(products[product].type === "SERVICES"){
                        this.state.services.push(products[product]);
                      }else if(products[product].type === "ACCESSORIES"){
                        this.state.accessories.push(products[product]);
                      }
                }
                console.log(products);
                console.log(this.state.pets);
                console.log(this.state.services);
                console.log(this.state.accessories);
                let petDisplay = this.state.pets.map((product)=> {
                    return(
                         <MDBCol style ={{paddingBottom:'40px', display:'grid' }} lg="4" md="12" className="mb-lg-0 mb-4">
                         <MDBView hover className="rounded z-depth-2 mb-4" waves>
                           <img
                             className="img-fluid"
                             src={product.image}
                             style ={{maxHeight:'200px',width:'100%'}}
                             alt=""
                           />
                           <MDBMask overlay="white-slight" />
                         </MDBView>
                         <a href="#!" className="pink-text">
                           <p>
                             By : {product.merchant_name}
                           </p>
                         </a>
                         <p>
                           <strong>{product.name}</strong>
                         </p>
                         <p>Price : Rs. {product.price}</p>
                         <p className="dark-grey-text">
                           {product.desc}
                         </p>
                         <MDBBtn color="pink" rounded size="md">
                           BOOK
                         </MDBBtn>
                       </MDBCol>
                    )
                });
                let serviceDisplay = this.state.services.map((product)=> {
                    return(
                         <MDBCol style ={{borderBottom:'20px', display:'grid'}} lg="4" md="12" className="mb-lg-0 mb-4">
                         <MDBView hover className="rounded z-depth-2 mb-4" waves>
                           <img
                             className="img-fluid"
                             src={product.image}
                             style ={{maxHeight:'200px',width:'100%'}}
                             alt=""
                           />
                           <MDBMask overlay="white-slight" />
                         </MDBView>
                         <a href="#!" className="pink-text">
                           <p>
                             By : {product.merchant_name}
                           </p>
                         </a>
                         <p>
                           <strong>{product.name}</strong>
                         </p>
                         <p>Price : Rs. {product.price}</p>
                         <p className="dark-grey-text">
                           {product.desc}
                         </p>
                         <MDBBtn color="pink" rounded size="md">
                           BOOK
                         </MDBBtn>
                       </MDBCol>
                    )
                });
                let accDisplay = this.state.accessories.map((product)=> {
                    return(
                         <MDBCol style ={{borderBottom:'20px', display:'grid'}} lg="4" md="12" className="mb-lg-0 mb-4">
                         <MDBView hover className="rounded z-depth-2 mb-4" waves>
                           <img
                             className="img-fluid"
                             src={product.image}
                             style ={{maxHeight:'200px',width:'100%'}}
                             alt=""
                           />
                           <MDBMask overlay="white-slight" />
                         </MDBView>
                         <a href="#!" className="pink-text">
                           <p>
                             By : {product.merchant_name}
                           </p>
                         </a>
                         <p>
                           <strong>{product.name}</strong>
                         </p>
                         <p>Price : Rs. {product.price}</p>
                         <p className="dark-grey-text">
                           {product.desc}
                         </p>
                         <MDBBtn color="pink" rounded size="md">
                           BOOK
                         </MDBBtn>
                       </MDBCol>
                    )
                });
                this.setState({
                    petDisplay: petDisplay,
                    serviceDisplay : serviceDisplay,
                    accDisplay :accDisplay
                });
            }, function(err) {
                console.log(err);
            });
        }, function(err) {
            console.log(err);
        });
    }
  render() {

    return (
    <MDBCard>
      <MDBCardBody className="text-center">
        <h2 className="h1-responsive font-weight-bold text-center ">
          Pets
        </h2>
        <MDBRow>
        {this.state.petDisplay}
        </MDBRow>
      </MDBCardBody>
      <MDBCardBody className="text-center">
        <h2 className="h1-responsive font-weight-bold text-center">
          Service
        </h2>
        <MDBRow>
        {this.state.serviceDisplay}
        </MDBRow>
      </MDBCardBody>
      <MDBCardBody className="text-center">
        <h2 className="h1-responsive font-weight-bold text-center">
          Accessories
        </h2>
        <MDBRow>
        {this.state.accDisplay}
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
        
    );
  }
}

export default Home;