import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import Login from "../Login/Login";

const Home = () => {
    return (
        <MDBRow>
            <MDBCol lg="6" md="12">
                <Login />
            </MDBCol>
            <MDBCol lg="6" md="12">
                <MDBCard>
                    <MDBCardBody className="text-center">
                        <h2 className="h1-responsive font-weight-bold text-center my-5">
                            Top Products </h2>
                        <p className="text-center w-responsive mx-auto mb-5">
                            Best Selling Products today
                </p>

                        <MDBRow>
                            <MDBCol lg="12" md="12" className="mb-lg-0 mb-4">
                                <MDBView hover className="rounded z-depth-2 mb-4" waves>
                                    <img
                                        className="img-fluid"
                                        src="https://i.pinimg.com/originals/29/6c/50/296c500b0b4750a57a41329984f4759c.jpg"
                                        alt=""
                                    />
                                    <MDBMask overlay="white-slight" />
                                </MDBView>
                                <a href="#!" className="pink-text">
                                    <h6 className="font-weight-bold mb-3">
                                        <MDBIcon icon="map" className="pr-2" />
                                        Breakfast</h6></a>
                                <h4 className="font-weight-bold mb-3">
                                    <strong>Items</strong></h4><p>
                                    by <a href="#!" className="font-weight-bold">Billy Forester</a>,
                                15/07/2018</p>
                                <p className="dark-grey-text">
                                    Nam libero tempore, cum soluta nobis est eligendi optio cumque
                                    nihil impedit quo minus id quod maxime placeat facere possimus
                                voluptas.</p>
                                <MDBBtn color="pink" rounded size="md">
                                    Order Now</MDBBtn>
                            </MDBCol>
                            <MDBCol lg="12" md="12" className="mb-lg-0 mb-4">
                                <MDBView hover className="rounded z-depth-2 mb-4" waves>
                                    <img
                                        className="img-fluid"
                                        src="https://b.zmtcdn.com/data/pictures/5/19009145/7411403559b6097a0a190e46c95d9662_featured_v2.jpg"
                                        alt=""
                                    />
                                    <MDBMask overlay="white-slight" />
                                </MDBView>
                                <a href="#!" className="deep-orange-text">
                                    <h6 className="font-weight-bold mb-3">
                                        <MDBIcon icon="graduation-cap" className="pr-2" />
                                        Lunch
              </h6>
                                </a>
                                <h4 className="font-weight-bold mb-3">
                                    <strong>Items</strong>
                                </h4>
                                <p>
                                    by <a href="#!" className="font-weight-bold">Billy Forester</a>,
                                    13/07/2018
            </p>
                                <p className="dark-grey-text">
                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                    blanditiis voluptatum deleniti atque corrupti quos dolores.
            </p>
                                <MDBBtn color="deep-orange" rounded size="md">
                                    Order Now
            </MDBBtn>
                            </MDBCol>
                            <MDBCol lg="12" md="12" className="mb-lg-0 mb-4">
                                <MDBView hover className="rounded z-depth-2 mb-4" waves>
                                    <img
                                        className="img-fluid"
                                        src="https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2017/12/23/Photos/Processed/Lunchlocal3-kfaE--621x414@LiveMint.jpg"
                                        alt=""
                                    />
                                    <MDBMask overlay="white-slight" />
                                </MDBView>
                                <a href="#!" className="blue-text">
                                    <h6 className="font-weight-bold mb-3">
                                        <MDBIcon icon="fire" className="pr-2" />
                                        Dinner
              </h6>
                                </a>
                                <h4 className="font-weight-bold mb-3">
                                    <strong>Items</strong>
                                </h4>
                                <p>
                                    by <a href="#!" className="font-weight-bold">Billy Forester</a>,
                                    11/07/2018
            </p>
                                <p className="dark-grey-text">
                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                                    aut fugit, sed quia consequuntur magni dolores eos qui ratione.
            </p>
                                <MDBBtn color="info" rounded size="md">
                                    Order Now
            </MDBBtn>
                            </MDBCol>

                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    );
}

export default Home;