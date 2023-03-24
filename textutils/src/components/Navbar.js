import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) { // so yaha as a parameter props pass ho jayenge or jo props hamne pass kiye hai vo as a variable use ho jayenge

  // const labelS = {
  //   color:'#676783'
  // }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Link</a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link disabled">{props.aboutText}</a>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
        </div>
        <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
  <label className={`form-check-label text-${props.mode === 'light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
</div>
        {/* <div className="btn-group" role="group" id="modeB" onClick={props.toggleMode}>
          <input type="radio" className="btn-check" name="modeBtn" value={"light"} id="btnradio1"/>
          <label className="btn btn-outline-primary" htmlFor="btnradio1">Light</label>

          <input type="radio" className="btn-check" name="modeBtn" value={"dark"} id="btnradio2"/>
          <label className="btn btn-outline-primary" htmlFor="btnradio2">Dark</label>

          <input type="radio" className="btn-check" name="modeBtn" value={"hakur"} id="btnradio3"/>
          <label className="btn btn-outline-primary" htmlFor="btnradio3">Hakur</label>
        </div> */}
      </div>
     
          </nav>
  )
}

// PropTypes
// Navbar.propTypes = {
//     title : PropTypes.string,
//     aboutText : PropTypes.string
// }

//Default Prop values
// Navbar.defaultProps = {
//     title : "Set your Title",
//     aboutText : "Set Your about text"
// }

// we can also use required in it
Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    aboutText : PropTypes.string.isRequired
}