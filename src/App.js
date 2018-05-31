import React, { Component } from 'react';
import './App.css';
import { Button, Card, Image } from 'semantic-ui-react'

class App extends Component {
  state = {
    user: {},
    active: false,
    text: "",
  }
  handleClick = () => {
    fetch( `https://api.github.com/users/${this.state.text}` )
    .then( r => r.json())
    .then( response => {
      this.setState({ 
        user: response,
        active: !this.state.active,
      })
    })
  }
  onChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  }
  render() {
    const { user, active } = this.state;
    return (
      <div className="App">
        <input placeholder="Type a GitHub Username" type="text" onChange={this.onChange} value={this.state.text} />
        <Button primary onClick={ this.handleClick }>
          { active ?
            "Hide Profile" :
            "Show Profile"
          }
        </Button>
        { active && 
          <Card>
            <Image src={user.avatar_url}/>
            <Card.Content>
              <Card.Header>{user.name}</Card.Header>
              <Card.Meta>{user.company}</Card.Meta>
              <Card.Description>{user.bio}</Card.Description>
            </Card.Content>
          </Card>
        }
      </div>
    );
  }
}

export default App;
