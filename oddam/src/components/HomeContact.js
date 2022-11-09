import {useForm} from "react-hook-form";
import HomeFooter from "./HomeFooter"
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";
import {useState} from "react";

const schema = yup.object({
    name: yup.string().matches("^[A-Za-ząćęłżźńó]+$","Imię powinno być jednym wyrazem").required("Podaj imię"),
    email: yup.string().email("Podaj email").required("Podaj email"),
    message: yup.string().min(120,"Wiadomość musi mieć conajmniej 120 znaków").required("Napisz swoją wiadomość"),
}).required();

const HomeContact = () => {

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });
    const [show,setShow]=useState(false);

    const onSubmit = data => {
        fetch('https://fer-api.coderslab.pl/v1/portfolio/contact',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === "success") setShow(true);
            })
            .catch(error=>console.log(error));
    }

    return (
        <div className="contact">
            <div className="contact-container">
                <h1 className="contact-title">Skontaktuj się z nami</h1>
                <div className="decoration"/>
                {show?
                <p className="success">Wiadomość została wysłana! <br/> Wkrótce się skontaktujemy.</p>
                :
                <p className="success"/>
                }
                <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="contact-form-box">
                        <div>
                            <label htmlFor="name">Wpisz swoje imię</label>
                            <input id="name" placeholder="Krzysztof" {...register("name")}/>
                            <p>{errors.name?.message}</p>

                        </div>
                        <div>
                            <label htmlFor="email">Wpisz swój email</label>
                            <input type="email" id="email" placeholder="abc@xyz.pl" {...register("email")}/>
                            <p>{errors.email?.message}</p>

                        </div>
                    </div>
                    <label htmlFor="message">Wpisz swoją wiadomość</label>
                    <textarea id="message" {...register("message")}/>
                    <p>{errors.message?.message}</p>
                    <input type="submit" className="btnForm" value="Wyślij"/>
                </form>
            </div>
            <HomeFooter/>
        </div>
    )
}

export default HomeContact;
