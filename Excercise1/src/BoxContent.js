import React, { Component } from 'react';
import './bttn.css';
import './bulma.css';
import {SubBox} from './SubBox';

export class BoxContent extends Component {
	state = {
		subCol:'1',
	}

	handleChangeSubBox = (event) =>{
		this.setState({subCol: event.target.value});	
	}
	render(){
		var subSelectBox = [];
		for(var i=0; i<=this.state.subCol-1;i++){
			subSelectBox.push(i);
		}
		return(
			<div className="column">
              <div className="notification is-primary">
              	<h3>Column</h3>
              	<hr />
				<p className="control">
		            <span>Select </span>
		            <span className="select">
		              <select onChange={this.handleChangeSubBox}>
		                <option value="1" defaultValue>1</option>
		                <option value="2">2</option>
		                <option value="3">3</option>
		                <option value="4">4</option>
		              </select>
		            </span>
		        </p>
		        <div className="columns">
		            {
	          	  	 	subSelectBox.map(function(i) {
	          	  	 		return <SubBox index={i} key={i} />;
	          	  	 	})
	          	  	 }
          	  	</div>
              </div>
            </div>
		);
	}
}
