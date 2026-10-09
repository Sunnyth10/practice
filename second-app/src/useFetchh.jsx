import { useEffect, useState } from "react";
function useFetchh(url){
    let [user, setUser] = useState([])
    useEffect(() =>{
        fetch(url)
        .then(res=>res.json())
        .then((result)=>{setUser(result)})
        .catch((error)=>console.error("Error while fetching", error))
    }, [url])
    return user;
}
export default useFetchh;