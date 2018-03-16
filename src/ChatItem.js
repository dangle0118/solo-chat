import React, { Component } from "react";
import { getCharacter } from './swapi.api';

const SLASH_COMMAND = /^\/.+/;
const STARWAS_COMMAND = /^\/starwars\s\w+/;

class ChatItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			transformedText: ''
		};
	}

	async componentDidMount() {
		let transformedText = '';
		try {
			transformedText = this.isSlashCommand(this.props.text)
				? await this.transformSlashCommand(this.props.text)
				: this.props.text;
		} catch (e) {
			transformedText = `Invalid command: ${e.message}`
		}
		this.setState({
			transformedText
		});
	}

	isSlashCommand = text => SLASH_COMMAND.test(text)
	isStarwarsCommand = text => STARWAS_COMMAND.test(text)

	transformSlashCommand = async (text) => {
		switch(text) {
			case '/time':
				const currentDate = new Date();
				return `Current Date: ${currentDate.toDateString()}`;
			case '/goodbye':
				return 'Goodbye!';
			default:
				if (this.isStarwarsCommand(text)) {
					return await this.transformStarwarsCommand(text);
				} else {
					return `Invalid slash command: /${text}`;
				}
		}
	}

	transformStarwarsCommand = async (text) => {
		const characterName = text.split(' ')[1];
		const characters = await getCharacter(characterName);

		if (characters.results.length) {
			return characters.results[0].name;
		} else {
			throw new Error('No such character');
		}
	}

	render() {
		return (
      <div className="chat-item">
        {this.state.transformedText || 'loading...'}
      </div>
		);
	}
}

export default ChatItem;
