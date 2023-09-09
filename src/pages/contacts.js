import React from "react";
import Heading from "../components/Heading";
import { Head,Paragraph,NavItems } from "./data";
import Para from "../components/Para";
import Input from "../components/Input";
import Btn from "../components/Btn";
import Navbar from "../components/Navbar";

import {FaFacebookF,FaTwitter,FaGooglePlusG,FaInstagram,FaYoutube} from "react-icons/fa"

export default class Contacts extends React.Component{
    render(){
        return(
          <>
          <Navbar data={{class:"heroSection hSv",ListData:NavItems.Navli}}/>
          <div className="contact">
            <Heading data={{heading1:Head.h7}}/>
            <Para data={{para:Paragraph.p11}}/>
            <Para data={{para:Paragraph.p12}}/>
            <Para data={{para:Paragraph.p13}}/>
            <Para data={{para:Paragraph.p14}}/>
            <Heading data={{heading1:Head.h8}}/>
            <div>
              <div>
            <Input data={{class:"inp1",holder:"ENTER NAME"}}/>
            <Input data={{class:"inp1 inp2",holder:"ENTER EMAIL"}}/>
              </div>
              {/* <Input data={{class:"inp3",holder:"ENTER YOUR MESSAGE",type:"textarea"}}/> */}
              <textarea className="inp3" placeholder="ENTER YOUR MESSAGE"/>
              <div>
              <Btn data={{class:"btn2",innertext:"Submit"}}/>
              </div>
            </div>
            <div className="clipyimg">
              <Heading data={{heading1:Head.h9}}/>
            <div className="icon">
                    <div><FaFacebookF/></div>
                    <div><FaTwitter/></div>
                    <div><FaGooglePlusG/></div>
                    <div><FaInstagram/></div>
                    <div><FaYoutube/></div>
                </div>
            </div>
            <div className="footer">
              <div style={{display:"flex",flexDirection:"column"}}>
              <Para data={{para:Paragraph.p15}}/>
              <Para data={{para:Paragraph.p20}}/>
              </div>
            </div>
          </div>
          </> 
        )
    }
}