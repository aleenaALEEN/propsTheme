import React from "react"

export default class Img  extends React.Component{
    render(){
    const CardsData = this.props.data.CardsData;
    console.log(CardsData,"cardsdata");
        return(
            <>
            {
                CardsData.map((ele,i)=>{
                    return   <img key={i} src={ele.img}></img>
            
                }) 
            }
        
            </>
        )
    }
}
