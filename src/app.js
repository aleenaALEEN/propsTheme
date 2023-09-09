import React from "react";
import Home from "./pages/home";
import About from "./pages/about";
import Gigs from "./pages/gigs";
import Photos from "./pages/photos";
import Videos from "./pages/videos";
import Contacts from "./pages/contacts";
import Mixes from "./pages/mixes";
import { Routes,Route } from "react-router-dom";


export default class App extends React.Component{
    render(){
        return(
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/gigs" element={<Gigs/>}/>
            <Route path="/mixes" element={<Mixes/>}/>
            <Route path="/photos" element={<Photos/>}/>
            <Route path="/videos" element={<Videos/>}/>
            <Route path="/contacts" element={<Contacts/>}/>

          </Routes>
        )
    }
}