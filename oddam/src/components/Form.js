import Navigation from "./Navigation";
import HomeContact from "./HomeContact";
import {FormContext} from "../context/FormContext";
import {useContext} from "react";
import {UserContext} from "../context/userContext"
import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
import FormStep3 from "./FormStep3";
import FormStep4 from "./FormStep4";
import FormSummary from "./FormSummary";
import {addDoc, collection} from "firebase/firestore";
import {db} from "../firebaseConfig";

const Form = () => {

    const {step, SetStep, type, bags, fromAndWhom, adres} = useContext(FormContext)
    const {user} = useContext(UserContext)

    const handleClick = e => {
        e.preventDefault();
        if (e.target.innerText === "Dalej") {
            if (step !== 5) SetStep(step + 1)
        } else if (e.target.innerText === "Wstecz") {
            if (step !== 1) SetStep(step - 1);
        } else {

            addDoc(collection(db, "submissions",), {
                user: user.uid,
                status: "submitted",
                type: type,
                bags: bags,
                localization: fromAndWhom.localization,
                organization: fromAndWhom.organization,
                whom: [...fromAndWhom.whom],
                whenFrom: {
                    ...adres
                }
            });

            console.log(
                user.uid, "\n",
                type, "\n",
                bags, "\n",
                fromAndWhom,
                adres,
            );

        }
    }

    return (
        <>
            <Navigation/>
            <div className="formHero">
                <div className="formHero-container">
                    <h1 className="formHero-title">Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM</h1>
                    <div className="decoration"/>
                    <h2 className="formHero-steps">Wystarczą 4 proste kroki:</h2>
                    <div className="formHero-box">
                        <div className="formHero-box-el">
                            <h3 className="formHero-box-el-title">1</h3>
                            <p className="formHero-box-el-text">Wybierz rzeczy</p>
                        </div>
                        <div className="formHero-box-el">
                            <h3 className="formHero-box-el-title">2</h3>
                            <p className="formHero-box-el-text">Spakuj je w worki</p>
                        </div>
                        <div className="formHero-box-el">
                            <h3 className="formHero-box-el-title">3</h3>
                            <p className="formHero-box-el-text">Wybierz fundację</p>
                        </div>
                        <div className="formHero-box-el">
                            <h3 className="formHero-box-el-title">4</h3>
                            <p className="formHero-box-el-text">Zamów kuriera</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="form">
                {step !== 5 ?
                    <p className="form-stepCount">Krok {step}/4</p>
                    :
                    <h2 className="form-title">Podsumowanie Twojej darowizny</h2>
                }
                {step === 1 ?
                    <FormStep1/>
                    :
                    step === 2 ?
                        <FormStep2/>
                        :
                        step === 3 ?
                            <FormStep3/>
                            :
                            step === 4 ?
                                <FormStep4/>
                                :
                                <FormSummary/>
                }
                {step === 1 ?
                    <button className="form-btn" onClick={handleClick}>Dalej</button>
                    :
                    step !== 5 ?
                        <>
                            <button className="form-btn" onClick={handleClick}>Wstecz</button>
                            <button className="form-btn" onClick={handleClick}>Dalej</button>
                        </>
                        :
                        <>
                            <button className="form-btn" onClick={handleClick}>Wstecz</button>
                            <button className="form-btn" onClick={handleClick}>Prześlij</button>
                        </>

                }
            </div>
            <HomeContact/>
        </>
    )
}

export default Form;
