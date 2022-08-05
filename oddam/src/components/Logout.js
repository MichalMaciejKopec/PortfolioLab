import {getAuth, signOut} from "firebase/auth";
import {useEffect} from "react";
import {auth} from "../firebaseConfig";
import Navigation from "./Navigation";

const Logout = () => {

    useEffect(() => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }, [])

    return (
        <>
            <Navigation/>
            <div>Logout</div>
        </>

    )
}

export default Logout;
