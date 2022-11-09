import {useContext, useEffect, useState} from "react";
import {FormContext} from "../context/FormContext";
import Icon1 from "../assets/Icon-1.svg";
import Icon4 from "../assets/Icon-4.svg";

const FormSummary = () => {

    const {type, bags, fromAndWhom, adres} = useContext(FormContext)
    const [what, setWhat] = useState("")
    const [whom, setWhom] = useState([])

    useEffect(() => {
        switch (type) {
            case "godClothes":
                setWhat("ubrania w dobrym stanie");
                break;
            case "badClothes":
                setWhat("ubrania w złym stanie");
                break;
            case "toys":
                setWhat("zabawki");
                break;
            case "books":
                setWhat("książki");
                break;
            case "other":
                setWhat("inne");
                break;
        }
        setWhom(fromAndWhom.whom.map(el => {
            switch (el) {
                case "children":
                    return "dzieciom";
                case "mothers":
                    return "samotnym matkom";
                case "homeless":
                    return "bezdomnym";
                case "disabled":
                    return "niepełnosprawnym";
                case "oldPeople":
                    return "osobom starszym";
            }
        }));
    }, [])

    return (
        <div className="form-summary">
            <div className="form-summary-box">
                <h2 className="form-summary-box-title">Oddajesz:</h2>
                <div>
                    <img className="steps-box-icon" src={Icon1} alt="koszulka"/>
                    <label>{bags} {bags < 2 ? "worek" : bags < 5 ? "worki" : "worków"}, {what}, {whom.join(", ")}</label>
                </div>
                <div>
                    <img className="steps-box-icon" src={Icon4} alt="koszulka"/>
                    <label>do lokalizacji: {fromAndWhom.localization}</label>
                </div>
            </div>
            <div className="form-summary-box">
                <h2 className="form-summary-box-title">Adres odbioru:</h2>
                <div className="form-summary-box-elements">
                    <div>
                        <label>Ulica</label>
                        <label>{adres.street} </label>
                    </div>
                    <div>
                        <label>Miasto</label>
                        <label>{adres.city} </label>
                    </div>
                    <div>
                        <label>Kod pocztowy</label>
                        <label>{adres.postCode} </label>
                    </div>
                    <div>
                        <label>Numer telefonu</label>
                        <label>{adres.phone} </label>
                    </div>
                </div>
            </div>
            <div className="form-summary-box">
                <h2 className="form-summary-box-title">Termin odbioru:</h2>
                <div className="form-summary-box-elements">
                    <div>
                        <label>Data</label>
                        <label>{adres.date} </label>
                    </div>
                    <div>
                        <label>Godzina</label>
                        <label>{adres.hour} </label>
                    </div>
                    <div>
                        <label>Uwagi dla kuriera</label>
                        <label>{adres.notes} </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormSummary;
