// import { useState } from "react"

// const useToken = () => {

//     const getToken = () => {
//         const tokenString = localStorage.getItem("token");
//         console.log("tokenString:", tokenString); 
//         const userToken = JSON.parse(tokenString);
//         console.log("userToken:", userToken); 
//         return userToken?.token;
//     };
    

//     const [token, setToken] = useState(getToken())

//     const saveToken = userToken =>{
//         localStorage.setItem("token", JSON.stringify(userToken))
//         setToken(userToken.token)
//     }

//     const removeToken = () => {
//         localStorage.removeItem("token")
//         setToken(null)
//     }

//     return {
//         token,
//         setToken: saveToken,
//         removeToken
//     }
// }

// export default useToken

import { useState } from "react";

const useToken = () => {
    const getToken = () => {
        const tokenString = localStorage.getItem("token");
        console.log("tokenString:", tokenString); 
        if (!tokenString) return null; // Si no hay token, retorna null
        const userToken = JSON.parse(tokenString);
        console.log("userToken:", userToken); 
        return userToken?.token;
    };

    const [token, setToken] = useState(getToken());

    const saveToken = (userToken) => {
        if (userToken && userToken.token) {
            localStorage.setItem("token", JSON.stringify(userToken));
            setToken(userToken.token); // Asegúrate de pasar solo el valor del token
        } else {
            console.error("El formato de userToken no es válido");
        }
    };

    const removeToken = () => {
        localStorage.removeItem("token");
        setToken(null);
    };

    return {
        token,
        setToken: saveToken,
        removeToken
    };
};

export default useToken;
