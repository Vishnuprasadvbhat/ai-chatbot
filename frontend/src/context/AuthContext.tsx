import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import loginUser from "../helper/api-comm";


type User = {
  name : string ;
  email : string;

};

type UserAuth = {
  isLoggedIn : boolean;
  user : User | null;
  login : (email: string, password:string) => Promise<void>;
  signup : (name: string, email: string, password:string) => Promise<void>;
  logout : () => Promise<void>;

}

export const AuthContext = createContext<UserAuth|null >(null);

export const AuthProvider = ({children}: {children:ReactNode} ) => {
  const [user, setUser] = useState<User | null>(null); 
  const [isLoggedIn, setIsLogggedIn] = useState(false);

  useEffect( () => {
    // fetch if user cookies are valid,  then skip login

  }, []);
  const login = async (email : string, password: string ) => {
    const data = await loginUser(email, password);
    

    if (data){
      setUser({email: data.email, name: data.name});
      setIsLogggedIn(true);
    }

  };
  const signup  = async (name :string , email : string, password: string ) => {};
  const logout = async () => {};

  const value  = {
    user, 
    isLoggedIn,
    login,
    signup,
    logout,

  };
  return (<AuthContext.Provider value= {value}>{children}</AuthContext.Provider>)
};


export const useAuth = () => useContext(AuthContext);