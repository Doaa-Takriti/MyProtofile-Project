import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


const Navbar = () => {
    return (
        <div>
  
  <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container">
    <a className="navbar-brand" href="#">MYProtofile</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link" href="#">about me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">how work</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">portofile</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">contact us</a>
        </li>
     
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar;
