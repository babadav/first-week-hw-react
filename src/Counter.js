import React , { Component } from "react";
import './App.css';

class Counter extends Component{
	constructor (props){
		super(props);

		this.state = {
			counter: 0
		};

		this.increment = this.increment.bind(this)
		this.decrement = this.decrement.bind(this)
		this.reset = this.reset.bind(this)
	}


	increment(){
		console.log("increment!");



		this.setState({
			counter: this.state.counter + 1
		} );
	}

	decrement(){
		console.log("decrement");

		let newCounter = this.state.counter -1;
		if (newCounter <= 0) {
			newCounter =  0;
		}

		this.setState({
			counter: newCounter 
		} );
	}

	reset(){
		console.log('reset');

		this.setState({
			counter: 0
		})
	}

render(){

	let {title} = this.props;
	if (!title) {
		title = 'A Counter'
	}
	const {counter} = this.state;

	return(
		<div>
		<h2>
			{title}: {counter}
		</h2>

		<nav>
			<button onClick={this.increment}>+</button>
			<button onClick={this.decrement}>-</button>
			<button onClick={this.reset}>reset</button>
		</nav>


				
		</div>

		)
	
	}

}

export default Counter;