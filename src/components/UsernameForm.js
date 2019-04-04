import React, {Component} from "react" 

class UsernameForm extends Component{
state = {
    username: ''
}

handleChange =(e) =>{
    
    const {value} = e.target

    this.setState({
        username:value
    })

}

handleSubmit =(e) =>{
    e.preventDefault()
    this.props.handleSubmit(this.state.username)
}
render(){
return(
    <form onSubmit ={this.handleSubmit}>
    <input type= "text" name="name" value= {this.state.username} onChange= {this.handleChange}/>
    <button type ="submit">Submit</button>
    </form>
)
}
}


export default UsernameForm