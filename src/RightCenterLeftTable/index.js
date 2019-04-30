import { Container, Row, Col } from 'reactstrap';
import React,{ Component } from 'react';
import './style.css';
import StarRatings from 'react-star-ratings';

class RightCenterLeftTable extends Component
{
	constructor(props){
	super(props);
		this.state = {
			username:'',
			articles:[
						{heading:'SVG Circle Decomposition To Paths',rate:5,img:'i',author:'Author',date:'MM/DD/YYYY',time:'18 Min read'},
						{heading:'How to Make a Speech Synthesis..',rate:4,img:'i',author:'Author',date:'MM/DD/YYYY',time:'18 Min read'},
						{heading:'How to Build An Endless Runner..',rate:3,img:'i',author:'Author',date:'MM/DD/YYYY',time:'18 Min read'},
						{heading:'I Used The Web For A Day on IE8',rate:2,img:'i',author:'Author',date:'MM/DD/YYYY',time:'18 Min read'},
						{heading:'A Detailed Comparison Between..',rate:1,img:'i',author:'Author',date:'MM/DD/YYYY',time:'18 Min read'},
						]
		}
	}
	
	render(){
		return (
			<div>
				<Row>
					<Col lg={12} className="rcl-top">
						<span className="rcl-top1">Recent Articles</span>
						<span className="rcl-top2">Show All</span>
					</Col>
				</Row>
				<Row>
					<Col lg={12}>
						{this.state.articles.map((menu,index) => {
							return (
								<div>
									<Row>
										<Col lg={8} className="rcl-bottom1">{menu.heading}</Col>
										<Col lg={4} className="rcl-bottom2">
											<StarRatings
												rating={menu.rate}
												starRatedColor="green"
												numberOfStars={5}
												name='rating'
												starDimension="15px"
												starSpacing="5px"
											/>
										</Col>
									</Row>
									<Row>
										<Col lg={4} className="rcl-bottom4"><img className="image-right-table img" src="https://i.redd.it/xbddt4lvqlg21.jpg" height="15px" width="15px" alt="icon" />{'     '+menu.author}</Col>
										<Col lg={4} className="rcl-bottom5">{menu.date}</Col>
										<Col lg={4} className="rcl-bottom6">{menu.time}</Col>
									</Row>
								</div>
							);
						})}
					</Col>
				</Row>
            </div>
		);
	}
}

export default RightCenterLeftTable;
