import { useState } from "react";

const access_token= process.env.REACT_APP_ACCESS_TOKEN
// console.log(access_token);

const useInput = (incomingValue) => {
  const [value, setValue] = useState(incomingValue);
  const [suggestions, setSuggestions] = useState([]);
  
  const handleChange = async (event) => {
    console.log(event.target.value)
    setValue(event.target.value);

    try {
      const endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${event.target.value}.json?` + "access_token=" + access_token + "&autocomplete=true";
      const response = await fetch(endpoint);
      const result = await response.json();
      setSuggestions(result?.features);
    } catch (error) {
      console.log("Error Fetching Data ", error);
    }
  };

  return {
    value,
    onChange: handleChange,
    setValue,
    suggestions,
    setSuggestions,
  };
};

export default useInput;
