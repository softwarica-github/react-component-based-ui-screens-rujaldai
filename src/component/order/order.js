import React from "react";
import { MDBModal, MDBModalBody, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBTable, MDBTableBody, MDBTableHead ,MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import ProductForm from "../ProductForm/ProductForm";
import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { render } from "react-dom";

class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      petList:[],
      test: 'hello',
      loaded : false,
      bookingList:[],
      pet :[]
    }
  }
  
  updateOrder = function(booking, status){
    console.log(booking);
    const axios = require('axios');
    const { version } = require('axios/package');
    axios.defaults.headers.common['Authorization'] = 'Bearer '+localStorage.getItem('userToken');
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    var data ={id :'', status:''};
    if(status === 'delivered'){
        data.id= booking.id;
        data.status= 'DELIVERED';
    }else {
        data.id= booking.id;
        data.status= 'CANCELED';
    }
    console.log(data);
    axios.post("http://localhost:3023/api/product/booking/update",data)
    .then(function(response) {
      toast("Booking status updated successfully.",{autoClose: 1000});
      setTimeout(()=>{
        window.location.replace('/order') ;
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
        var product =[];
        product = data.products;
        fetch("http://localhost:3023/api/product/booking/"+user_id+"/all")
        .then(response => {
            return response.json();
          }).then(book=>{
            var bookings = [];
            bookings = book.booking;
            for(var b in bookings){
                for (var p in product){
                    if(bookings[b].product_id === product[p].id){
                        bookings[b].product = product[p];
                    }
                }
            }
            let bookingList =
            bookings.map((book)=> {
                return(
                    <tr>
                    <td>{book.product.name}</td>
                    <td>{book.product.price}</td>
                    <td>{book.name}</td>
                    <td>{book.contact}</td>
                    <td>{book.address}</td>
                    <td>{book.status}</td>
                    <td><button 
                    style={{paddingRight:'15px',display : (book.status ==='CANCELED' || book.status ==='DELIVERED')? 'none' :'block'}}
                    onClick = {() => this.updateOrder(book,'delivered')}
                    >Deliver</button>
                    <button  style={{paddingRight:'15px', display : (book.status ==='CANCELED' || book.status ==='DELIVERED')? 'none' :'block'}} 
                    onClick = {() => this.updateOrder(book,'canceled')}
                    >Cancel</button>
                    </td>
                </tr>
                );
            });
                
            this.setState({bookingList: bookingList});
            console.log(bookings);
          });
    },function(err) {
        console.log(err);
    }); 
  }
  

  render() {
    return (
      <MDBCard className="text-center">
        <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            Booking orders
        </h2>
        <MDBTable>
      <MDBTableHead>
        <tr>
          <th style={{fontWeight:"bold"}}>Product name</th>
          <th style={{fontWeight:"bold"}}>Price</th>
          <th style={{fontWeight:"bold"}}>Ordered by</th>
          <th style={{fontWeight:"bold"}}>Contact</th>
          <th style={{fontWeight:"bold"}}>Address</th>
          <th style={{fontWeight:"bold"}}>Status</th>
          <th style={{fontWeight:"bold"}}>Action</th>
        </tr>
        </MDBTableHead>
            <MDBTableBody>
                {this.state.bookingList}
            </MDBTableBody>
        </MDBTable>      
      </MDBCardBody>
      </MDBCard>
    );
  }
}

export default Orders;