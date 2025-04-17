import { useEffect, useState } from "react";


const useToken = email => {
    const [token, setToken] = useState('')
    useEffect(() => {
        if (email) {
            fetch(`https://dentist-portal-server.vercel.app/jwt?email=${email}`, {
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