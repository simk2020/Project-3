

// const LandingSale = props => {
//   const { state } = useContext(Store);

//   console.log({ state, props });
const LandingSale = props => {
  return (
    <div className="container valign-wrapper">
      <div className="row" >
        <h4 className="center"> POST YOUR SALE</h4>
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input id="title" type="text" className="validate" />
              <label htmlFor="first_name">Title</label>
            </div>

            <div className="input-field col s12">
              <input id="description" type="text" className="validate" />
              <label htmlFor="description">Description/comments</label>
            </div>

            <div className="input-field col s12">
              <input id="startdate" type="date" className="validate" />
              <label htmlFor="date">Start Date</label>
            </div>

            <div className="input-field col s12">
              <input id="enddate" type="date" className="validate" />
              <label htmlFor="date">End Date</label>
            </div>


            <div className="input-field col s12">
              <input id="starttime" type="time" className="validate" />
              <label htmlFor="timefrom">Start Time</label>
            </div>

            <div className="input-field col s12">
              <input id="endtime" type="time" className="validate" />
              <label htmlFor="timefrom">End Time </label>
            </div>

            {/* <div className="input-field col s12">
              <input id="image" type="img" className="validate" />
              <label htmlFor="pictures">Pictures</label>
            </div> */}
          </div>


          <button class="btn waves-effect waves-light" type="submit" name="action">Submit
    <i class="material-icons right">send</i>
          </button>

        </form>
      </div>
    </div>
  );
}

export default LandingSale;

