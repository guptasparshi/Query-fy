// import logo from './logo.svg';
//import logo from 'C:/Users/Ayush Kumar/flask_react/client/src/logo.svg'
import mainLogo from 'C:/Users/Ayush Kumar/flask_react/client/src/QueryFi.png'
import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg ">
    <div className="container-fluid">
    <a className="navbar-brand" href="/">
      <img src= {mainLogo} alt="" width="70" height="30" className="d-inline-block align-text-top"/>
        {props.title}
    </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">About US</a>
          </li>
          
        </ul>
        {/*  SEARCH BAR & BUTTON 
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
        
        <button className="btn btn-outline-success" type="submit">Login </button>
        
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {title: PropTypes.string}
