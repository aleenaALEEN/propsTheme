import React from "react";
import { Link } from "react-router-dom";



export default class Navbar extends React.Component{
    render(){
        return(
          <>
           
    <nav className="navbar navbar-expand-md navbar-dark bg-dark py-3">
    <div className="container">
      <span className="navbar-brand  font-weight-bolder" style={{fontSize:"3rem", fontStyle:" italic"}}>Mixmaker</span>
    <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsenavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
    <div className="collapse navbar-collapse text-center" id="collapsenavbar">
          <ul className="navbar-nav ml-auto font-weight-bold" style={{fontSize:"1.2rem"}}>
            {
                this.props.data.ListData.map((ele,i)=>{
                    return<li className="nav-item"><Link to={`/${ele}`} key={i} className="nav-link">{ele}</Link></li> 
                })
            }
          </ul>
        </div>
      </div>

        </nav>
          </>

        )
    }
}