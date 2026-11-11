import React from "react";

class Formpractice extends React.Component{
    state={
        username:"",
        place:""
    }

    changenameage=(event)=>{
        
        this.setState({
            [event.target.name]:event.target.value
        })
    }


    render(){
        return(
            <div>
                <h1>form class practice</h1>
                <input type="text"
                name="username"
                placeholder="enter your name"
                value={this.state.username}
                onChange={this.changenameage}
                />
                  <input type="text"
                name="place"
                placeholder="enter your place"
                value={this.state.place}
                onChange={this.changenameage}
                />
                <button type="submit">submit</button>

                <h2>name is {this.state.username}</h2>
                <h2>age is {this.state.place}</h2>
            </div>
        )
    }
}
  

export default Formpractice