import React from "react";
import Heading from "../components/Heading";
import { Head,GigImages,Paragraph} from "./data";
import Img from "../components/Img";
import Para from "../components/Para";
import Input from "../components/Input";
import Btn from "../components/Btn";
import Navbar from "../components/Navbar";
import { NavItems } from "./data";
export default class Gigs extends React.Component{
    render(){
        return(
          <>
          <Navbar data={{class:"heroSection hSg",ListData:NavItems.Navli}}/>
          <div className="gigs">
            <Heading data={{heading1:Head.h2}}/>
            <div className="images-gigs">
            <Img data={{CardsData:GigImages}}/>
            </div>
            <Para data={{para:Paragraph.p16}}/>
            <Input data={{id:"gigsinput",class:"gigs_inps",holder:"Enter Email"}}/>
            <Btn/>
          </div>
          </>
        )
    }
}