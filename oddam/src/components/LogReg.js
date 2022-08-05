import Navigation from "./Navigation";
import {useForm} from "react-hook-form";
import {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";

import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {auth, db} from "../firebaseConfig";
import {doc, setDoc} from "firebase/firestore";

const schema = yup.object({
    email: yup.string().email("Podaj email").required("Podaj email"),
    password: yup.string().min(8, "Hasło powinno mieć minimum 8 zanków").required("Podaj hasło"),
    password2: yup.string().oneOf([yup.ref('password'), null], 'Hasła muszą być takie same')
}).required();

const LogReg = ({create, logout}) => {

    const navigate = useNavigate()
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });
    const [error, setError] = useState({
        type: 0,
        message: "",
    });

    useEffect(() => {
        window.scrollTo(0, 0)
        if (logout) {
            signOut(auth).then(() => {

            }).catch((error) => {

            });
        }
    }, [])

    const onSubmit = data => {
        setError({
            type: 0,
            message: "",
        });
        if (create) {
            createUserWithEmailAndPassword(auth, data.email, data.password)
                .then((userCredential) => {
                    setDoc(doc(db, "users", userCredential.user.uid), {
                        email: userCredential.user.email
                    });
                })
                .catch((error) => {
                    switch (error.code) {
                        case "auth/invalid-email":
                            setError({
                                type: 1,
                                message: "Błędny email",
                            })
                            break;
                        case "auth/email-already-in-use":
                            setError({
                                type: 1,
                                message: "Email jest już w użyciu",
                            })
                            break;
                    }
                });
        } else {
            signInWithEmailAndPassword(auth, data.email, data.password)
                .then((userCredential) => {
                    console.log(userCredential.user);
                })
                .catch((error) => {
                    switch (error.code) {
                        case "auth/user-not-found":
                            setError({
                                type: 1,
                                message: "Nie ma takiego użytkownika",
                            })
                            break;
                        case ("auth/wrong-password" || "//auth/invalid-password"):
                            setError({
                                type: 2,
                                message: "Błędne hasło",
                            })
                            break;
                    }
                });
        }
        navigate("/");
    }

    return (logout ?
            <>
                <Navigation/>
                <div className="logReg">
                    <h1 className="logReg-title">Wylogowanie nastąpiło pomyślnie!</h1>
                    <div className="decoration"/>
                    <Link to="/">Strona główna</Link>
                </div>
            </>
            :
            <>
                <Navigation/>
                <div className="logReg">
                    <h1 className="logReg-title">{create ? "Załóż konto" : "Zaloguj się"}</h1>
                    <div className="decoration"/>
                    <form className="logReg-form" onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="email">Email</label>
                        <input id="email" className="logReg-form-input" {...register("email")}/>
                        {error.type === 1 ?
                            <p>{error.message}</p>
                            :
                            <p>{errors.email?.message}</p>
                        }
                        <label htmlFor="password">Hasło</label>
                        <input type="password" id="password" className="logReg-form-input" {...register("password")}/>
                        {error.type === 2 ?
                            <p>{error.message}</p>
                            :
                            <p>{errors.password?.message}</p>
                        }
                        {create ?
                            <>
                                <label htmlFor="password2">Powtórz hasło</label>
                                <input type="password" id="password2"
                                       className="logReg-form-input" {...register("password2")}/>
                                <p>{errors.password2?.message}</p>
                                <input type="submit" className="btnForm" value="Załóż konto"/>
                            </>
                            :
                            <input type="submit" className="btnForm" value="Zaloguj się"/>
                        }
                        {create ?
                            <Link to="/login">Zaloguj się</Link>
                            :
                            <Link to="/registration">Załóż konto</Link>
                        }
                    </form>

                </div>
            </>
    )
}

export default LogReg;
