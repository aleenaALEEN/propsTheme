import React from "react";
import Heading from "../components/Heading";
import { Head } from "./data";
import Img from "../components/Img";
import { PhotoImg,Paragraph } from "./data";
import Para from "../components/Para";
import Navbar from "../components/Navbar";
import { NavItems } from "./data";

export default class Photos extends React.Component{
    render(){
        return(
          <>
          <Navbar data={{class:"heroSection hS",ListData:NavItems.Navli}}/>
          <div className="photos">
            <Heading data={{heading1:Head.h10}}/>
            <div className="img-photos">
            <Img data={{CardsData:PhotoImg}}/>
            </div>
            <div style={{color:"white",marginTop:"20px",display:"flex",justifyContent:"center",alignItems:"center",}}>
            <Para data={{style:{marginRight:"5px"} ,para:Paragraph.p17}}/>
            <Para data={{para:Paragraph.p19}}/>
            </div>
          </div>
          </> 
        )
    }
}