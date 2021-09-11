

import React,{ Component } from 'react'

export default class App extends Component {
    render() {
        return (
            <div>
               <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
        <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="Udemy" width="91px" lenght="34"/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item dropdown mx-3">
          <a className="nav-link dropdown-toggle my-2" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <form className="d-flex mx-4 my-2">
        <input className="form-control col-8" type="search" placeholder="Search for Course" width="5000px" lenght="34" aria-label="Search"/>
        <button className="btn btn-outline-success " type="submit">Search</button>
      </form>
      
      <li className="nav-item mx-5 my-2">
          <a className="nav-link mx-3" href="/">Udemy Bussiness</a>
        </li>
        
       
        <li className="nav-item mx-2 my-2">
          <a className="nav-link mx-3" href="/">Teach at Udemy</a>
        </li>
        <li className="nav-item mx-2 my-1">
          <a className="nav-link mx-2" href="/">
              <img src="data:image/png;base64,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" alt="basket" width="24px" length="24px"/>

          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
          <button type="button" class="btn btn-outline-dark">Login</button>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
          <button type="button" class="btn btn-dark">Sign</button>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTuAxePCyDloC2QmSml57kpP-OP4CRnuuqeQ&usqp=CAU" alt="globe" width="24px" length="24px"/>
          </a>
        </li>
        
     
        

        
      </ul>
      
      
    </div>
  </div>
</nav>
            </div>
        );
    };
}
