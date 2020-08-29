import React, { Component } from 'react';
import profile from './profile.JPG'


class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <br>
                </br>
                <img className="pt-4 mt-2" src={profile} alt="Avatar" style={{width: '50%'}}/>
                <p className="h1 pt-4 mt-5 font-weight-light red-text">HEY I'M EVELYN!</p>
                <p className="info-text font-weight-light">My name is Evelyn Bankell and I'm a Master of Science student in Media Technology and Engineering, at Linköping University.
                In this portfolio, you can discover and read more about my projects. Feel free to contact me for more information.</p>
                <br>
                </br>
              </div>
            </div>
          </div>
      </React.Fragment>
    )
  }
}

export default About
