import {useForm} from "react-hook-form";
import HomeFooter from "./HomeFooter"
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    name: yup.string().matches("^[A-Za-z]+$","Imię powinno być jednym wyrazem").required("Podaj imię"),
    email: yup.string().email("Podaj email").required("Podaj email"),
    message: yup.string().min(120,"Wiadomość musi mieć conajmniej 120 znaków").required("Napisz swoją wiadomość"),
}).required();

const HomeContact = () => {

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => {
        console.log(data)
    }

    return (
        <div className="contact">
            <div className="contact-container">
                <h1 className="contact-title">Skontaktuj się z nami</h1>
                <div className="decoration"/>
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
