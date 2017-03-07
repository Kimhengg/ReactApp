import React, { Component } from 'react';
export class Money6 extends Component {

state = {
		x: '',
		result: 0
	}

	onButtonCC(){
		this.setState({ result: this.state.x *5.08 })
	}	

	handleChangeText = (event) => {
 this.setState({x: event.target.value});
 }

 render() {
 return (	
<div className="card clearfix">
 	<div className="CNY TO THB">
 		<h1 className="title">CNY TO THB</h1>
 			<div className="form-box">
 			<label className="label">CNY</label>
 				<input
					placeholder='In put here'
					type='numeric'
					onChange={this.handleChangeText}
					value={this.state.x}/>
			<label className="label">¥</label>		
 			</div>

 			<button className="convert btn"
 			onClick={this.onButtonCC.bind(this)}>convert</button>

 			<div className="form-box">
 			<label className="label">THB</label>
 				<input className="Output"
 				value={this.state.result}
 				placeholder="THB"/>
 			<label className="label">฿</label>	
 			</div>
 	</div>
</div> 
 
 );
 }
}