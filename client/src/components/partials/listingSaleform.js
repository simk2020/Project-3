import React, { useRef} from "react";
import API from "../../utils/apiHelper";




const LandingSale = props => {

  const titleRef = useRef ();
  const descriptionRef = useRef ();
  const startdateRef = useRef ();
  const enddateRef = useRef ();
  const starttimeRef = useRef ();
  const endtimeRef = useRef ();

const submit = (e)=> {
e.preventDefault()

console.log (titleRef.current.value);
console.log (descriptionRef.current.value);
console.log (startdateRef.current.value);
console.log (enddateRef.current.value);
console.log (starttimeRef.current.value);
console.log (endtimeRef.current.value);

// API.newListing(

// ).then 
}

  return (
    <div className="container valign-wrapper">
      <div className="row" >
        <h4 className="center"> POST YOUR SALE</h4>
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input id="title" type="text" ref={titleRef} className="validate" />
              <label htmlFor="first_name">Title</label>
            </div>

            <div className="input-field col s12">
              <input id="description" type="text" ref={descriptionRef} className="validate" />
              <label htmlFor="description">Description/comments</label>
            </div>

            <div className="input-field col s12">
              <input id="startdate" type="date"  ref={startdateRef} className="validate" />
              <label htmlFor="date">Start Date</label>
            </div>

            <div className="input-field col s12">
              <input id="enddate" type="date"   ref={enddateRef}className="validate" />
              <label htmlFor="date">End Date</label>
            </div>


            <div className="input-field col s12">
              <input id="starttime" type="time"  ref={starttimeRef} className="validate" />
              <label htmlFor="timefrom">Start Time</label>
            </div>

            <div className="input-field col s12">
              <input id="endtime" type="time"  ref={endtimeRef} className="validate" />
              <label htmlFor="timefrom">End Time </label>
            </div>

            {/* <div className="input-field col s12">
              <input id="image" type="img" className="validate" />
              <label htmlFor="pictures">Pictures</label>
            </div> */}
          </div>


          <button class="btn waves-effect waves-light" onClick= {submit} name="action">Submit
    <i class="material-icons right">send</i>
          </button>

        </form>
      </div>
    </div>
  );
}

export default LandingSale;

