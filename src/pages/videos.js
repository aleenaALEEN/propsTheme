import React from "react";
import Heading from "../components/Heading";
import { Head,NavItems } from "./data";
import Card from "../components/cards";
import Navbar from "../components/Navbar";

export default class Videos extends React.Component{
    render(){
        return(
          <>
          <Navbar data={{class:"heroSection hSv",ListData:NavItems.Navli}}/>
          <div className="videos">
            <Heading data={{heading1:Head.h5}}/>
            <div className="cards-videos">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            </div>
           
          </div>
          </> 
        )
    }
}