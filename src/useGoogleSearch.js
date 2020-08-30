/* API_KEY
1) https://developers.google.com/custom-search/v1/using_rest
2) click "identify your application" of [API key]
3) click "Get a Key"
4) [Enable Custom Search API] select project="google-clone"
*/

/* CONTEXT_KEY
1) https://cse.google.com/cse/create/new
2) Sites to search=www.google.com > Create
3) click "Get a Key"
4) Edit search engine > Setup > Basics > Search the entire web="ON"
5) Copy to clipboard "Search engine ID"
*/

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
