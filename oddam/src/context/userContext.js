import {createContext, useState, useEffect} from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {app} from "../firebaseConfig";

export const UserContext = createContext();

export function UserProvider({children}) {

    const [user, setUser] = useState();

    useEffect(() => {
        const auth = getAuth(app);
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser(null)
            }
        });

        return unsubscribe
    }, [])

    return (
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    )
}
