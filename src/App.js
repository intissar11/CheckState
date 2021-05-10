import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Profile from './Component/profile/Profile';

export class App extends Component {
  state={
    showstate:false
      }
      toggle = () => {
        this.setState({showstate:!this.state.showstate})
      }
  render() {
    return (
      <div style={{textAlign:"center",marginTop:"50px"}}>
      <Button variant="info" onClick={this.toggle}>{this.state.showstate ? "Hide" : "Show"}</Button> <br/>
      {this.state.showstate===true ? <Profile/> :"Show Mark's profile"}
      </div>
    )
  }
}

export default App
