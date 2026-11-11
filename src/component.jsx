import React from "react";

class Counter extends React.Component{
    state={
        counter:0
    }
    increment=()=>{
        this.setState({
            counter:this.state.counter+1
        })
    }
     decrement=()=>{
        this.setState({
            counter:this.state.counter-1
        })
    }

    render(){
        return(
            <div>
                <h1>counter</h1>
                <h2>{this.state.counter}</h2>
                <button onClick={this.increment}> increse</button>
                 <button onClick={this.decrement}> decrese</button>
            </div>
        )
    }
}

export default Counter