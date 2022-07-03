import { useState, useEffect } from "react";
import axios from 'axios';
const useFetch = (url) => {
      const [data, setData] = useState(null);
      const [dataLoaded,setDataLoaded] = useState(false);
      useEffect(() => {
        //   fetch(url)
        //   .then((res) => res.json())
        //   .then((data) =>{ 
        //     setData(data)
        //     setDataLoaded(true)
        // })
        //   .catch((err) => console.log(err));
        (async () => {
          setDataLoaded(false);
          const response = await axios.get(url);
          setDataLoaded(true);
          if(Array.isArray(response.data)){
            setData(response.data);
          } else{
            setData([response.data])
          }
        })();
      }, [url]);
      console.log(data);
      return {data ,dataLoaded}
};
export default useFetch;