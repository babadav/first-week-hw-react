import React, { Component } from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';

class Header extends Component {

	render(){
		let {title} = this.props;
		if (!title){
			title = "My Title"
		}
		return(
			
			<header>
				{title}

				<ul className="menu">
					<li>
						<NavLink to= "/" exact> Counter 1 </NavLink>
					</li>
					<li>
						<NavLink to= "/counter1" > Counter 2 </NavLink>
					</li>
				</ul>
				
			</header>


		)
		

	}
}

export default Header;
