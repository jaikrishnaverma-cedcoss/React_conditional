import React, { Component } from 'react';
import Searching from './Searching';
import Changediv from './Changediv';
class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {btnval:0}
    }
    changeBtn=event=>
    {
        this.setState({btnval:this.state.btnval+1})
    }
    render() { 
        return ( 
            <>
            <Searching />
            <button style={{marginTop:"100px",borderRadius:"5px",border:"2px solid #ffdb00",backgroundColor:"yellow",padding:"10px 20px"}} onClick={this.changeBtn}>{`From Main Componenet: ${this.state.btnval}`}</button>
            <Changediv colo={this.state.btnval}/>
            </>
         );
    }
}
 
export default Main;