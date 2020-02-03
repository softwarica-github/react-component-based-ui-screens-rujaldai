import React from "react";
//import icon from "/material-ui/user"
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

const Book = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6" style={{margin:"0 auto"}}>
          <MDBCard>
            <MDBCardBody>
              <form>
                <p className="h4 text-center py-4">Book Now</p>
                <div className="grey-text">
                  <MDBInput
                    label="Check In"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Check Out"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                   <MDBInput
                    label="Total Adults"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                   <MDBInput
                    label="Total children"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Number of rooms"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                 
            
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn color="cyan" type="submit">
                   Book 
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Book;