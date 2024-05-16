import axios from "axios";


export const City = ({setCity,cuntryId,stateId,setloding}) => {
    axios
    .get(`https://b1.bhaaraterp.com/country-state-city-list-api-of-bhaaraterp/?country_id=${cuntryId}&state_id=${stateId}`, {
        headers: {
          authorization: `1f3b587d40a217cec89c8987cbe5e2084d27b89b`,
          "Content-Type":"application/json"
        },
      })
      .then((response) => {
        console.log(response)
        setCity(response?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  
  };