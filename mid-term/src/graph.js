import React, { Component, PropTypes } from 'react';
import './bulma.css';
import usd1 from './pic/usd1.JPG';
import usd2 from './pic/usd2.JPG';
import usd3 from './pic/usd3.JPG';
import eur1 from './pic/eur1.JPG';
import eur2 from './pic/eur2.JPG';
import eur3 from './pic/eur3.JPG';
import cny1 from './pic/cny1.JPG';
import cny2 from './pic/cny2.JPG';
import cny3 from './pic/cny3.JPG';
import jpy1 from './pic/jpy1.JPG';
import jpy2 from './pic/jpy2.JPG';
import jpy3 from './pic/jpy3.JPG';
import sgd1 from './pic/sgd1.JPG';
import sgd2 from './pic/sgd2.JPG';
import sgd3 from './pic/sgd3.JPG';

export class Graph extends Component {
	static propTypes = {
		buttonText: PropTypes.string.isRequired,
	} 
	state = {
		type: 0,
	}
	handleChangeText = (event) => {
	 this.setState({x: event.target.value});
	 }		
	handleTypeChange = (event) => {
	 	this.setState({type: event.target.value})
		 if(event.target.value == "0")
		 {
			 this.setState({typeValue: 'USD1'});
		 }
		 else if (event.target.value == "1")
		  {
			 this.setState({typeValue: 'USD2'});
		 }
		 else if (event.target.value == "2")
		  {
			 this.setState({typeValue: 'USD3'});
		 }
		 else if (event.target.value == "3")
		  {
			 this.setState({typeValue: 'EUR1'});
		 }
		 else if (event.target.value == "4")
		  {
			 this.setState({typeValue: 'EUR2'});
		 }
		 else if (event.target.value == "5")
		  {
			 this.setState({typeValue: 'EUR3'});
		 }
		 else if (event.target.value == "6")
		  {
			 this.setState({typeValue: 'CNY1'});
		 }
		 else if (event.target.value == "7")
		  {
			 this.setState({typeValue: 'CNY2'});
		 }
		 else if (event.target.value == "8")
		  {
			 this.setState({typeValue: 'CNY3'});
		 }
		 else if (event.target.value == "9")
		  {
			 this.setState({typeValue: 'JPY1'});
		 }
		 else if (event.target.value == "10")
		  {
			 this.setState({typeValue: 'JPY2'});
		 }
		 else if (event.target.value == "11")
		  {
			 this.setState({typeValue: 'JPY3'});
		 }
		 else if (event.target.value == "12")
		  {
			 this.setState({typeValue: 'SGD1'});
		 }
		 else if (event.target.value == "13")
		  {
			 this.setState({typeValue: 'SGD2'});
		 }
		 else if (event.target.value == "14")
		  {
			 this.setState({typeValue: 'SGD3'});
		 }
	}
 render() {
 	var indents = [];
 	let renderer = null;

 	if(this.state.type == "0")
 	{
        renderer =<img src= {usd1} width="50%"/>;
 	}
 	else if(this.state.type == "1")
 	{
 		renderer =<img src= {usd2} width="50%"/>;
 	}
	else if(this.state.type == "2")
 	{
 		renderer =<img src= {usd3} width="50%"/>;
 	}
	else if(this.state.type == "3")
 	{
        renderer =<img src= {eur1} width="50%"/>;
 	}
 	else if(this.state.type == "4")
 	{
 		renderer =<img src= {eur2} width="50%"/>;
 	}
	else if(this.state.type == "5")
 	{
 		renderer =<img src= {eur3} width="50%"/>;
 	}
	else if(this.state.type == "6")
 	{
        renderer =<img src= {cny1} width="50%"/>;
 	}
 	else if(this.state.type == "7")
 	{
 		renderer =<img src= {cny2} width="50%"/>;
 	}
	else if(this.state.type == "8")
 	{
 		renderer =<img src= {cny3} width="50%"/>;
 	}
	else if(this.state.type == "9")
 	{
        renderer =<img src= {jpy1} width="50%"/>;
 	}
 	else if(this.state.type == "10")
 	{
 		renderer =<img src= {jpy2} width="50%"/>;
 	}
	else if(this.state.type == "11")
 	{
 		renderer =<img src= {jpy3} width="50%"/>;
 	}
	else if(this.state.type == "12")
 	{
        renderer =<img src= {sgd1} width="50%"/>;
 	}
 	else if(this.state.type == "13")
 	{
 		renderer =<img src= {sgd2} width="50%"/>;
 	}
	else if(this.state.type == "14")
 	{
 		renderer =<img src= {sgd3} width="50%"/>;
 	}
 	return (	
		<div className="control has-addons has-addons-centered">
		<div className="hero-body">		

				{/* HEADER */}
				<div className="hero-body">
					<div className="columns">
						<div className="column">
						<p className="control has-addons has-addons-centered">
							<a className="button is-primary">Graph</a>
							<span className="select">
								<select onChange={this.handleTypeChange}>
									<option value="0">USD 30 Day</option>
									<option value="1">USD 90 Day</option>
									<option value="2">USD 180 Day</option>
									<option value="3">EUR 30 Day</option>
									<option value="4">EUR 90 Day</option>
									<option value="5">EUR 180 Day</option>
									<option value="6">CNY 30 Day</option>
									<option value="7">CNY 90 Day</option>
									<option value="8">CNY 180 Day</option>
									<option value="9">JPY 30 Day</option>
									<option value="10">JPY 90 Day</option>
									<option value="11">JPY 180 Day</option>
									<option value="12">SGD 30 Day</option>
									<option value="13">SGD 90 Day</option>
									<option value="14">SGD 180 Day</option>
								</select>
							</span>
						</p>
						</div>
					</div>
				</div>				
				{/* CONVERT */}
				<center>
					{renderer}
				</center>
			</div>
		</div> 
 		);
 	}
}