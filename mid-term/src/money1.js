import React, { Component, PropTypes } from 'react';
import './bulma.css';
export class Money1 extends Component {
	static propTypes = {
		buttonText: PropTypes.string.isRequired,
	}
state = {
		x: '',
		type: 0,
		typeValue: 'USD',
		resultUSD:'',
		resultEUR:'',
		resultCNY:'',
		resultJPY:'',
		resultSGD:'',
	}
	onButtonCC(){
		this.setState({ resultUSD: this.state.x /35 })		
		this.setState({ resultEUR: this.state.x /37 })				
		this.setState({ resultCNY: this.state.x /5.08 })		
		this.setState({ resultJPY: this.state.x *3.25 })	
		this.setState({ resultSGD: this.state.x /24.81 })
	}	
	onButtonCL(){
		this.setState({x: ''})
		this.setState({ resultUSD: ''})
		this.setState({ resultEUR: '' })				
		this.setState({ resultCNY: '' })		
		this.setState({ resultJPY: '' })	
		this.setState({ resultSGD: '' })
	}
	handleChangeText = (event) => {
	 this.setState({x: event.target.value});
	 }
	handleTypeChange = (event) => {
	 	this.setState({type: event.target.value})
		 if(event.target.value == "0")
		 {
			 this.setState({typeValue: 'USD'});
		 }
		 else if (event.target.value == "1")
		  {
			 this.setState({typeValue: 'EUR'});
		 }
		 else if (event.target.value == "2")
		  {
			 this.setState({typeValue: 'CNY'});
		 }
		 else if (event.target.value == "3")
		  {
			 this.setState({typeValue: 'JPY'});
		 }
		 else if (event.target.value == "4")
		  {
			 this.setState({typeValue: 'SGD'});
		 }		
	 }

 render() {
 	var indents = [];
 	let renderer = null;

 	if(this.state.type == "0")
 	{
 		renderer = <div className="form-box">
		 				<label className="label">USD &nbsp;&nbsp; <input className="input" value={this.state.resultUSD}placeholder="USD"/> &nbsp;&nbsp;$</label>
		 			</div>;
 	}
 	else if(this.state.type == "1")
 	{
 		renderer =  <div className="form-box">
		 			<label className="label">EUR &nbsp;&nbsp; <input className="input" value={this.state.resultEUR} placeholder="EUR"/> &nbsp;&nbsp;€</label>						 
					 </div>;
 	}
	else if(this.state.type == "2")
 	{
 		renderer = <div className="form-box">
		 			<label className="label">CNY &nbsp;&nbsp; <input className="input" value={this.state.resultCNY} placeholder="CNY"/> &nbsp;&nbsp;¥</label>	
		 			</div>;
 	}
	else if(this.state.type == "3")
 	{
 		renderer = <div className="form-box">
		 			<label className="label">JPY &nbsp;&nbsp; <input className="input" value={this.state.resultJPY} placeholder="JPY"/> &nbsp;&nbsp;¥</label>	
		 			</div>;
 	}
	else if(this.state.type == "4")
 	{
 		renderer = <div className="form-box">
		 			<label className="label">SGD &nbsp;&nbsp; <input className="input" value={this.state.resultSGD} placeholder="SGD"/> &nbsp;&nbsp;S$</label>	
		 			</div>;
 	}
 	return (	
		<div className="control has-addons has-addons-centered">
		<div className="hero-body">
			<div className="THB TO USD">

				{/* HEADER */}
				<div className="hero-body">
					<div className="columns">
						<div className="column">
						<p className="control has-addons has-addons-centered">
							<a className="button is-primary">CHANGE TO</a>
							<span className="select">
								<select onChange={this.handleTypeChange}>
									<option value="0">USD</option>
									<option value="1">EUR</option>									
									<option value="2">CNY</option>									
									<option value="3">JPY</option>									
									<option value="4">SGD</option>									
								</select>
							</span>
						</p>
						</div>
					</div>
					<div className="columns">
							{indents}
					</div>
				</div>
				
				{/* CONVERT */}
				<center>
					<h1 className="title">THB TO {this.state.typeValue}</h1>
						<div className="form-box">
		 					<label className="label">THB&nbsp;&nbsp; <input className="input" onChange={this.handleChangeText} value={this.state.x} placeholder="IN PUT HERE"/> &nbsp;&nbsp;฿</label>	
		 				</div>
							<br/>
							<button className="button is-info is-inverted" onClick={this.onButtonCC.bind(this)}>{this.props.buttonText}</button> &nbsp;&nbsp;
							<button className="button is-info is-inverted" onClick={this.onButtonCL.bind(this)}>Clear</button>
							<br/><br/>					
					{renderer}
				</center>
			</div>
		</div>  
		</div>
 		);
 	}
}