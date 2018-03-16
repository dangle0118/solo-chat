import React, { Component } from "react";

class MessageBar extends Component {
	onChange = event => this.props.onChange(event.target.value)

	render() {
		return (
			<div className="textInput">
				<input 
					type="text"
					placeholder="Say something to yourself!"
					value={this.props.value}
					onChange={this.onChange}/>
			</div>
		);
	}
}

export default MessageBar;
