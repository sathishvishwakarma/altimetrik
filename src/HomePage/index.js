import { Container, Row, Col } from 'reactstrap';
import React,{ Component } from 'react';
import './style.css';
import SideBar from '../SideBar';
import RightTopTable from '../RightTopTable';
import RightCenterLeftTable from '../RightCenterLeftTable';
import RightCenterRightTable from '../RightCenterRightTable';
import RightBottomTable from '../RightBottomTable';

class HomePage extends Component
{
	constructor(props){
	super(props);
		this.state = {
			username:'',
			sidebar:[{name:'Dashboard'},{name:'Posts'},{name:'Media'},{name:'Pages'},{name:'Appearance'},{name:'Plugins'},{name:'Users'},{name:'Tools'},{name:'Settings'}]
		}
	}
	
	componentWillMoount() {
		
	}
	
	componentDidMount() {
		
	}
	
	render(){
		return (
			<div>
				<Row>
                    <Col lg={12}>
                        <Row>
                            <Col lg={2} className="center-left-content">
                                <Row>
									<Col md={12} className="center-left-content-div">
										<SideBar />
									</Col>
								</Row>
                            </Col>
							<Col lg={10} className="center-right">
								<Row>
									<Col lg={12} className="center-right-top">
										<RightTopTable />
									</Col>
								</Row>
								<Row>
									<Col lg={12}>
										<Row>
											<Col lg={5} className="center-right-center-left">
												<RightCenterLeftTable />
											</Col>
											<Col lg={1}></Col>
											<Col lg={5} className="center-right-center-right">
												<RightCenterRightTable />
											</Col>
										</Row>
									</Col>
								</Row>
								<Row>
									<Col lg={12} className="center-right-bottom">
										<RightBottomTable />
									</Col>
								</Row>
							</Col>
                            
                        </Row>
                    </Col>
                </Row>
            </div>
		);
	}
}

export default HomePage;
