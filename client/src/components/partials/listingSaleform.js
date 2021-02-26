import React, { useRef } from "react";
import API from "../../utils/apiHelper";




const LandingSale = props => {

  // const { state, dispatch } = useContext(Store);
  // const errors = state.error;

  const titleRef = useRef();
  const descriptionRef = useRef();
  const startdateRef = useRef();
  const enddateRef = useRef();
  const starttimeRef = useRef();
  const endtimeRef = useRef();
  const addressRef = useRef();
  const zipcodeRef = useRef();

  // useEffect(() => {
  //   if (state.auth.isAuthenticated)
  //     props.history.push('/dashboard');
  // }, [ state, props ]);


  const submit = (e) => {
    e.preventDefault()

    console.log(titleRef.current.value);
    console.log(descriptionRef.current.value);
    console.log(startdateRef.current.value);
    console.log(enddateRef.current.value);
    console.log(starttimeRef.current.value);
    console.log(endtimeRef.current.value);
    console.log(addressRef.current.value);
    console.log(zipcodeRef.current.value);
  
    const newlisting = {
        title: titleRef.current.value,
        description: descriptionRef.current.value,
        startdate: startdateRef.current.value,
        enddate: enddateRef.current.value,
        starttime: starttimeRef.current.value,
        endtime: endtimeRef.current.value,
        address: addressRef.current.value,
        zipcode: zipcodeRef.current.value
    }

    API.newListing(newlisting)
    .then( () => {
      alert ("Listing Saved ")
      // dashboard
    })
    .catch(()=> {
      alert ("Listing FAILED ")
    })

  
    };

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
              <input id="startdate" type="date" ref={startdateRef} className="validate" />
              <label htmlFor="date">Start Date</label>
            </div>

            <div className="input-field col s12">
              <input id="enddate" type="date" ref={enddateRef} className="validate" />
              <label htmlFor="date">End Date</label>
            </div>


            <div className="input-field col s12">
              <input id="starttime" type="time" ref={starttimeRef} className="validate" />
              <label htmlFor="timefrom">Start Time</label>
            </div>

            <div className="input-field col s12">
              <input id="endtime" type="time" ref={endtimeRef} className="validate" />
              <label htmlFor="timefrom">End Time </label>
            </div>

            <div className="input-field col s12">
              <input id="address" type="text" ref={addressRef} className="validate" />
              <label htmlFor="address"> Address </label>
            </div>

            <div className="input-field col s12">
              <input id="zipcode" type="text" ref={zipcodeRef} className="validate" />
              <label htmlFor="zipcode"> Zipcode </label>
            </div>

            {/* <div className="input-field col s12">
              <input id="image" type="img" className="validate" />
              <label htmlFor="pictures">Pictures</label>
            </div> */}
          </div>

          <button class="btn waves-effect waves-light" onClick={submit} name="action">Submit
    <i class="material-icons right">send</i>
          </button>

        </form>
      </div>
    </div>
  );
}

export default LandingSale;

