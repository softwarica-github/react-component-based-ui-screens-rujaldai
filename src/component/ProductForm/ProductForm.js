import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

class ProductForm extends React.Component {

    constructor(props) {
        super(props);

        this.productType = props.type;
        this.state = {

        }
    }

    render() {

        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="12" lg="12" style={{ margin: "0 auto" }}>
                        <MDBCard>
                            <MDBCardBody>
                                <form>
                                    <p className="h5 text-center mb-4">{this.props.name}</p>
                                    <div className="grey-text">
                                        <MDBInput
                                            label="Product name"
                                            icon="envelope"
                                            group
                                            type="text"
                                            validate
                                            error="wrong"
                                            success="right"
                                        />
                                        <MDBInput
                                            label="Price per item"
                                            icon="lock" icon="shield-alt"
                                            group
                                            type="text"
                                            validate
                                        />
                                        <MDBCol lg="12">
                                            <label>
                                                Details
                                            </label>

                                            <textarea className="form-control" style={{ marginLeft: '20px' }} rows="5" />
                                        </MDBCol>
                                    </div>
                                    <div className="text-center">
                                        <MDBBtn type="submit" >Submit</MDBBtn>
                                    </div>
                                </form>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    };
}

export default ProductForm;