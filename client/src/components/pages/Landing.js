import React, { useContext } from 'react';
import { Store } from '../../store';
import { Link } from 'react-router-dom';

const Landing = props => {
  const { state } = useContext(Store);

  console.log({ state, props });

  return (
    <div className= "row">
      <div className= "col s6">
        <card className= "salesMap">
          <p> this is where the map will go</p>
          </card>
      </div>
      <div className= "col s6">
        <card className= "salesList">
          <p>this is where the listed sales will go</p>
        </card>
      </div>
    </div>
    
  );
};

export default Landing;
