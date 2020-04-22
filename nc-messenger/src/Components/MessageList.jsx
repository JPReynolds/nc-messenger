import React, { Component } from 'react';
import AllUsers from './AllUsers';
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:3000');

class MessageList extends Component {
  state = {
    messages: []
  };
  render() {
    return (
      <div>
        {/* <AllUsers /> */}
        {this.state.messages.map((message) => {
          return (
            <ul>
              <li>{this.props.username}</li>
              <li>{message.body}</li>
            </ul>
          );
        })}
        <form onSubmit={this.handleSubmit}>
          <label>
            type comment here: <input type="text" />
          </label>
          <button type="submit"></button>
        </form>
      </div>
    );
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log('yaay');
  };
}

export default MessageList;
