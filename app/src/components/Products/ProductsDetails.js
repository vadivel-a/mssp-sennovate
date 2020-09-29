import React, {Component  } from 'react';
import {Link,useParams} from "react-router-dom";
import { MDBRow, MDBCol, MDBContainer, MDBTabPane, MDBTabContent, MDBNav,
  MDBNavItem, MDBNavLink, MDBIcon, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdbreact";
import msspData from './MsspData.json';

class ProductsDetails extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      productDetails:{},
      productsCategoryTitle:'',
      activeItemClassicTabs: 0
    };
  }

  toggleClassicTabs = tab => () => {
      if (this.state.activeItemClassicTabs !== tab) {
        this.setState({
          activeItemClassicTabs: tab
        });
      }
    };

  productsCategoryFilter = () => {
    let pathname = window.location.pathname;
    var temp = pathname.split('/');
    temp = temp.slice(-3);
    temp[0] = decodeURI(temp[0]);
    temp[1] = decodeURI(temp[1]);
    temp[2] = decodeURI(temp[2]);
    let filterData = [];
    msspData['categories'].map((data, key) => {
      data = data[temp[0]];
      if(data !== undefined){
        data.map((data2, key2) => {
            if(filterData[data2['solutionName']] !== undefined){
              filterData[data2['solutionName']][data2['vendorName']] = data2;
            }else{
              filterData[data2['solutionName']] = [];
              filterData[data2['solutionName']][data2['vendorName']] = data2;
            }
        });
      }
    });

     this.setState({
       productsCategory:filterData,
       productsCategoryTitle:temp[0]
     }, () => {
       this.setState({
         productDetails:this.state.productsCategory[temp[1]][temp[2]]['tiers']
       });
       this.productDetails();
    })
  };
  productFeaturesBullets(data){
    let bullets = data['children'];
    let ret = Object.keys(bullets).map((key, index) => {
       return (
         <li key={key}>{bullets[key]['featureText']}</li>
       )
    })
     return ret;
  }
  productFeatures(data){
    let features = data['features'];
    let ret = Object.keys(features).map((key, index) => {
       return (
         <li key={key}>{features[key]['featureText']} <ul>{this.productFeaturesBullets(features[key])}</ul></li>
       )
    })
     return ret;
  }
  productDetails() {
    let productDetails = this.state.productDetails;
    let ret = Object.keys(productDetails).map((key, index) => {
       return (
         <li key={key}>{productDetails[key]['name']} <b>Price:</b> {productDetails[key]['price']}<ul>{this.productFeatures(productDetails[key])}</ul></li>

       )
    })
     return ret;
  }

  productFeaturesTabnav(){
     let productDetails = this.state.productDetails;
    let ret = Object.keys(productDetails).map((key, index) => {
       return (
         <MDBNavItem key={key}>
           <MDBNavLink link to="#" active={ this.state.activeItemClassicTabs === index} onClick={this.toggleClassicTabs(index)} >
             {productDetails[key]['name']}
           </MDBNavLink>
         </MDBNavItem>
       )
    })
     return ret;
  }
  productFeatures(data){
    let features = data['features'];
    let ret = Object.keys(features).map((key, index) => {
       return (
         <li key={key} class="mb-4"><h5 className="font-weight-bold">{features[key]['featureText']}</h5> <ul>{this.productFeaturesBullets(features[key])}</ul></li>
       )
    })
     return ret;
  }
  productFeaturesTabbody(){
    let productDetails = this.state.productDetails;
    let ret = Object.keys(productDetails).map((key, index) => {
      console.log(productDetails[key]);
       return (
         <MDBTabPane tabId={index}>
           <MDBRow>
             <MDBCol lg="6" sm="6" size="12">
               <ol>
               {this.productFeatures(productDetails[key])}
               </ol>
             </MDBCol>
             <MDBCol lg="6" sm="6" size="12" className="text-center shadow-0">
                   <MDBCard style={{ maxWidth: "20rem" }}>
                     <MDBCardBody>
                       <MDBCardTitle>{productDetails[key]['name']}</MDBCardTitle>
                       <MDBCardText><div class="font-weight-bold"><h3>${productDetails[key]['price']}</h3></div><div>Per User</div><div>Per Month</div></MDBCardText>
                       <MDBBtn href="#" color="primary" light size="md">Add To Cart</MDBBtn>
                     </MDBCardBody>
                   </MDBCard>
                   <MDBCard className="mt-3" style={{ maxWidth: "20rem" }}>
                     <MDBCardBody>
                       <MDBCardTitle>{productDetails[key]['name']}</MDBCardTitle>
                       <MDBCardText><div class="font-weight-bold"><h3>${12*productDetails[key]['price']}</h3></div><div>Per User</div><div>Per Month</div></MDBCardText>
                       <MDBBtn href="#" color="primary" light size="md">Add To Cart</MDBBtn>
                     </MDBCardBody>
                   </MDBCard>
             </MDBCol>
           </MDBRow>
         </MDBTabPane>
       );
    })
     return ret;
  }

  productDetails() {
    return (
      <MDBContainer>
      <div className="classic-tabs">
         <MDBNav classicTabs color="primary" className="mt-3">
         {this.productFeaturesTabnav()}
         </MDBNav>

         <MDBTabContent className="card mb-5" activeItem={this.state.activeItemClassicTabs} >
         {this.productFeaturesTabbody()}
        </MDBTabContent>
      </div>
      </MDBContainer>
    )
  }

  componentDidMount(){
    this.productsCategoryFilter();
  }

  render(){

  return (
    <MDBContainer>
      <MDBRow className="mt-4">
        <MDBCol md="12" size="12">
          <h1>Products</h1>
          <p className="w-100">{this.state.productsCategoryTitle}</p>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        {this.productDetails()}
      </MDBRow>
    </MDBContainer>
  )
  }
}
export default ProductsDetails
