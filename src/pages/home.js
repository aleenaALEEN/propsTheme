import React from "react";
import Navbar from "../components/Navbar";
import { NavItems } from "./data";
import Para from "../components/Para";
import Heading from "../components/Heading";
import {FaFacebookF,FaTwitter,FaGooglePlusG,FaInstagram,FaYoutube} from "react-icons/fa"

export default class Home extends React.Component{
  render() {
    return (
      <>
        <div className="bcg">
          <Navbar data={{class:"heroSection",ListData:NavItems.Navli}}/>
          <div className="home">
            <Para data={{para:"PERFORMANCE CLUB DJ"}}/>
            <Heading data={{heading1:"MIXMAKE"}}/>
            <div id="textu">
              <Heading data={{heading1:"R"}}/>
            </div>
            <Para data={{para:"HOUSE • GROOVE • SOUL"}}/>
          </div>
          <div className="icon">
                    <div><FaFacebookF/></div>
                    <div><FaTwitter/></div>
                    <div><FaGooglePlusG/></div>
                    <div><FaInstagram/></div>
                    <div><FaYoutube/></div>
                </div>
        </div>
      </>
    );
  }
}
