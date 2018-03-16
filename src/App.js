import React, { Component } from "react";
import MessageBar from "./MessageBar";
import ChatArea from "./ChatArea";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listTexts: []
        };
    }

    onSubmitText = text => this.setState({
        listTexts: this.state.listTexts.concat(text)
    })

    render() {
        return (
            <div className="app">
                <ChatArea texts={this.state.listTexts}/>
                <MessageBar onSubmitText={this.onSubmitText}/>
            </div>
        );
    }
}

export default App;
