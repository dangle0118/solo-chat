import React, { Component } from "react";
import TextInput from "./TextInput";
import SendButton from "./SendButton";

const GOODBYE_CMD = '/goodbye';

class MessageBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            textValue: '',
            isGoodbye: false
        };
    }

    onSubmit = () => {
        this.props.onSubmitText(this.state.textValue);
        const isGoodbye = this.state.textValue === GOODBYE_CMD;
        this.setState({
            textValue: '',
            isGoodbye
        });
    }

    onTextChange = value => {
        this.setState({
            textValue: value
        });
    }

    render() {
        return (
            <div className="messageBar">
                <TextInput value={this.state.textValue} onChange={this.onTextChange}  />
                <SendButton onSubmit={this.onSubmit} disabled={!this.state.textValue.length || this.state.isGoodbye} />
            </div>
        );
    }
}

export default MessageBar;
