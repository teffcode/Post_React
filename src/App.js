import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  constructor(){
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChangeUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handleChangePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = (event) => {

    const appname = "securityguard"
    const apppasswd = 1234

    console.log(`user: ${this.state.username}`)
    console.log(`user: ${this.state.password}`)

    event.preventDefault();

    axios({ // validación que devuelve roles de usuario
      method: 'post',
      url: 'https://jsonplaceholder.typicode.com/users',
      data: {
        username: this.state.username,
        password: this.state.password
      },
      auth: {
        username: appname,
        password: apppasswd
      },
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
      responseType: 'json'
    })
    .then(response => {
      console.log(response)
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input 
              type="text" 
              value={this.state.username} 
              onChange={this.handleChangeUsername} 
            />
          </label>
          <label>
            Pass:
            <input 
              type="text" 
              value={this.state.password} 
              onChange={this.handleChangePassword} 
            />
          </label>
          <input 
            type="submit" 
            value="Submit" 
          />
        </form>
      </div>
    );
  }
}

export default App;
