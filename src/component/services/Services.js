import React from "react";
import { MDBModal, MDBModalBody, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import ProductForm from "../ProductForm/ProductForm";

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <MDBCard className="text-center">
        <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            Available Services
        </h2>
          <MDBBtn onClick={this.toggle}>Add Services</MDBBtn>
          <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
            <MDBModalBody>
              <ProductForm name="Pets" type="pets" />
            </MDBModalBody>
          </MDBModal>
          <p className="text-center w-responsive mx-auto mb-5">
            ALL  TOGETHER THREE TYPES OF ROOMS ARE AVAILABLE HERE!!!
        </p>
          <MDBRow>
            <MDBCol lg="5" xl="4">
              <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                <img
                  className="img-fluid"
                  src="http://www.lottewedding.com/content/dam/lotte-hotel/lotte/hanoi/accommodation/standard/deluxeroom/180921-1-2000-roo-LTHA.jpg.thumb.768.768.jpg"
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
                There is a king size bed available.
                  Cost: Nrs 10000
                  Available: Day/Night
            </p>
              <p>
                by <a href="#!" className="font-weight-bold">Jessica Clark</a>, 19/04/2018
            </p>
              <MDBBtn color="primary" size="md">
                Book Now
            </MDBBtn>
            </MDBCol>
          </MDBRow>
          <hr className="my-5" />
          <MDBRow>
            <MDBCol lg="5" xl="4">
              <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                <img
                  className="img-fluid"
                  src="http://hotelflorid.com.np/images/pageimages/1472200420delux3.jpg"
                  // src="https://www.google.com/search?q=platinum+room&sxsrf=ACYBGNR8Y_RpHc19HSYRnmOnqmlvfhaU-w:1579786667280&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjJ5f7465nnAhVBzTgGHYboBCsQ_AUoAXoECBEQAw&biw=1317&bih=588#imgrc=iva1Y6rhniAKVM:"
                  alt=""
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
            </MDBCol>
            <MDBCol lg="7" xl="8">
              <h3 className="font-weight-bold mb-3 p-0">
                <strong>Deluxe</strong>
              </h3>
              <p className="dark-grey-text">
                There are one single and one double size beds available.
                  Cost: Nrs 8000
                  Available: Day/Night
            </p>
              <p>
                by <a href="#!" className="font-weight-bold">Jessica Clark</a>, 16/04/2018
            </p>
              <MDBBtn color="primary" size="md">
                Book Now
            </MDBBtn>
            </MDBCol>
          </MDBRow>
          <hr className="my-5" />
          <MDBRow>
            <MDBCol lg="5" xl="4">
              <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                <img
                  className="img-fluid"
                  src="https://media-cdn.tripadvisor.com/media/photo-s/0d/dd/4b/cb/deluxe-room.jpg"
                  alt=""
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
            </MDBCol>
            <MDBCol lg="7" xl="8">
              <h3 className="font-weight-bold mb-3 p-0">
                <strong>Premium</strong>
              </h3>
              <p className="dark-grey-text">
                There are two single beds available.
                Cost: Nrs 5000
                Available: Day/Night
            </p>
              <p>
                by <a href="#!" className="font-weight-bold">Jessica Clark</a>, 12/04/2018
            </p>
              <MDBBtn color="primary" size="md">
                Book Now
            </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    );
  }
}

export default Services;