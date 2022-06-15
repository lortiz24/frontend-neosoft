import { createContext,useContext } from "react";

const INITIAL_STATE={
    value:'',
    setValue:()=>{},
}

export const AuthContext = createContext();

export const useAuthContext= ()=>useContext(AuthContext);

export const AuthProvider=(children=<></>,value=INITIAL_STATE)=><AuthContext.Provider value={value}>{children}</AuthContext.Provider>
