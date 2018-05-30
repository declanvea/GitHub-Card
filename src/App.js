import React, { Component } from 'react';
import './App.css';
import { Button, Card, Image } from 'semantic-ui-react'

class App extends Component {
  state = {
    user: {},
    active: false,
  }
  handleClick = () => {
    fetch( 'https://api.github.com/users/declanvea' )
    .then( r => r.json())
    .then( response => {
      this.setState({ 
        user: response,
        active: !this.state.active,
      })
    })
  }
  render() {
    const { user, active } = this.state;
    return (
      <div className="App">
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
