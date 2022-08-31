import React, { Component } from 'react';
class ThemeDiv extends Component {
    constructor(props) {
        super(props);
        this.state = {data:[{backgroundColor:"black",color:"white"},{backgroundColor:"#d6e5ec",color:"#ff8d11"},{backgroundColor:"#FFFFFF",    backgroundImage: "linear-gradient(180deg, #FFFFFF 0%, #6284FF 50%, #FF0000 100%)",color:"crimson"}],theme:{backgroundColor:"rgb(0, 115, 160)",color:"white"}}
    }

    
  changecol=(x)=>
  {
    this.state.theme=this.state.data[x]
     this.setState({theme:this.state.theme})
  }
    render() { 
        return ( 
            <>
            <div className="flex bd" style={this.state.theme}>
                <h1 style={{textAlign:"center"}}>React Theme Demo</h1>
<div className="flex dp" style={{flexDirection:"row"}}><button onClick={()=>this.changecol(0)}>Dark</button><button onClick={()=>this.changecol(1)}>Light</button><button onClick={()=>this.changecol(2)}>Party</button></div>
<img src="logo192.png" style={{width:"200px"}} alt="" />
            </div>
            </>
         );
    }
}
 
export default ThemeDiv;