import React, {createContext, useContext, useState} from 'react';


type AuthContextObject = {
    login: boolean;
    setLogin: () => void;
}

const AuthContext = React.createContext<AuthContextObject>({
    login: false,
    setLogin: ()=> {}
})

export const useAuthContext = () => {
    return useContext(AuthContext);
}

interface Props {
    children: React.ReactNode
}

const AuthContextProvider:React.FC<Props> = ({children}) => {

    const [login, setLogin]= useState<boolean>(false);

    const AuthContextValue: AuthContextObject = {
        login,
        setLogin
    }

    return (
        <AuthContext.Provider value={AuthContext}>
          {children}  
        </AuthContext.Provider>

    )
}