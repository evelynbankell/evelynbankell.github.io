import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import email from './email2.png'
import link from './linkedin-logo.png'
import github from './github.png'

class Sidebar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="sidebar">
          <div className="row m-2 mt-1 ">
            <p className="pt-5 p-2 m-4 header-own" href="/">Evelyn Bankell</p>
          </div>
          <div className="row m-3 mt-5 pt-5 pl-3">
            <NavLink className="link-text" exact activeClassName="active" to="/">PROJECTS</NavLink>
          </div>
          <div className="row m-3 mt-2 pl-3">
            <NavLink className="link-text" exact activeClassName="active" to="/about">ABOUT</NavLink>
          </div>

          <br>
          </br>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>

          <div className="row m-2 mt-3 pl-4">
            <img src={email} alt="Email" style={{width: '25px', height: '25px'}}/> &nbsp; &nbsp; <p className="font-italic pt-1">evelyn@bankell.se</p>
          </div>
          <div className="row m-2 mt-1 pl-4">
            <img src={link} alt="Linkedin" style={{width: '25px', height: '25px'}}/> &nbsp; &nbsp; <a className="" href="https://www.linkedin.com/in/evelyn-bankell-96a53618a/">Evelyn Bankell</a>
          </div>
          <div className="row m-2 mt-4 pl-3">
            <img src={github} alt="Github" style={{width: '40px', height: '40px'}}/> &nbsp; <a className="pt-2" href="https://github.com/evelynbankell/">evelynbankell</a>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Sidebar
