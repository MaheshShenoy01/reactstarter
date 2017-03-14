import React from 'react';
import Title from './Title';

class Header extends React.Component{
	render(){
		return(
			<Title title={this.props.title}></Title>
		);
	}
}

export default Header;


