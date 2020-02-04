import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
class MerchantList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dummyMerchants: [{
                imgSrc: "https://i.pinimg.com/originals/29/6c/50/296c500b0b4750a57a41329984f4759c.jpg",
                name: "Pet shop 1",
                otherName: "We are here for you!",
                description: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus voluptas."
            }, {
                imgSrc: "https://b.zmtcdn.com/data/pictures/5/19009145/7411403559b6097a0a190e46c95d9662_featured_v2.jpg",
                name: "Pet shop 2",
                otherName: "We are here too!",
                description: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus voluptas."
            }, {
                imgSrc: "https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2017/12/23/Photos/Processed/Lunchlocal3-kfaE--621x414@LiveMint.jpg",
                name: "Pet shop 3",
                otherName: "But, we're the best!",
                description: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus voluptas."
            }]
        }
    }


    render() {
        return (
            <MDBRow>
                <MDBCol lg="12" md="12">
                    <MDBCard>
                        <MDBCardBody className="text-center">
                            <h4 className="text-center">
                                {this.props.heading} </h4>
                                <MDBBtn color="pink" rounded size="md">
                                            See more...</MDBBtn>
                            <p className="text-center ">
                                {this.props.subHeading}
                </p>

                            <MDBRow>
                                {this.state.dummyMerchants.map(function (item) {
                                    return (<MDBCol lg="4" md="6" sm="12" className="mb-lg-0 mb-4">
                                        <MDBView hover className="rounded z-depth-2 mb-4" waves>
                                            <img
                                                className="img-fluid"
                                                src={item.imgSrc}
                                                alt=""
                                            />
                                            <MDBMask overlay="white-slight" />
                                        </MDBView>
                                        <a href="#!" className="pink-text">
                                            <h6 className="font-weight-bold mb-3">
                                                <MDBIcon icon="map" className="pr-2" />
                                                {item.name}</h6></a>
                                        <h4 className="font-weight-bold mb-3">
                                            <strong>{item.otherName}</strong></h4><p>
                                        </p>
                                        <p className="dark-grey-text">
                                            {item.description}
                                        </p>
                                        <MDBBtn color="pink" rounded size="md">
                                            Order Now</MDBBtn>
                                    </MDBCol>)
                                })}

                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        );
    }
}

export default MerchantList;