import React, { Component } from 'react'
import UsernameForm from "./components/UsernameForm"

class App extends Component {

  handleSubmit(username){
    fetch('http://localhost/3001/users',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
       
      },
      body: JSON.stringify({username})     

    })
    .then((res) => {
      // res.json()
      console.log('sucess')
    })
    .catch((err) => console.log(err))
  }
  render() {
    return <UsernameForm onSubmit = {this.handleSubmit}/>
  }
}

export default App
