import React, { Component } from 'react'
import bi from './bi.png'
import bi2 from './bi2.png'
import bild from './bild.jpg'
import comp from './compressorMain.png'
import bike from './mainBike.png'
import faces from './faces.png'
import web from './web.png'
import sof from './sof.png'
import ko from './ko.png'
import moa from './moa2.png'
import Pdf from './virtual-human.pdf';
import {Form, FormGroup, Label, Input, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalFooter from 'react-bootstrap/ModalFooter'
import useState from 'react-hook-use-state';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Advanced Web Programming - TDDD27
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>RecommendMe</h4>
        <p>
        A web-application to share recommendations to friends in customizable groups.
        A log in system via Google authorization. Users can use a chat function to communicate with the other members of the group.
        Every user can create and be apart of several groups and invite their friends to join.
        Recommendations will be categorized in to movies, tv-series, books, music, recipies etc.
        Recommendations are created by filling in forms connected to the respective choice of category.
        The application is made in React with Redux and Node.js. Google Cloud Platform is used for cloud and database services and Socket.IO for
        real time communication.
        </p>
        <img src={web} alt="Web" style={{width: '100%'}}/>
        <br/>
        <br/>
        <a className="pt-2 font-weight-bold" href="https://www.youtube.com/watch?v=CIW3ZPQ2qDo&feature=youtu.be">Link to project screencast</a>
        <br/>
        <a className="pt-2 font-weight-bold" href={"https://github.com/evelynbankell/tddd27_recommendme"}>Git repository</a>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function VirtualModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Virtual Human
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>At University Paris Saclay</h4>
        <p>
        The goal of this course was to write a scientific article about how to design intuitive virtual humans and socially aware interactions.
        The article was inspired from theories from Psychology to define proper underlying computational models and conduct experimental studies.
        The goal was to increase our knowledge about human perception and cognition.
        </p>
        <img src={faces} alt="Faces" style={{width: '100%'}}/>
        <a className="pt-2 font-weight-bold" href={Pdf} target = "_blank">Download Pdf</a>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
function SofModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Sofia's Sömnad
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Web development</h4>
        <p>
        Responsible for the web development at Sofia's Sömnad, company for change sewing and repairing.
        Written in React.js
        </p>
        <img src={sof} alt="Sof" style={{width: '100%'}}/>
        <br/>
        <br/>
        <a className="pt-2 font-weight-bold" href={"/"}>Visit website here</a>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function MoaModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modeling and Animation - TNM079
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4></h4>
        <p>
        This course was grouped into 4 thematic blocks, which included
        Data structures, meshes and algorithms that can be applied to meshes.
        Different interpolating functions, implicit representations for CG models including level sets
        and finally fluid and smoke animation.

        The course constited six labs with reports, which where written in C++, and a written exam.
        </p>
        <img className="" src={ko} alt="Ko" style={{width: '40%'}}/>
        <img className="ml-5" src={moa} alt="Moa" style={{width: '40%'}}/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function KandidatModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Bachelor project - TNM094
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Compressor and bike data visualization</h4>
        <p>
        In this project an inetractive visualization dashboard was implemneted using dc.js as frontend and Node.js as backend.
        The dashboard consists of two different dashboards.
        The first one visualizes compressor real time data that simulates the malfunction and warning of each compressor in the data set.
        The second one consists of real time data from bikes in San Fransisco.
        </p>
        <img src={comp} alt="Comp" style={{width: '40%'}}/>
        <img className="ml-5" src={bike} alt="Bike" style={{width: '50%'}}/>
        <br/>
        <br/>
        <a className="pt-2 font-weight-bold" href={"https://github.com/emied/TNM094/tree/master/express-dashboard-server"}>Git repository</a>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
function BiModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          3D Computer Graphics - TNM061
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Short Animated Film</h4>
        <p>
        In this project, an animated short film was made.
        Both Maya and 3DS Max were used to rigg, animate and model the bee and the scene
        </p>
        <img src={bi} alt="Bi" style={{width: '100%'}}/>
        <img className="" src={bi2} alt="Bi2" style={{width: '40%'}}/>
        <img className="ml-5" src={bild} alt="Bild" style={{width: '40%'}}/>
        <br/>
        <br/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


function Webmodal() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div className="box col-12 col-sm-10 col-md-5 col-lg-4 col-xl-2 p-1 m-5">
        <span className="box-text" onClick={() => setModalShow(true)}>
          <img src={web} alt="Web" style={{width: '100%'}}/>
          <p className="font-weight-bold pt-5">ADVANCED WEB PROGRAMING</p>
        </span>
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

function Virtualhuman() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className="box col-12 col-sm-10 col-md-5 col-lg-4 col-xl-2 p-1 m-5">
        <span className="box-text" onClick={() => setModalShow(true)}>
        <img src={faces} alt="Faces" style={{width: '100%'}}/>
        <p className="font-weight-bold pt-5">VIRTUAL HUMAN</p>
        </span>
      </div>

      <VirtualModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

function SofSomnad() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className="box col-12 col-sm-10 col-md-5 col-lg-4 col-xl-2 p-1 m-5">
        <span className="box-text" onClick={() => setModalShow(true)}>
        <img src={sof} alt="Sof" style={{width: '100%'}}/>
        <p className="font-weight-bold pt-3">SOFIAS SÖMNAD</p>
        </span>
      </div>

      <SofModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

function Moa() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className="box col-12 col-sm-10 col-md-5 col-lg-4 col-xl-2 p-2 m-5">
        <span className="box-text" onClick={() => setModalShow(true)}>
        <img src={ko} alt="Ko" style={{width: '80%'}}/>
        <p className="font-weight-bold pt-3">MODELING AND ANIMATION</p>
        </span>
      </div>

      <MoaModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

function Kandidat() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className="box col-12 col-sm-10 col-md-5 col-lg-4 col-xl-2 p-2 m-5">
        <span className="box-text" onClick={() => setModalShow(true)}>
        <img src={comp} alt="Comp" style={{width: '80%'}}/>
        <p className="font-weight-bold pt-3">BACHELOR PROJECT</p>
        </span>
      </div>

      <KandidatModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

function Bi() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className="box col-12 col-sm-10 col-md-5 col-lg-4 col-xl-2 p-2 m-5">
        <span className="box-text" onClick={() => setModalShow(true)}>
        <img src={bi} alt="Bi" style={{width: '100%'}}/>
        <p className="font-weight-bold pt-3">3D COMPUTER GRAPHICS</p>
        </span>
      </div>

      <BiModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}


class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <React.Fragment>
        <div className="container-fluid m-0 p-0">
          <p className="h1 pt-4 mt-2 font-weight-light red-text">MY PROJECTS</p>
          <div className="row justify-content-center">
            <Webmodal/>
            <Virtualhuman/>
            <SofSomnad/>
            <Moa/>
            <Kandidat/>
            <Bi/>
            <div className="col-12 col-sm-10 col-md-5 col-lg-4 col-xl-2 p-2 m-5">
            </div>
            <div className="col-12 col-sm-10 col-md-5 col-lg-4 col-xl-2 p-2 m-5">
            </div>
          </div>

        </div>

      </React.Fragment>
    )
  }
}

export default Home
