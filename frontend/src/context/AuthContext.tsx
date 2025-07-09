import { createContext, useEffect, useState, type ReactNode } from "react";
import { useViewTransitionState } from "react-router-dom";

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
export const authContext = createContext<UserAuth|null >(null);

export const AuthProvider = ({children}: {children:ReactNode} ) => {
  const [user, setUser] = useState<User | null>(null); 
  const [isLoggedIn, setIsLogggedIn] = useState(false);

  useEffect( () => {
    // fetch if user cookies are valid,  then skip login

  }. []);
  const login = async (email : string, password: string ) => {
    
  }
}