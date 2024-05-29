import {createContext} from "react";
import {UserType} from "../types/user.type.ts";


const userContext = createContext<UserType | null>( null)

export const UserContextProvider = userContext.Provider
export const UserContextConsumer = userContext.Consumer
