import React from 'react';
import './App.css';
import Title from './Components/Title';

class App extends React.Component {
  state = {
    username: 'Dave123',
    img_url: ''
  };
  render() {
    const { username, img_url } = this.state;
    return (
      <div className="App">
        <Title />
        <LogIn updateUser={this.updateUser} />
        <AllUsers />
        <MessageList username={username} img_url={img_url} />
      </div>
    );
  }
  updateUser = (username, img_url) => {
    this.setState({ username, img_url });
  };
}

export default App;
