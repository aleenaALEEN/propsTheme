import React from "react";


export default class Para extends React.Component{
    render(){
        return(
          <p style={this.props.data.style}>{this.props.data.para}</p> 
        )
    }
}