import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/Styles';
import Button from '@material-ui/core/Button';
import Bookmarks from '@material-ui/icons/Bookmarks';
import Textfield from '@material-ui/core/TextField'
import NavBar from './Navbar'
import MediaCard from './Cards'



const theme = createMuiTheme(
  {
    palette: {
      primary: { main: '#f44336' },
      secondary: { main: '#00e5ff' }
    }
  }
)

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <NavBar />
        < Button variant="contained" color="secondary" >
          <Bookmarks></Bookmarks>
          Welcome to Material UI
</Button >
        <Textfield placeholder="Enter Your Name" label="Basic Text field " />
        <MediaCard />
      </MuiThemeProvider>

    )
  }
}


export default App;
