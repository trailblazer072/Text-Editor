import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
    <div className="container-fluid">
      <a className={`navbar-brand text-${(props.mode === "light" ? "dark" : "light")}`} href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className={`nav-link active text-${(props.mode === "light" ? "dark" : "light")}` }aria-current="page" href="/">My Home</a>
          </li>
          <li className="nav-item">
            <a className={`nav-link text-${(props.mode === "light" ? "dark" : "light")}`} href="/">{props.aboutText} </a>
          </li>
        
        
          
        </ul>
      
        <div className={`form-check form-switch mx-3 text-${(props.mode === "light" ? "dark" : "light")}`}>
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
        </div>
      
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search (not working)" aria-label="Search"/>
          <button className={`btn btn-outline-warning text-${(props.mode === "light" ? "dark" : "yellow")}`} type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {title :PropTypes.string.isRequired,
                    aboutText : PropTypes.string
};

Navbar.defaultProps = {
                    title: "<title>",
                    aboutText: "About"
} 