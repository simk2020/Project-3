import React from "react";

function ListingCard (props){
    //const project = props.project

    return (

        <div className="card small" >
        <img className="card-img-top" src={props.image} alt="Card image"style={{width: '25%'}} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <p className="card-text">{props.date}</p>
          <p className="card-text">{props.time}</p>
          <p className="card-text">{props.address}</p>
        </div>
      </div>
        

    );
}
export default ListingCard;