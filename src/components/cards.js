import React from "react";
import Heading from "./Heading";
import { Head,Paragraph } from "../pages/data";
import Para from "./Para";


export default class Card extends React.Component{
    render(){
        return(
          <>
          <div className="cards">
            <Heading data={{heading1:Head.h6}}/>
            <Para data={{para:Paragraph.p10}}/>
          </div>
       
          </> 
        )
    }
} 