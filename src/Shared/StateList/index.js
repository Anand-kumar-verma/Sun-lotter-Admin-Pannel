import axios from "axios";


export  const State = ({setState,cuntryId,setloding}) => {

    axios
      .get(`https://b1.bhaaraterp.com/country-state-city-list-api-of-bhaaraterp/?country_id=${cuntryId}`, {
        headers: {
            authorization: `1f3b587d40a217cec89c8987cbe5e2084d27b89b`,
            "Content-Type":"application/json"
          },
      })
      .then((response) => {
        setState(response?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });

  };