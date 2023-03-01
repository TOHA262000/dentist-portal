import { useEffect, useState } from "react";

const useAdmin = email => {
    const [isAdmin,setIsAdmin]=useState(false);
    const [adminLoading,setAdminLoading]=useState(true);

    useEffect(()=>{
        if(email){
            fetch(`http://localhost:5000/user/admin/${email}`)
            .then(res=>res.json())
            .then(data=>{
                setIsAdmin(data);
                setAdminLoading(false);
            })
        }
    },[email])

    return [isAdmin,adminLoading]
};

export default useAdmin;