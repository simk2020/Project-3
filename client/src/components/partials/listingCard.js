import React from "react";

function ListingCard (props){
    //const project = props.project

    return (

        <div className="card" >
        <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI-e6djSmlXeBpqtku9GV1uEvAC8pWh9oaTw&usqp=CAU" alt="Card image"style={{width: '25%'}} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <p className="card-text">{props.startdate}</p>
          <p className="card-text">{props.enddate}</p>
          <p className="card-text">{props.starttime}</p>
          <p className="card-text">{props.endtime}</p>
          <p className="card-text">{props.address}</p>
          <p className="card-text">{props.zipcode}</p>
          <p className="btn waves-effect waves-light btn-small fa d-flex justify-content-center">Delete {props.delete}</p>
        </div>
      </div>
        
    );
}
export default ListingCard;