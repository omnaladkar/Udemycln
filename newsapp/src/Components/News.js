import React, { Component } from 'react'




export class News extends Component {
    render() 
    
    {
        return (
            <div>

                
      <div className="jumbotron" style={{height: "500px",paddingTop: "150px"}}>
         <div className="big-banner mb-0 jumbotron-fluid" style={{backgroundImage: 'url(../public/udemygirl.jpg)'}}></div>        
          <div className="container">
               <div className="row align-items-center">
                 <div className="col">
                   
                   <div className="col-md-4 text-light">
                       <h1 className="display-5">Hot Sale—$9.99 courses!</h1>
                       <p className="lead">Get our best deal on courses</p>
                 </div>

                 <div className="col-md-6">
                       <form className="form-inline my-2 my-lg-0" >
                               <input className="form-control form-control-lg mr-sm-0 col-8
                                border-right-0 "
                               style={{borderRadius: "5px 0px 0px 5px"}} 
                                type="search" placeholder="What Do You Want To Learn?" 
                                aria-label="Search"/>
                               
                               <button className="btn btn-light btn-lg my-2 my-sm-0 col-2 border-left-0" 
                               style={{borderRadius: "0px 5px 5px 0px"}}
                               type="submit"><i classNameName="fas text-danger fa-search"></i></button>
                           </form>
                   </div>


                 </div>
                
               </div>
             </div>

      </div>
                
            </div>
        )
    }
}

export default News
