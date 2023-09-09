import React from "react";


export default class Input extends React.Component{
    render(){
      console.log(this.props.data,"data");
       const result=this.props.data?<input className={this.props.data.class} id={this.props.data.id} style={this.props.data.style} placeholder={this.props.data.holder} type={this.props.data.type}></input>:<input  style={{height:"50px",width:"320px",backgroundColor:"lightgray",border:"none",fontSize:"14px",marginLeft:"33%",paddingLeft:"15px",outline:"none"}} placeholder="ENTER EMAIL"></input>

        return(
          result
        )
    }
}