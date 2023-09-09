import React from "react";
// import Card from "../components/Cards";
import { AboutImg, Head, Paragraph } from "./data";
import Heading from "../components/Heading";
import Para from "../components/Para";
import Navbar from "../components/Navbar";
import { NavItems } from "./data";
import Img from "../components/Img";
export default class About extends React.Component{
  render() {
    return (
      <>
          <Navbar  data={{class:"heroSection hS",ListData:NavItems.Navli}}/>
      <div className="about">
        <Heading data={{ heading1: Head.h1 }} />
        <Para data={{ para: Paragraph.p1 }} />
        <div className="about-img">
        <Img data={{ CardsData: AboutImg }} />
        </div>
        <Para data={{ para: Paragraph.p2 }} />
        <Para data={{ para: Paragraph.p3 }} />
        <hr/>
       <ul className="about-ul">
        <li>Biography</li>
        <li>DJ INFO</li>
        <li>DISCO</li>
        <li>VENUES</li>
        <li>AWARDS</li>
       </ul>
      </div>
         <div className="creator">
         <div className="creator-para">
           <Para data={{ para:Paragraph.p4}} />
           <Para data={{ para:Paragraph.p5}} />
         </div>
       </div>
       </>
    );
  }
}
