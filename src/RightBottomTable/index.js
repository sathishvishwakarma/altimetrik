import { Container, Row, Col } from 'reactstrap';
import React,{ Component } from 'react';
import './style.css';
import Button from "reactstrap/es/Button";

class RightBottomTable extends Component
{
	constructor(props){
	super(props);
		this.state = {
			username:''
		}
	}

	
	render(){
		return (
			<div>
				<Row>
					<Col lg={12} className="rcb">
						<span className="rcb1">BROWSE ALL TOPICS</span>
					</Col>
				</Row>
				<Row>
					<Col lg={12}>
						<p><span  className="rcb-down">Accessibility</span><span  className="rcb-down">Animation</span>
							<span  className="rcb-down">Android</span><span  className="rcb-down">Apps</span>
							<span  className="rcb-down">CSS</span><span  className="rcb-down">Design</span></p>
						<p><span  className="rcb-down">Design Patterns</span><span  className="rcb-down">Design System</span>
							<span  className="rcb-down">E-Commerce</span><span  className="rcb-down">Freebies</span>
							<span  className="rcb-down">Graphics</span></p>
						<p><span  className="rcb-down">HTML</span><span  className="rcb-down">Illustrator</span>
							<span  className="rcb-down">Inspiration</span><span  className="rcb-down">IOS</span>
							<span  className="rcb-down">Java Script</span></p>
					</Col>
				</Row>
			</div>
		);
	}
}

export default RightBottomTable;
