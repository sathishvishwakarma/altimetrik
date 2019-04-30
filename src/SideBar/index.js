import { Container, Row, Col } from 'reactstrap';
import React,{ Component } from 'react';
import './style.css';

class SideBar extends Component
{
	constructor(props){
	super(props);
		this.state = {
			username:'',
			sidebar:[{name:'Dashboard'},{name:'Posts'},{name:'Media'},{name:'Pages'},{name:'Appearance'},{name:'Plugins'},{name:'Users'},{name:'Tools'},{name:'Settings'}]
		}
	}
	
	render(){
		return (
			<div>
				{this.state.sidebar.map((menu,index) => {
						return <div className="center-left-content-div-items"><a href="/menu.name" className="sidebar-menus">{menu.name}</a></div>;
				})}
            </div>
		);
	}
}

export default SideBar;
