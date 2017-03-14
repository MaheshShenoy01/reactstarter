import React ,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';

// components are alwyas capitalized
//data in a compoonent handeld by a props or a state
class App1 extends Component{
//  we can create function calls and definition
constructor(){
	super();
	this.name="shenoy";
	// state only gets used when component has 
	// internal value if a component doesnt have
	// internal data then use props
	this.state={name:"mahesh shenoy"};

}
	render(){
		// by defualt react state is null
		//this.state== null
		//jsx portion 
		setTimeout(()=>{
this.setState({name:"manoj shenoy"});
		},1000)
		return(
			<div id="root">Hey this is App1
			<Header title={name}></Header>
			<Header title={"prop title check"}></Header>
			<p>{this.name}</p>
			<div>{this.state.name}</div>
			<Footer></Footer>
			
			<p>{this.name}</p>
			</div>
		)
	}
}

export default App1;