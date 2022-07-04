import { useState, useEffect } from "react";
import axios from 'axios';
const useFetch = (url,id,type) => {
      const [data, setData] = useState(null);
      const [dataLoaded,setDataLoaded] = useState(false);
      useEffect(() => {
    if(id===null && type === "user") return;
    if(id===null && type === "posts") return;
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
      return {data ,dataLoaded}
};
export default useFetch;