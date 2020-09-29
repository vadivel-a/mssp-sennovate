import React, {Component  } from 'react';
import {Link} from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardTitle, MDBIcon, MDBCardImage, MDBCardBody } from "mdbreact";
import msspData from './MsspData.json';

class Products extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      productsCategory:{},
      productsCategoryTitle:''
    };
  }

   productsCategoryFilter = () => {
    let pathname = window.location.pathname;
    var temp = pathname.split('/');
    temp = temp.slice(-2);
    temp[0] = decodeURI(temp[0]);
    temp[1] = decodeURI(temp[1]);

    let filterData = [];
    msspData['categories'].map((data, key) => {
      data = data[temp[1]];
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
      productsCategoryTitle:temp[1],
    });
  };

    productsCategorychild = (parentCategories,categories) => {
     let ret = Object.keys(categories).map((key, index) => {
         return (
           <MDBCol key={key} lg="4" sm="6" size="12" className="my-1">
               <MDBCard className='card-image'>
                     <div className='text-black text-center d-flex align-items-center py-3 px-3'>
                      <Link to={"/products/"+this.state.productsCategoryTitle+'/'+parentCategories+'/'+key} className="w-100">
                       <div className="text-center">
                          <img src="../images/security.png" width="70" className="img-fluid" />
                         <MDBCardTitle tag='h6' className='pt-2'>
                           <strong>{key}</strong>
                         </MDBCardTitle>
                       </div>
                       </Link>
                     </div>
                   </MDBCard>

           </MDBCol>

         )
     })
     return ret;
   }

   productsCategory = () => {
    let ret = Object.keys(this.state.productsCategory).map((key, index) => {
        return (
          <MDBCol key={key} lg="6" sm="6" size="12" className="my-3">
          <div className="rgba-grey-light p-4 z-depth-1">
          <h5 className="font-weight-bold mb-3">{key}</h5>
            <MDBRow>
              {this.productsCategorychild(key,this.state.productsCategory[key])}
            </MDBRow>
          </div>
          </MDBCol>
        )
    })
    return ret;
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
        {this.productsCategory()}
      </MDBRow>
    </MDBContainer>
  )
  }
}
export default Products
