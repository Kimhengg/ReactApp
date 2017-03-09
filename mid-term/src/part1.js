import React, { Component} from 'react';
import './bulma.css';
export class Part1 extends Component {
state = {
		x: '',
        y: '',
        z: '',
	}

	onButtonCL(){
		this.setState({x: ''})
        this.setState({y: ''})
        this.setState({z: ''})
        this.setState({zz: ''})
	}

	handleChangeText1 = (event) => {
	 this.setState({x: event.target.value});
    }
    handleChangeText2 = (event) => {
	 this.setState({y: event.target.value});
    }
    handleChangeText3 = (event) => {
	 this.setState({z: event.target.value});
	 }
    handleChangeText4 = (event) => {
	 this.setState({zz: event.target.value});
	 }

	 
 render() {
 	var indents = [];
 	let renderer = null;
 	return (	
		<div className="control has-addons has-addons-centered">
		<div className="hero-body">
			<div className="THB TO USD">

				{/* HEADER */}
				<div className="hero-body">		
                    <h1 className="title">CONTACT US</h1>			
				</div>
				
				{/* TEXTBOX */}
				<center>					
						<div className="form-box">
		 					<label className="label">Name &nbsp;&nbsp; <input className="input" onChange={this.handleChangeText1} value={this.state.x} placeholder="IN PUT HERE"/></label>	
		 				</div>
                         <br/>
                         <div className="form-box1">
		 					<label className="label">Email &nbsp;&nbsp; <input className="input" onChange={this.handleChangeText2} value={this.state.y} placeholder="IN PUT HERE"/></label>	
		 				</div>
                         <br/>
                         <div className="form-box2">
		 					<label className="label">Tel &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input className="input" onChange={this.handleChangeText3} value={this.state.z} placeholder="IN PUT HERE"/></label>	
		 				</div>
                         <br/>
                         <div className="form-box3">
		 					<label className="label">PS. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input className="input" onChange={this.handleChangeText4} value={this.state.zz} placeholder="IN PUT HERE"/></label>	
		 				</div>
					<br/>
					<button className="button is-info is-inverted" onClick={this.onButtonCL.bind(this)}>Done</button>			
				</center>
			</div>
		</div>  
		</div>
 		);
 	}
}