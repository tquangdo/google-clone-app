import { useEffect, useState } from "react";
import * as keys from "./Keys";

const useGoogleSearch = term => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${keys.API_KEY}&cx=${keys.CONTEXT_KEY}&q=${term}`
      )
        .then(response => response.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [term]);
  return { data };
};

export default useGoogleSearch;
