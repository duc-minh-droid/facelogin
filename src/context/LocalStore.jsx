import { createContext } from "react";
import useLocalStorage from 'react-use-localstorage';

export const localStoreContext = createContext()

export default function localStoreContextProvider({children}) {
    const [isLoggedIn, setIsLoggedIn] = useLocalStorage('isLoggedIn', false);
    const [userId, setUserId] = useLocalStorage('user','')
    return (
        <localStoreContext.Provider value={{isLoggedIn, setIsLoggedIn, userId, setUserId}}>
            {children}
        </localStoreContext.Provider>
    )
}