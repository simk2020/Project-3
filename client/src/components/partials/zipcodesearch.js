import Zip from 'react-zipcode';

const Zipcode = (props)=>{

return <Zip onValue={(value) => console.log(`validated zip code: ${value}`)}></Zip>
}

export default Zipcode;
