import { useEffect, useState } from "react";


const useToken = email => {
    const [token, setToken] = useState()
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/jwt?email=${email}`, {
                credentials: 'include'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.accessToken) {
                        setToken(data.accessToken);
                    }
                })
        }

    }, [email])
    return [token];
}


export default useToken