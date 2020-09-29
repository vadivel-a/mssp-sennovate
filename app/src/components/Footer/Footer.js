import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

export default class Footer extends Component {

  render() {
    return (
      <MDBFooter className="primary-color font-small mt-4 shadow-1">
            <div className="footer-copyright text-center py-3">
              <MDBContainer fluid>
                &copy; {new Date().getFullYear()} Copyright: <a href="https://sennovate.com"> Sennovate.com </a>
              </MDBContainer>
            </div>
      </MDBFooter>
    );
  }
}
