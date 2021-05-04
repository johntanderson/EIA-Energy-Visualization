import React, { Component } from "react";
import { Container } from 'semantic-ui-react'
import Search from './components/search'
import EIA_API from './api/EIA_API';

let API = new EIA_API('http://127.0.0.1:5000');

class App extends Component{

  render = ()=> {
    return (
      <Container style={{marginTop: '15px'}}>
            <Search onSearch={this.handleQuery}></Search>
      </Container>
    )
  }

  handleQuery = async (queryParams)=> {
    let data = await API[queryParams[0]](queryParams[2], queryParams[1]);
    console.log(data);
  }
}

export default App;
