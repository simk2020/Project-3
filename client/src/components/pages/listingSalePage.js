

// const LandingSale = props => {
//   const { state } = useContext(Store);

//   console.log({ state, props });
const LandingSale = props => {
  return (

    <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <input id="Sale_Title" type="text" className="validate" />
            <label htmlFor="first_name">Sale Title</label>
          </div>

          <div className="input-field col s12">
            <input id="Sale_Title" type="text" className="validate" />
            <label htmlFor="first_name">Sale Description</label>
          </div>

          <div className="input-field col s12">
            <input id="sale_description" type="date" className="validate" />
            <label htmlFor="date">Sale Date</label>
          </div>


          <div className="input-field col s12">
            <input id="timefrom" type="time" className="validate" />
            <label htmlFor="timefrom">Sale from</label>
            <input id="timeto" type="time" className="validate" />
            <label htmlFor="timeto">Sale till</label>
          </div>


          <div className="input-field col s12">
            <input id="sale_description" type="img" className="validate" />
            <label htmlFor="pictures">Pictures</label>
          </div>
        </div>


        <button class="btn waves-effect waves-light" type="submit" name="action">Submit
    <i class="material-icons right">send</i>
        </button>

      </form>
    </div>
  );
}

export default LandingSale;

