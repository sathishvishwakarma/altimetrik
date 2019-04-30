import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import HomePage from './HomePage';

function App() {
  return (
    <div className="App">
      <header className="app-header-div">
		  <Row>
			  <Col lg={12}>
				  <Row>
					  <Col lg={1}></Col>
					  <Col lg={3}><img className="header-div-left" src="https://tse4.mm.bing.net/th?id=OIP.dFYSasttU4meMI1XIbnQiAHaEG&pid=15.1&P=0&w=285&h=159" height="80px" alt="icon"/></Col>
					  <Col lg={3}></Col>
					  <Col lg={4}><span className="header-div-right">User Name  <img className="image-right-table img" src="https://i.redd.it/xbddt4lvqlg21.jpg" height="50px" width="50px" alt="icon" /></span></Col>
					  <Col lg={1}></Col>
				  </Row>
			  </Col>
		  </Row>
      </header>
	   <header className="App-header">
	   <Row>
		<Col lg={1} className="left-content">
			
		</Col>
		<Col lg={10}>
			<HomePage />
		</Col>
		<Col lg={1} className="right-content">
			
		</Col>
	   </Row>
      </header>
    </div>
  );
}

export default App;
