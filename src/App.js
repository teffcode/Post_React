import React, { Component } from 'react';
import axios from 'axios';
import Form from './components/NormalLoginForm';
import { Grid, Label, Segment } from 'semantic-ui-react';

class App extends Component {

  render() {

    return(
      <div>

        <div className="form">
          <Segment raised className="segmentContainer">
              <Label ribbon 
                style={{                                
                    backgroundColor: '#48D1CC', 
                    color:'white', 
                    padding:'15px', 
                    width:'150px',
                    heigth: '60px',
                    paddingLeft: '37px',
                }}>
                    Admin Login
              </Label>                                              
              <Form/>
          </Segment>
        </div>
      </div>
    );
  }
}

export default App;
