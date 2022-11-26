import { useEffect, useState } from "react"

const useAdmin = (email)=>{
    const [admin, setAdmin]=useState(false)
    useEffect(()=>{
        fetch(`http://localhost:5000/users/admin/${email}`)
        .then(res=>res.json())
        .then(data=>{
            setAdmin(data.admin)
        })
    },[email])
    return({admin})

}

export default useAdmin;