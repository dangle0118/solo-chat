import React, { Component } from "react";

class SendButton extends Component {
	render() {
		return (
			<button 
				type="button" 
				disabled={this.props.disabled} 
				onClick={this.props.onSubmit}
			>
				Send
			</button>
		);
	}
}

export default SendButton;
