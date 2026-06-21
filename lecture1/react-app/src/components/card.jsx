import React from "react";
import "../css/card.css";

function Card(props){
    console.log(props);
    return <div  className="card">
        <div className="image">
            <img src="/images.jpg" alt="" />

        </div>
        <div className="body-part">
            <div className="main-header">
                <h3>{props.product}</h3>
            </div>
            <div  className="description">
                <p>{props.description}</p>
            </div>
            <div >
            <button>{props.state?"Stock":"Out of stock"}</button>
            </div>
        </div>
        


    </div>
}
export default Card;
