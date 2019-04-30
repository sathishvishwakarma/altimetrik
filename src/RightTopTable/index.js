import { Container, Row, Col } from 'reactstrap';
import React,{ Component } from 'react';
import './style.css';
import { Button } from 'reactstrap';

class RightTopTable extends Component
{
	constructor(props){
	super(props);
		this.state = {
			username:'',
			firstPageContentKey:[{name:'Posts'},{name:'Pages'},{name:'Categories'},{name:'Tags'}],
			firstPageContentValue:[{value:20},{value:10},{value:5},{value:30}],
			firstPageContentVariables:[{name:'Comments'},{name:'Comments'},{name:'Pending'},{name:'Spam'}],
		}
	}
	
	render(){
		return (
			<div>
				<Row>
					<Col lg={12}>
						<Row>
							<Col lg={12} className="right-content-one">
								<Row>
									<Col lg={3}></Col>
									<Col lg={6}>
										<img className="image-right-table img" src="https://i.redd.it/xbddt4lvqlg21.jpg" height="50px" width="50px" alt="icon" /><br/> Welcome (User Name)
									</Col>
									<Col lg={3}>
										<Button className="button-classname" color="danger" >Create New Post</Button>
									</Col>
								</Row>
							</Col>
						</Row>
						<Row>
							<Col lg={12}>
								<Row className="right-content-two">
									{this.state.firstPageContentKey.map((menu,index) => {
										return <Col md={3}>{menu.name}</Col>;
									})}
								</Row >
								<Row className="right-content-three">
									{this.state.firstPageContentValue.map((menu,index) => {
										return <Col md={3}>{menu.value}</Col>;
									})}
								</Row>
								<Row className="right-content-four">
									{this.state.firstPageContentVariables.map((menu,index) => {
										let spanclass = 'span'+index;
										return <Col md={3}><span className={spanclass}># </span>{menu.name}</Col>;
									})}
								</Row>
							</Col>
						</Row>
						<Row>
							<Col lg={12}></Col>
						</Row>
					</Col>
				</Row>
            </div>
		);
	}
}

export default RightTopTable;
