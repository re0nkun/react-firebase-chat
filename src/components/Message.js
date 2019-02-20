import React, { Component } from 'react'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Avatar from 'material-ui/Avatar'
import List from 'material-ui/List/List'
import ListItem from 'material-ui/List/ListItem'
import Chip from 'material-ui/Chip'

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  }
}

export default class Message extends Component {
  render() {
    const { message } = this.props
    
    return (
      <div className="Message">
      <List>
        <ListItem disabled={true}>
          <Avatar src={message.profile_image}/>
          <span style={{marginBottom: -5}}>
            @{message.user_name}
          </span>
          <div>
            <Chip style={styles.chip}>
              {message.text}
            </Chip>
          </div>
        </ListItem>
      </List>        
      </div>
    )
  }
}
