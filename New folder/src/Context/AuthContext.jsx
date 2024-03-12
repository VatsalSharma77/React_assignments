import { createContext,useState } from "react";

export const authContext = createContext();
function AuthContextProvider({children}) {
    const [authState,setAuthState] = useState({
        isAuth:false,
        token:null
    });
    function loginUser(token){
        setAuthState({
            ...authState,
            isAuth:true,
            token:token
        })
    }
    function  logoutUser(){
        setAuthState({
            ...authState,
            isAuth:false,
            token:null
        })
    }

    return <authContext.Provider value={{loginUser,logoutUser,authState}}>
        {children}
    </authContext.Provider>
        
    
}

export default AuthContextProvider;
