import React, { Component } from 'react';
export class Money9 extends Component {

state = {
		x: '',
		result:0
	}

	onButtonCC(){
		this.setState({ result: this.state.x /24.81 })
	}	

	handleChangeText = (event) => {
 this.setState({x: event.target.value});
 }

 render() {
 return (	
<div className="card clearfix">
 	<div className="THB TO SGD">
 		<h1 className="title">THB TO SGD</h1>
 			<div className="form-box">
 			<label className="label">THB</label>
 				<input
					placeholder='In put here'
					type='numeric'
					onChange={this.handleChangeText}
					value={this.state.x}/>
			<label className="label">฿</label>		
 			</div>

 			<button className="convert btn"
 			onClick={this.onButtonCC.bind(this)}>convert</button>

 			<div className="form-box">
 			<label className="label">SGD</label>
 				<input className="Output"
 				value={this.state.result}
 				placeholder="SGD"/>
 			<label className="label">S$</label>	
 			</div>
 	</div>
</div> 
 
 );
 }
}