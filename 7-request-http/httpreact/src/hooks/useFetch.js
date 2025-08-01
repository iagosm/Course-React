import {useState, useEffect} from 'react';

// 4 - custom hook
export const useFetch = (url) => {
  const [data, setData] = useState(null)

  // 5 refatorando  post
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  // 6 loading
  const [loading, setLoading] = useState(false);

  /// 7 Tratando erros
  const [error, setError] = useState(null)

  // 8 Desafio 6
  const [itemId, setItemId] = useState(null)


  const httpConfig = (data, method) => {
    if(method === "POST") {
      setConfig({
        method,
        headers: {
          'Content-type' : "application/json"
        },
        body: JSON.stringify(data)
      });
      setMethod(method);
    }
    if(method === 'DELETE') {
      setConfig({
        method,
        headers: {
          'Content-type' : "application/json"
        }
      });
      setMethod(method);
      setItemId(data);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try{
        const res = await fetch(url)
        const json = await res.json();
        setData(json);
        setLoading(false);
        console.log(json)
      } catch(error) {
        console.log(error.message)
        setError(error.message);
      }
    };
    fetchData();
  }, [url, callFetch]);
  
  
  //5 Refatorando post
  useEffect(() => {
    const httpRequest = async () => {
      let json;
      if(method === "POST"){
        let fetchOptions = [url, config];
        const res = await fetch(...fetchOptions);
        json = await res.json();
        setCallFetch(json);
        console.log(json)
      } else if(method === "DELETE"){
        const deleteUrl = `${url}/${itemId}`
        const res = await fetch(deleteUrl, config);
        json = await res.json();
      }
      setCallFetch(json);
    }
    httpRequest();
  }, [config, method, url]);
  return {data, httpConfig, loading, error};
};