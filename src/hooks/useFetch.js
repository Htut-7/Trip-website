import { useEffect } from "react";
import { useState } from "react";

function useFetch(url){

    let [data,setData]=useState('');
    let [loading,setLoading]=useState(false);
    let [error,setError]=useState(null);
    let [filter,setFilter]=useState('All');

    useEffect(()=>{
        setLoading(true)
        fetch(url)
        .then(res=>{
            if(!res.ok){
                throw Error('Something went wrong')
            }
            return res.json()
        })
        .then(data=>{
            setData(data);
            setLoading(false);
            setFilter(data);
        })
        .catch(e=>{
            setError(e.message);
            setError(false);
        })
    },[url])

    return {data, loading , error, filter}

  
}

export default useFetch;