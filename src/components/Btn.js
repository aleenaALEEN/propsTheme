import React from "react";


export default class Btn extends React.Component{
    render(){
      // console.log(this.props.data,"data");
      const result=this.props.data?<button className={this.props.data.class} style={this.props.data.style} >{this.props.data.innertext}</button>:<button style={{height:"50px",width:"180px",backgroundColor:"yellow",border:"none",fontSize:"14px",marginLeft:"10px", fontWeight: "bold",fontSize:"16px"}} >Submit</button>

        return(
          result
        )
    }
}