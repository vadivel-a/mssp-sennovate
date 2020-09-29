import React,{Component} from 'react';
import {Link} from "react-router-dom";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardTitle, MDBIcon } from "mdbreact";
class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      projectlist:['Workforce Identity Products','Customer Identtiy products','Directory Services','Unified Customer Profile','Privacy & Consent Management']
    };
  }

  renderProjectList(){
    let ret = Object.keys(this.state.projectlist).map((key, index) => {

      return(
        <MDBCol key={key} lg="4" sm="6" size="12" className="my-3">
            <MDBCard className='card-image z-depth-2'
            style={{
              backgroundImage:
                "url('https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')"
            }}
            >
                  <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
                    <div className="text-center w-100">
                      <h5 className='pink-text'>
                        <MDBIcon icon='chart-pie' /> Sennovate
                      </h5>
                      <MDBCardTitle tag='h5' className='pt-2'>
                        <strong>{this.state.projectlist[key]}</strong>
                      </MDBCardTitle>
                      <Link to={"/products/"+this.state.projectlist[key]}>
                      <MDBBtn outline color="white" size="sm" >View</MDBBtn>
                      </Link>
                    </div>
                  </div>
                </MDBCard>

        </MDBCol>
      );
      
    });
    return ret;
  }
  
  render(){
  return(
    <MDBContainer>
      <MDBRow className="mt-4">
          {this.renderProjectList()}
      </MDBRow>
    </MDBContainer>
  )
  }
}

export default Home;
