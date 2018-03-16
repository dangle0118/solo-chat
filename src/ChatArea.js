import React, { Component } from "react";
import ChatItem from './ChatItem';

class ChatArea extends Component {
	render() {
		return (
			<div className="chatArea">
				<ul>
					{this.props.texts.map(text => <li key={text}><ChatItem text={text} /></li>)}
				</ul>
			</div>
		);
	}
}

export default ChatArea;
