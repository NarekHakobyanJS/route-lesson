import { useContext } from "react";
import { AuthContext } from "../հօc/AuthProvider";

export function useAuth(){
    return useContext(AuthContext)
}