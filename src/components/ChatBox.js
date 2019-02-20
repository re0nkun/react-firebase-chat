import React, { Component } from 'react'
// import MuithemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaiseButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

export default class ChatBox extends Component {
  render() {
    const { 
      text,
      user_name,
      profile_image,
      onTextChange, 
      onButtonClick 
    } = this.props

    return (
      // <MuithemeProvider>
        <div className="ChatBox">
          <div>
            <TextField name='user_name' placeholder="Name"
              value={user_name}
              onChange={onTextChange}
            />
            
            <TextField name='profile_image' placeholder="Profile Image URL"
              value={profile_image}
              onChange={onTextChange}
            />           
          </div>

          <TextField rows={2} multiLine={true} name='text'
            value={text}
            onChange={onTextChange}
          />

          <RaiseButton primary={true} label="Send" 
            onClick={onButtonClick}
          />
        </div>
      // </MuithemeProvider>
    )
  }
}
