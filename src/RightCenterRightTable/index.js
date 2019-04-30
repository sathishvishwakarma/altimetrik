import { Container, Row, Col } from 'reactstrap';
import React,{ Component } from 'react';
import './style.css';
import StarRatings from "react-star-ratings";
import Button from "reactstrap/es/Button";

class RightCenterRightTable extends Component
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
					<Col lg={12} className="rcr-top">
						<span className="rcr-top1">Quick Press</span>
					</Col>
				</Row>
				<Row>
					<Col lg={12}>
						<Row>
							<Col lg={1}></Col>
							<Col lg={10}><input type="text" className="form-control" placeholder="Enter Title Here" /></Col>
							<Col lg={1}></Col>
						</Row>
						<Row>
							<Col lg={7}></Col>
							<Col lg={4}><Button className="button-classname1" color="" >Add Media</Button></Col>
							<Col lg={1}></Col>
						</Row>
						<Row>
							<Col lg={1}></Col>
							<Col lg={10}><textarea type="text" className="form-control" placeholder="" ></textarea></Col>
							<Col lg={1}></Col>
						</Row>
						<Row>
							<Col lg={1}></Col>
							<Col lg={10}><input type="text" className="form-control" placeholder="Tags (Seperate with commas)" /></Col>
							<Col lg={1}></Col>
						</Row>
						<br/>
						<Row>
							<Col lg={8}></Col>
							<Col lg={1} className="rcr-top2"><b>B</b></Col>
							<Col lg={1} className="rcr-top3"><i>I</i></Col>
							<Col lg={1} className="rcr-top4"><u>U</u></Col>
							<Col lg={1}></Col>
						</Row>
						<Row>
							<Col lg={1}></Col>
							<Col lg={10}><textarea type="text" className="form-control" placeholder="PlaceHolder" ></textarea></Col>
							<Col lg={1}></Col>
						</Row>
						<Row className="last-row">
							<Col lg={1}></Col>
							<Col lg={6}><Button className="button-classname2" color="" >Save Draft</Button> <a href="" className="button-reside">Reset</a></Col>
							<Col lg={1}></Col>
							<Col lg={2}><Button className="button-classname3" color="danger" >Publish</Button></Col>
							<Col lg={1}></Col>
						</Row>
					</Col>
				</Row>
			</div>
		);
	}
}

export default RightCenterRightTable;
